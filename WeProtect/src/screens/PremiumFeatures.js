import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PremiumFeatures = () => {
    const navigation = useNavigation();
    const [text, setText] = useState('');

    const saveButtonTap = () => {
        // Save button action
    };

    const compareButtonTap = () => {
        navigation.navigate('CompareScreen');
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#9CD4F8', alignItems: 'center' }}>
            <View style={styles.cameraView}>
                <TouchableOpacity style={styles.cameraViewContainer}>
                    <Image
                        source={require('../images/ic_camera.png')}
                        style={styles.profileImage}
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: 17, fontWeight: '600', color: 'black', marginBottom: 20 }}>SCAN TO PREDICT WEATHER</Text>
            </View>
            <View style={styles.compareView}>
                <View style={styles.compareSubView}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginTop: 20 }}>COMPARE WEATHER</Text>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity
                            onPress={saveButtonTap}
                            style={styles.pickBtn}>
                            <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>Location 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={saveButtonTap}
                            style={styles.pickBtn}>
                            <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>Location 2</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={compareButtonTap}
                    style={styles.saveBtn}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>COMPARE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.newsAlerts}>
                <TouchableOpacity
                    onPress={saveButtonTap}
                    style={styles.saveBtn}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>NEWS ALERTS</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cameraView: {
        width: '90%',
        // height:'20%',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 20,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    compareView: {
        width: '90%',
        // height: '20%',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 20,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    compareSubView: {
        backgroundColor: '#439CEF',
        width: '90%',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 20,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    newsAlerts: {
        width: '90%',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 20,
        borderColor: 'white'
    },
    saveBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '90%',
        margin: '5%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#0081FB',
        borderRadius: 8
    },
    pickBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '5%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#0081FB',
        borderRadius: 8
    },
    cameraViewContainer: {
        alignItems: 'center',
        width: 140,
        height: 140,
        borderRadius: 75,
        backgroundColor: 'gray',
        justifyContent: 'center',
        marginVertical: 20
    },
    profileImage: {
        width: 80,
        height: 80
    },
});

export default PremiumFeatures;