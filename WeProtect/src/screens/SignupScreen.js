import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const SignupScreen = () => {
    const navigation = useNavigation();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        // Perform signup action
        // navigation.navigate('Payment')
        navigation.navigate('PremiumFeature')
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
                    value={fullName}
                    onChangeText={setFullName}
                    placeholder="Full Name"
                    placeholderTextColor="#999"
                />
            </View>
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
                onPress={handleSignup}
                style={styles.signupBtn}
            >
                <Text style={styles.signupText}>SIGN UP</Text>
            </TouchableOpacity>
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.loginLink}>Log In</Text>
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
    signupBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        marginTop: '10%',
        backgroundColor: '#0081FB',
        borderRadius: 8,
        paddingVertical: 15,
    },
    signupText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white'
    },
    loginContainer: {
        flexDirection: 'row',
        marginTop: '5%',
    },
    loginText: {
        fontSize: 14,
        color: 'white'
    },
    loginLink: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
});

export default SignupScreen;
