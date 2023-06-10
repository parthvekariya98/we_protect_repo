// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import MenuScreen from './src/screens/MenuScreen';

const Stack = createStackNavigator();

const App = () => {
  const handleMenuPress = () => {
    console.log('Menu icon pressed');
  };

  const handleBackButton = () => {
    console.log('Menu icon pressed');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#82CAF8',
          },
        }}
      >
        {/* <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            title: 'Menu',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              color: 'white',
            },
            headerLeft: () => (
              <TouchableOpacity onPress={handleBackButton} style={{ marginLeft: 16 }}>
                <Image source={require('./src/images/ic_back.png')} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>
            ),
          }}
        /> */}
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            title: 'WE PROTECT',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              color: 'white',
            },
            headerLeft: () => (
              <TouchableOpacity onPress={handleMenuPress} style={{ marginLeft: 16 }}>
                <Image source={require('./src/images/ic_menu.png')} style={{ width: 24, height: 24 }} />
              </TouchableOpacity>
            ),
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;