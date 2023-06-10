// MainScreen.js
import React, { useState } from 'react';
import { View, Text, Image, TextInput, FlatList, Alert } from 'react-native';

const MainScreen = () => {
  const [postalCode, setPostalCode] = useState('');
  const predictions = [
    { time: '8:00 AM', high: 'High 26℃', low: 'Low 15℃' },
    { time: '9:00 AM', high: 'High 28℃', low: 'Low 17℃' },
    { time: '10:00 AM', high: 'High 30℃', low: 'Low 19℃' },
    { time: '11:00 AM', high: 'High 26℃', low: 'Low 15℃' },
    { time: '12:00 AM', high: 'High 28℃', low: 'Low 17℃' },
    { time: '1:00 AM', high: 'High 30℃', low: 'Low 19℃' },
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
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#9CD4F8' }}>
      <Image source={require('../images/center_image.png')} style={{ width: 300, height: 300 }} />
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', marginTop: 5 }}>20°C</Text>
      <Text style={{ fontSize: 18, fontWeight: '300', color: 'white', marginTop: 5 }}>Feels like 15°C</Text>
      <Text style={{ fontSize: 18, fontWeight: '300', color: 'white', marginTop: 5 }}>Night 5°C ↓ Day 28°C ↑</Text>
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
      <View style={{ width: '100%', marginTop: 20 }}>
      <View style={{ height: 1, backgroundColor: 'white', marginBottom: 5 }} />
        <Text style={{ fontSize: 16, fontWeight: '300', color: 'white', marginBottom: 5, textAlign:'center' }}>Weather Predictions for the Day</Text>
        <View style={{ height: 1, backgroundColor: 'white' }} />
        
      <FlatList
        data={predictions}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      </View>
    </View>
  );
};

export default MainScreen;