import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LibraryScreen from './screens/LibraryScreen';
import SplashScreen from './screens/SplashScreen';
import BookScreen from './screens/BookScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen name="Accueil" component={SplashScreen} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="Bibliothèque" component={LibraryScreen} />
        <Stack.Screen name="Détails" component={BookScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
