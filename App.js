import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import AddPlayerScreen from './src/screens/AddPlayerScreen';
import PlayerDetailScreen from './src/screens/PlayerDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Jugadores" component={HomeScreen} />
        <Stack.Screen name="Añadir Jugador" component={AddPlayerScreen} />
        <Stack.Screen name="Detalles" component={PlayerDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
