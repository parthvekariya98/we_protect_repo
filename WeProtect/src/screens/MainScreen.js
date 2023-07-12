// MainScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, FlatList, Alert, ScrollView, ActivityIndicator } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { getWeather, dailyForecast, showWeather, getLocation } from 'react-native-weather-api';
import { getCelsiusToKelvin } from '../helper/helper';

const MainScreen = () => {
  const [postalCode, setPostalCode] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [loading, setLoading] = useState(false);
  
  const [weatherData, setWeatherData] = useState(null);

  const predictions = [
    { time: '11:00 AM', high: 'High 22℃', low: 'Low 21℃' },
    { time: '12:00 PM', high: 'High 24℃', low: 'Low 22℃' },
    { time: '1:00 PM', high: 'High 23℃', low: 'Low 21℃' },
    { time: '2:00 PM', high: 'High 23℃', low: 'Low 22℃' },
    { time: '3:00 PM', high: 'High 22℃', low: 'Low 21℃' },
    { time: '4:00 PM', high: 'High 22℃', low: 'Low 20℃' },
    { time: '5:00 PM', high: 'High 21℃', low: 'Low 20℃' },
    { time: '6:00 PM', high: 'High 20℃', low: 'Low 19℃' }
  ];

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
      return new showWeather(weatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 20, paddingVertical: 7, borderBottomWidth: 1, borderBottomColor: 'white', backgroundColor: '#82CAF8' }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>{item.time}</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
        <Text style={{ fontSize: 15, fontWeight: '300', color: 'white', marginBottom: 5 }}>{item.high}</Text>
        <Text style={{ fontSize: 15, fontWeight: '300', color: 'white' }}>{item.low}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#9CD4F8' }}>
        <Image source={require('../images/icon1.png')} style={{ width: 300, height: 300, marginTop: 20, marginLeft: 40 }} />
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', marginTop: 5 }}>{weatherData ? getCelsiusToKelvin(weatherData.temp) : '22°C'}</Text>
        <Text style={{ fontSize: 18, fontWeight: '300', color: 'white', marginTop: 5 }}>Feels like {weatherData ? getCelsiusToKelvin(weatherData.feels_like) : '22°C'}</Text>
        <Text style={{ fontSize: 18, fontWeight: '300', color: 'white', marginTop: 5 }}>Night {weatherData ? getCelsiusToKelvin(weatherData.temp_min) : '22°C'} ↓ Day {weatherData ? getCelsiusToKelvin(weatherData.temp_max) : '22°C'} ↑</Text>
        {currentLocation == '' ?
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: '300', color: 'white', marginRight: 10 }}>Enter postal code</Text>
            <TextInput
              style={{ height: 40, width: 200, borderColor: 'white', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, color: 'black', backgroundColor: 'white' }}
              placeholder="e.g., A1B2C3"
              maxLength={6}
              value={postalCode}
              onChangeText={text => setPostalCode(text)}
              onSubmitEditing={handlePostalCodeSubmit}
            />
          </View>
          :
          <TouchableOpacity onPress={() => {setCurrentLocation('')}}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', marginTop: 5 }}>{currentLocation}</Text>
          </TouchableOpacity>
          
        }

        <View style={{ width: '100%', marginTop: 20 }}>
          <View style={{ height: 1, backgroundColor: 'white', marginBottom: 5 }} />
          <Text style={{ fontSize: 16, fontWeight: '300', color: 'white', marginBottom: 5, textAlign: 'center' }}>Weather Predictions for the Day</Text>
          <View style={{ height: 1, backgroundColor: 'white' }} />
          <FlatList
            data={predictions}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
          />
        </View>
        
      </View>
      {loading && (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(5px)', justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="gray" />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default MainScreen;