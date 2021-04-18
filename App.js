import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import Welcome from './Screens/Welcome/Welcome'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <NativeBaseProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ 
            title: 'Fast Food Tracker',
            headerStyle: {
              backgroundColor: 'black',
              shadowColor: 'transparent'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }, 
          }}
        />
      </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}