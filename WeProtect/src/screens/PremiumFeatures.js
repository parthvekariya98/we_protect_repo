import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PremiumFeatures = () => {
    const navigation = useNavigation();
    const [text, setText] = useState('');

    const saveButtonTap = () => {
        // Save button action
    };

    const handleEditProfile = () => {
        // Handle edit profile action
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#9CD4F8', alignItems:'center' }}>
           <View style={styles.cameraView}>
                <TouchableOpacity style={styles.cameraViewContainer}>
                    <Image
                        source={require('../images/ic_camera.png')}
                        style={styles.profileImage}
                    />
                </TouchableOpacity>
           </View>
            <View style={styles.compareView}>
                
                <TouchableOpacity
                    onPress={saveButtonTap}
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
        width:'90%',
        height:'20%',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 20,
        borderColor: 'white',
        alignItems:'center',
        justifyContent:'center'
    },
    compareView: {
        width:'90%',
        height:'20%',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 20,
        borderColor: 'white'
    },
    newsAlerts: {
        width:'90%',
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

    cameraViewContainer: {
        alignItems: 'center',
        width: 140,
        height: 140,
        borderRadius: 75,
        backgroundColor:'gray',
        justifyContent:'center'
    },
    profileImage: {
        width: 80,
        height: 80
    },
});

export default PremiumFeatures;