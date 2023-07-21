import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { useNavigation } from '@react-navigation/native';

const MapViewScreen = () => {
  const [location, setLocation] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error('Error getting current location:', error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  const handleSelectLocation = () => {
    if (location) {
      navigation.navigate('Main', { location });
    }
  };

  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} />
        </MapView>
      ) : (
        <Text>Loading...</Text>
      )}

    <TouchableOpacity
        onPress={handleSelectLocation}
        style={styles.button}>
        <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>SELECT LOCATION</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    margin: '5%',
    marginBottom: '9%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#0081FB',
    borderRadius: 8
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MapViewScreen;