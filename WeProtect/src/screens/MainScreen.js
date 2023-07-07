// MainScreen.js
import React, { useState } from 'react';
import { View, Text, Image, TextInput, FlatList, Alert, ScrollView } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { TouchableOpacity } from 'react-native-gesture-handler';


const MainScreen = () => {
  const [postalCode, setPostalCode] = useState('');
  const [currentLocation, setCurrentLocation] = useState('Scarborough, ON');
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
    const regex = /^[A-Za-z]{2}\d[A-Za-z]\d$/;
    if (postalCode.length !== 6 || !regex.test(postalCode)) {
      Alert.alert('Invalid Postal Code', 'Please enter a valid postal code.');
      return false;
    }
    return true;
  };

  const handlePostalCodeSubmit = () => {
    if (validatePostalCode()) {
      // Postal code is valid, proceed with further actions
      console.log('Postal code:', postalCode);
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
        <Image source={require('../images/icon1.png')} style={{ width: 300, height: 300, marginTop: 20, marginLeft:40 }} />
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', marginTop: 5 }}>22°C</Text>
        <Text style={{ fontSize: 18, fontWeight: '300', color: 'white', marginTop: 5 }}>Feels like 22°C</Text>
        <Text style={{ fontSize: 18, fontWeight: '300', color: 'white', marginTop: 5 }}>Night 19°C ↓ Day 24°C ↑</Text>
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
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', marginTop: 5 }}>{currentLocation}</Text>
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
    </ScrollView>
  );
};

export default MainScreen;