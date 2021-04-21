import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import Welcome from './Screens/Welcome/Welcome'
import SignUp from './Screens/SignUp/SignUp'
import Login from './Screens/Login/Login'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <NativeBaseProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Fast Food Tracker"
          component={Welcome}
          options={navigationBarStyle}
        />
        <Stack.Screen 
        name="Sign Up" 
        component={SignUp} 
        options={navigationBarStyle}/>
        <Stack.Screen 
        name="Login" 
        component={Login} 
        options={navigationBarStyle}/>
      </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const navigationBarStyle =  {
  headerStyle: {
    backgroundColor: 'black',
    shadowColor: 'transparent'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  }
};