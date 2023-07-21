import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NewsAlertItem from './NewsAlertItem';

const NewsAlerts = () => {
    const navigation = useNavigation();
    const data = [
        {
            id: '1',
            image: 'https://example.com/image1.jpg',
            title: 'A Nova Scotia wildfire might soon be able to make its own weather — and that could be even worse',
            timeAgo: '5 mins ago',
        },
        {
            id: '2',
            image: 'https://example.com/image2.jpg',
            title: 'Unprecedented start to wildfire season destroyed almost 3 million hectares of forest: Blair',
            timeAgo: '10 mins ago',
        },
        {
            id: '3',
            image: 'https://example.com/image2.jpg',
            title: 'Longest stretch of summer-like weather so far this year for southern Ontario on the way',
            timeAgo: '15 mins ago',
        },
        {
            id: '4',
            image: 'https://example.com/image2.jpg',
            title: '‘Cover up plants’: Frost warning issued for large section of Ontario by Environment Canada',
            timeAgo: '20 mins ago',
        },
    ];

    return (
        <View style={{ flex: 1, backgroundColor: '#9CD4F8', alignItems: 'center' }}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <NewsAlertItem item={item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default NewsAlerts;