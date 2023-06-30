import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Perform login action
    };

    const handleForgotPassword = () => {
        navigation.navigate('ForgotPassword')
    };

    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
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
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Password"
                    placeholderTextColor="#999"
                    secureTextEntry
                />
            </View>
            <TouchableOpacity
                onPress={handleForgotPassword}
                style={styles.forgotPasswordBtn}
            >
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleLogin}
                style={styles.loginBtn}
            >
                <Text style={styles.loginText}>LOG IN</Text>
            </TouchableOpacity>
            
            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.signupLink}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#9CD4F8',
        alignItems: 'center',
        paddingVertical: 30,
        justifyContent: 'center'
    },
    logo: {
        width: wp('50%'),
        height: wp('45%'),
    },
    inputContainer: {
        marginHorizontal: '10%',
        marginTop: '5%',
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4
    },
    input: {
        padding: 15,
        fontSize: 16
    },
    loginBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        marginTop: '5%',
        backgroundColor: '#0081FB',
        borderRadius: 8,
        paddingVertical: 15,
    },
    loginText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white'
    },
    forgotPasswordBtn: {
        // alignSelf: 'flex-end',
        alignItems:'flex-end',
        marginTop: 10,
        width: '80%',
    },
    forgotPasswordText: {
        fontSize: 14,
        color: 'white',
        textDecorationLine: 'underline'
    },
    signupContainer: {
        flexDirection: 'row',
        marginTop: '5%',
    },
    signupText: {
        fontSize: 14,
        color: 'white'
    },
    signupLink: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
});

export default LoginScreen;
