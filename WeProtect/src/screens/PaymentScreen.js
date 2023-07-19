import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../helper/colors';
import { useNavigation } from '@react-navigation/native';

const PaymentScreen = () => {
  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const validateCardNumber = (value) => {
    const cardNumberRegex = /^[0-9]{12,19}$/;
    return cardNumberRegex.test(value);
  };

  const validateExpiryDate = (value) => {
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    return expiryDateRegex.test(value);
  };

  const validateCVV = (value) => {
    const cvvRegex = /^[0-9]{3,4}$/;
    return cvvRegex.test(value);
  };

  const handlePayment = () => {
    if (!validateCardNumber(cardNumber)) {
      Alert.alert('Error', 'Please enter a valid card number');
      return;
    }
  
    if (!cardName) {
      Alert.alert('Error', 'Please enter cardholder name');
      return;
    }
  
    if (!validateExpiryDate(expiryDate)) {
      Alert.alert('Error', 'Please enter a valid expiry date');
      return;
    }
  
    if (!validateCVV(cvv)) {
      Alert.alert('Error', 'Please enter a valid CVV');
      return;
    }
  
    // Handle payment logic
    console.log('Payment submitted');
    navigation.navigate('PremiumFeature')
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <View style={styles.cardLogoContainer}>
            <Text style={styles.cardLogo}>{cardNumber}</Text>
          </View>
          <View style={styles.cardRow}>
            <Text style={styles.cardLabel}>Cardholder Name</Text>
            <Text style={styles.cardLabel}>Exp Date</Text>
          </View>
          <View style={styles.cardRow}>
            <Text style={{ ...styles.cardInfo, color: '#FFF' }}>{cardName}</Text>
            <Text style={{ ...styles.cardInfo, color: '#FFF' }}>{expiryDate}</Text>
          </View>
        </View>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.cardInfo}>Cardholder Name</Text>
        <TextInput
          style={styles.input}
          placeholder="John Doe"
          keyboardType="default"
          value={cardName}
          onChangeText={(text) => setCardName(text)}
        />
        <Text style={styles.cardInfo}>Credit Card</Text>
        <TextInput
          style={styles.input}
          placeholder="1234-4567-8910"
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
        />
        <View style={styles.horizontalContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.cardInfo}>MMYY</Text>
            <TextInput
              style={styles.input}
              placeholder="mmyy"
              keyboardType="numeric"
              value={expiryDate}
              onChangeText={(text) => setExpiryDate(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.cardInfo}>CVV</Text>
            <TextInput
              style={styles.input}
              placeholder="123"
              keyboardType="numeric"
              value={cvv}
              onChangeText={(text) => setCVV(text)}
            />
          </View>
        </View>
        <TouchableOpacity onPress={handlePayment} style={styles.saveBtn}>
          <Text style={styles.buttonText}>SUBMIT PAYMENT</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: hp('5%'),
    backgroundColor: colors.primary,
  },
  cardContainer: {
    backgroundColor: '#333',
    borderRadius: 10,
    elevation: 5,
    width: wp('80%'),
    height: hp('22%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp('2%'),
  },
  cardContent: {
    alignItems: 'center',
  },
  cardLogoContainer: {
    backgroundColor: '#FFF',
    width: wp('50%'),
    height: hp('4%'),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('5%'),
  },
  cardLogo: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  cardNumber: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    letterSpacing: wp('0.3%'),
    color: '#FFF',
    marginBottom: hp('1%'),
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('70%'),
    marginBottom: hp('0.5%'),
  },
  cardLabel: {
    fontSize: wp('3%'),
    fontWeight: 'bold',
    color: '#FFF',
  },
  cardInfo: {
    fontSize: wp('3%'),
    marginBottom: hp('0.5%'),
  },
  formContainer: {
    width: wp('100%'),
    padding: wp('5%'),
    borderRadius: 10
  },
  input: {
    height: hp('5%'),
    borderColor: colors.card_input_border,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: hp('2%'),
    paddingHorizontal: wp('3%'),
  },
  saveBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginVertical: hp('3%'),
    paddingVertical: hp('2%'),
    backgroundColor: '#0081FB',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: wp('4%'),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    width: wp('42%'),
  },
});

export default PaymentScreen;
