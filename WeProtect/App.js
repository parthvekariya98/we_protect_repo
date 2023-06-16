import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import MenuScreen from './src/screens/MenuScreen';

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
            backgroundColor: '#82CAF8',
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
