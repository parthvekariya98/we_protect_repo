import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import colors from '../helper/colors';

const PaymentScreen = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCVV] = useState('');

    const handlePayment = () => {
        // Handle payment logic
        console.log('Payment submitted');
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.cardContainer}>
                <View style={styles.cardContent}>
                    <View style={styles.cardLogoContainer}>
                        <Text style={styles.cardLogo}>Bank Logo</Text>
                    </View>
                    <Text style={styles.cardNumber}>{cardNumber}</Text>
                    <View style={styles.cardRow}>
                        <Text style={styles.cardLabel}>Cardholder Name</Text>
                        <Text style={styles.cardLabel}>Exp Date</Text>
                    </View>
                    <View style={styles.cardRow}>
                        <Text style={styles.cardInfo}>John Doe</Text>
                        <Text style={styles.cardInfo}>{expiryDate}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.cardInfo}>Credit Card</Text>
                <TextInput
                    style={styles.input}
                    placeholder="1234-4567-XXXX"
                    keyboardType="numeric"
                    value={cardNumber}
                    onChangeText={text => setCardNumber(text)}
                />
                <View style={styles.horizontalContainer}>
                    <View>
                        <Text style={styles.cardInfo}>MMYY</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="mmyy"
                            keyboardType="numeric"
                            value={expiryDate}
                            onChangeText={text => setExpiryDate(text)}
                        />
                    </View>
                    <View>
                        <Text style={styles.cardInfo}>CVV</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="123"
                            keyboardType="numeric"
                            value={cvv}
                            onChangeText={text => setCVV(text)}
                        />
                    </View>

                </View>


                <TouchableOpacity
                    onPress={handlePayment}
                    style={styles.saveBtn}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>Submit Payment</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '5%',
        backgroundColor: colors.primary,
    },
    cardContainer: {
        backgroundColor: '#333',
        borderRadius: 10,
        elevation: 5,
        width: '80%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    cardContent: {
        alignItems: 'center',
    },
    cardLogoContainer: {
        backgroundColor: '#FFF',
        width: '80%',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    cardLogo: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 2,
        color: '#FFF',
        marginBottom: 10,
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 5,
    },
    cardLabel: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFF',
    },
    cardInfo: {
        fontSize: 13,
        marginBottom: 5
    },
    formContainer: {
        width: '100%',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: colors.card_input_border,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    saveBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginVertical: '5%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#0081FB',
        borderRadius: 8
    },
    horizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default PaymentScreen;
