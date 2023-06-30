import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ForgotPassword = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    const handleForgotPassword = () => {
        // Handle forgot password action
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../images/AppIcon.png')}
                style={styles.logo}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <TouchableOpacity
                onPress={handleForgotPassword}
                style={styles.forgotPasswordBtn}
            >
                <Text style={styles.forgotPasswordText}>Reset Password</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backBtn}
            >
                <Text style={styles.backText}>Back to Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9CD4F8',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '10%',
    },
    logo: {
        width: wp('50%'),
        height: wp('45%'),
        marginBottom: '10%',
    },
    inputContainer: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        marginBottom: '5%',
    },
    input: {
        padding: 15,
        fontSize: 16,
    },
    forgotPasswordBtn: {
        width: '100%',
        backgroundColor: '#0081FB',
        borderRadius: 8,
        paddingVertical: 15,
        marginBottom: '5%',
    },
    forgotPasswordText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
    },
    backBtn: {
        width: '100%',
    },
    backText: {
        fontSize: 16,
        color: 'white',
        textDecorationLine: 'underline',
        textAlign: 'center',
    },
});

export default ForgotPassword;