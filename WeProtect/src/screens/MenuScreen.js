import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuScreen = () => {
    const navigation = useNavigation();

    const goToProfile = () => {
        // Navigate to the Profile screen
    };

    const goToPurchasePremium = () => {
        // Navigate to the Purchase Premium Features screen
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#9CD4F8' }}>
            <TouchableOpacity onPress={goToProfile} >
                <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 20, paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: 'white', backgroundColor: '#82CAF8' }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>Profile</Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Image source={require('../images/ic_right.png')} style={{ width: 24, height: 24 }} />
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToPurchasePremium}>
                <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 20, paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: 'white', backgroundColor: '#82CAF8' }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>Purchase Premium Features</Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Image source={require('../images/ic_right.png')} style={{ width: 24, height: 24 }} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default MenuScreen;