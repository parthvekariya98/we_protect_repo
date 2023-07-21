import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NewsAlertItem from './NewsAlertItem';

const MapViewScreen = () => {
    const navigation = useNavigation();
    
    return (
        <View style={{ flex: 1, backgroundColor: '#9CD4F8', alignItems: 'center' }}>
           <Text>Map View Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default MapViewScreen;