import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, FlatList, Alert, ScrollView, ActivityIndicator, KeyboardAvoidingView, StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { getWeather, dailyForecast, showWeather, getLocation } from 'react-native-weather-api';
import { getCelsiusToKelvin, getFormattedHourFromDate, roundOff } from '../helper/helper';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';

const MainScreen = () => {
  const [postalCode, setPostalCode] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [hourlyData, setHourlyData] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const navigation = useNavigation();

  const handleLocationSelect = () => {
    navigation.navigate('MapViewScreen');
  };

  const validatePostalCode = () => {
    const regex = /^[A-Za-z]\d[A-Za-z]?\d[A-Za-z]\d$/;
    if (!regex.test(postalCode)) {
      Alert.alert('Invalid Postal Code', 'Please enter a valid Canadian postal code.');
      return false;
    }
    return true;
  };

  const handlePostalCodeSubmit = async () => {
    if (validatePostalCode()) {
      setLoading(true);
      try {
        const response = await getCityFromPostalCode(postalCode);
        if (response) {
          setCurrentLocation(response);
        } else {
          setCurrentLocation('');
        }
      } catch (error) {
        console.error('Error fetching city data:', error);
        setCurrentLocation('');
      } finally {
        setLoading(false);
      }
    }
  };

  const getCityFromPostalCode = async (postalCode) => {
    try {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${postalCode}&key=0c95cd54ecfb432d9d763db20bb9ec30`);
      if (response.data && response.data.results.length > 0) {
        const { city } = response.data.results[0].components;
        const { state_code } = response.data.results[0].components;
        const final = `${city}, ${state_code}`;

        try {
          const data = await fetchWeatherByCity(city, "CA");
          console.log('--------->');
          console.log(data);
          setWeatherData(data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }

        return final;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching city data:', error);
      return null;
    }
  };

  const fetchWeatherByCity = async (city, country) => {
    try {
      const weatherData = await getWeather({
        key: "d81cc63be876f0325597520897439de7",
        city: city,
        country: country
      });

      fetchHourlyWeather(city);
      return new showWeather(weatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  };

  const fetchHourlyWeather = async (city) => {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
        params: {
          q: city,
          appid: 'd81cc63be876f0325597520897439de7',
          units: 'metric',
          cnt: 10,
        },
      });

      const { list } = response.data;
      setHourlyData(list);
      console.log(list);
    } catch (error) {
      console.error('Error fetching hourly weather data:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.weatherItem}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{getFormattedHourFromDate(item.dt_txt)}</Text>
      </View>
      <View style={styles.temperatureContainer}>
        <Text style={styles.temperatureText}>{roundOff(item.main.temp)}</Text>
      </View>
      <View style={styles.tempMinMaxContainer}>
        <Text style={styles.tempMinMaxText}>{roundOff(item.main.temp_max)} ↑</Text>
        <Text style={styles.tempMinMaxText}>{roundOff(item.main.temp_min)} ↓</Text>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Image
            source={require('../images/icon1.png')}
            // source={{ uri: weatherData ? weatherData.icon : '' }}
            style={styles.weatherIcon}
          />
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.temperature}>{weatherData ? getCelsiusToKelvin(weatherData.temp) : ''}</Text>
            <Image
              source={{ uri: weatherData ? weatherData.icon : '' }}
              style={styles.iconImage}
            />
          </View>
          <Text style={styles.feelsLike}>Feels like {weatherData ? getCelsiusToKelvin(weatherData.feels_like) + ' (' + weatherData.description + ')' : ''}</Text>
          <Text style={styles.tempMinMax}>Night {weatherData ? getCelsiusToKelvin(weatherData.temp_min) : ''} ↓ Day {weatherData ? getCelsiusToKelvin(weatherData.temp_max) : ''} ↑</Text>

          {/* Postal Code and Select Location */}
          {currentLocation == '' ?
          <View style={styles.postalCodeContainer}>
            <View style={styles.postalCodeInputContainer}>
              <Text style={styles.postalCodeText}>Enter postal code</Text>
              <TextInput
                style={styles.postalCodeInput}
                placeholder="e.g., A1B2C3"
                maxLength={6}
                value={postalCode}
                onChangeText={text => setPostalCode(text)}
                onSubmitEditing={handlePostalCodeSubmit}
              />
            </View>
            <Text style={styles.orText}>----  OR  ----</Text>
            <TouchableOpacity onPress={handleLocationSelect} style={styles.selectLocationButton}>
              <Text style={styles.selectLocationButtonText}>Select Location</Text>
            </TouchableOpacity>
          </View>
          
          
           :
            <TouchableOpacity onPress={() => { setCurrentLocation('') }}>
              <Text style={styles.currentLocationText}>{currentLocation}</Text>
            </TouchableOpacity>
          }

          {/* Weather Predictions */}
          <View style={styles.weatherPredictionsContainer}>
            <View style={styles.separator} />
            <Text style={styles.weatherPredictionsTitle}>Weather Predictions for the Day</Text>
            <View style={styles.separator} />
            <FlatList
              data={hourlyData}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              scrollEnabled={false}
            />
          </View>

        </View>
      </ScrollView>
      {loading && (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(5px)', justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="gray" />
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#9CD4F8',
  },
  weatherIcon: {
    width: 300,
    height: 300,
    marginTop: 20,
    marginLeft: 40,
  },
  temperature: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
  iconImage: {
    width: 50,
    height: 50,
  },
  feelsLike: {
    fontSize: 18,
    fontWeight: '300',
    color: 'white',
    marginTop: 5,
  },
  tempMinMax: {
    fontSize: 18,
    fontWeight: '300',
    color: 'white',
    marginTop: 5,
  },
  postalCodeContainer: {
    alignItems: 'center',
  },
  postalCodeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  postalCodeText: {
    fontSize: 18,
    fontWeight: '300',
    color: 'white',
    marginRight: 10,
  },
  postalCodeInput: {
    height: 40,
    width: 200,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'black',
    backgroundColor: 'white',
  },
  orText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
  },
  selectLocationButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#439CEF',
    borderRadius: 8,
    width: wp('42%'),
  },
  selectLocationButtonText: {
    fontSize: 18,
    fontWeight: '300',
    color: 'white',
  },
  currentLocationText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
  weatherPredictionsContainer: {
    width: '100%',
    marginTop: 20,
  },
  separator: {
    height: 1,
    backgroundColor: 'white',
  },
  weatherPredictionsTitle: {
    fontSize: 16,
    fontWeight: '300',
    color: 'white',
    marginVertical: 5,
    textAlign: 'center',
  },
  weatherItem: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    backgroundColor: '#82CAF8',
  },
  timeContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  timeText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  temperatureContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  temperatureText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  tempMinMaxContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  tempMinMaxText: {
    fontSize: 15,
    fontWeight: '300',
    color: 'white',
    marginBottom: 5,
  },
});

export default MainScreen;
