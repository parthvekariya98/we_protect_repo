import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import MenuScreen from './src/screens/MenuScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import PremiumFeatures from './src/screens/PremiumFeatures';
import PaymentScreen from './src/screens/PaymentScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import ForgotPassword from './src/screens/ForgotPassword';
import CompareScreen from './src/screens/CompareScreen';
import NewsAlerts from './src/screens/NewsAlerts';

const Stack = createStackNavigator();

const App = () => {
  const handleMenuPress = (navigation) => {
    navigation.navigate('Menu');
  };

  const handleBackButton = (navigation) => {
    navigation.goBack();
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            // backgroundColor: '#82CAF8',
            backgroundColor: '#439CEF',
          },
        }}
      >
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={({ navigation }) => ({
            title: 'WE Project',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              color: 'white',
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => handleMenuPress(navigation)} style={{ marginLeft: 16 }}>
                <Image source={require('./src/images/ic_menu.png')} style={{ width: 24, height: 24 }} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={({ navigation }) => ({
            title: 'Menu',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              color: 'white',
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => handleBackButton(navigation)} style={{ marginLeft: 16 }}>
                <Image source={require('./src/images/ic_back.png')} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ navigation }) => ({
            title: 'Profile',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              color: 'white',
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => handleBackButton(navigation)} style={{ marginLeft: 16 }}>
                <Image source={require('./src/images/ic_back.png')} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="PremiumFeature"
          component={PremiumFeatures}
          options={({ navigation }) => ({
            title: 'Premium Feature',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              color: 'white',
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => handleBackButton(navigation)} style={{ marginLeft: 16 }}>
                <Image source={require('./src/images/ic_back.png')} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>
            ),
          })}
        />
         <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={({ navigation }) => ({
            headerShown: false
          })}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={({ navigation }) => ({
            headerShown: false
          })}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={({ navigation }) => ({
            headerShown: false
          })}
        />
         <Stack.Screen
          name="CompareScreen"
          component={CompareScreen}
          options={({ navigation }) => ({
            title: 'Weather Comparison',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              color: 'white',
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => handleMenuPress(navigation)} style={{ marginLeft: 16 }}>
                <Image source={require('./src/images/ic_back.png')} style={{ width: 24, height: 24 }} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={({ navigation }) => ({
            title: 'Payment',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              color: 'white',
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => handleBackButton(navigation)} style={{ marginLeft: 16 }}>
                <Image source={require('./src/images/ic_back.png')} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="NewsAlerts"
          component={NewsAlerts}
          options={({ navigation }) => ({
            title: 'News Alerts',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              color: 'white',
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => handleBackButton(navigation)} style={{ marginLeft: 16 }}>
                <Image source={require('./src/images/ic_back.png')} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
