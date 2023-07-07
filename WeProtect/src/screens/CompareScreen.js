import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';

const CompareScreen = () => {
    const navigation = useNavigation();
    const [location1, setLocation1] = useState('');
    const [location2, setLocation2] = useState('');

    const handleCompare = () => {
        // Handle weather comparison action
    };

    return (
        <View style={styles.container}>
            <View style={styles.locations}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('LocationSearch', { setLocation: setLocation1 })}
                    style={styles.locationButton}
                >
                    <Text style={styles.locationButtonText}>Toronto</Text>
                    <Text style={styles.locationText}>{location1}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('LocationSearch', { setLocation: setLocation2 })}
                    style={styles.locationButton}
                >
                    <Text style={styles.locationButtonText}>Vancouver</Text>
                    <Text style={styles.locationText}>{location2}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.weatherComparison}>
                <View style={styles.weatherItem}>
                    <Text style={styles.time}>11:00 AM</Text>
                    <Image source={require('../images/icon1.png')} style={styles.weatherImage} />
                    <Text style={styles.weatherText}>Mostly Cloudy</Text>
                    <Text style={styles.temperature}>22°C</Text>
                    <Text style={styles.highLow}>High 22°C / Low 21°C</Text>
                </View>

                <View style={styles.weatherItem}>
                    <Text style={styles.time}>8:00 AM</Text>
                    <Image source={require('../images/icon3.png')} style={styles.weatherImage} />
                    <Text style={styles.weatherText}>Rainy</Text>
                    <Text style={styles.temperature}>24°C</Text>
                    <Text style={styles.highLow}>High 24°C / Low 22°C</Text>
                </View>
            </View>

            <Text style={styles.comparisonStatement}>
                The weather in Location 1 is mostly cloudy with a temperature of 22°C (High 22°C / Low 21°C),
                while the weather in Location 2 is rainy with a temperature of 24°C (High 24°C / Low 22°C).
            </Text>

            <TouchableOpacity onPress={handleCompare} style={styles.compareButton}>
                <Text style={styles.compareButtonText}>RESET</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9CD4F8',
        alignItems: 'center',
        paddingTop: wp('10%')
        // justifyContent: 'center',
    },
    locations: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        width: wp('95%'),
    },
    locationButton: {
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
    locationButtonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white'
    },
    locationText: {
        fontSize: 16,
        fontWeight: '400',
        color: 'white',
    },
    weatherComparison: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    weatherItem: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    time: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        marginBottom: 5,
    },
    weatherImage: {
        width: 80,
        height: 80,
    },
    weatherText: {
        fontSize: 16,
        fontWeight: '400',
        color: 'white',
        marginBottom: 5,
    },
    temperature: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    highLow: {
        fontSize: 16,
        fontWeight: '400',
        color: 'white',
    },
    comparisonStatement: {
        fontSize: 16,
        fontWeight: '400',
        color: 'white',
        margin: 20,
        textAlign: 'center',
    },
    compareButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '90%',
        margin: '5%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#0081FB',
        borderRadius: 8
    },
    compareButtonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
});

export default CompareScreen;
