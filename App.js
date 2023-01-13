import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IngredientsScreen from './src/screens/IngredientsScreen';
import MeatScreen from './src/screens/MeatScreen';
import ExtraIngredientsScreen from './src/screens/ExtraIngredientsScreen';
import ResponseScreen from './src/screens/ResponseScreen';
import Constants from 'expo-constants';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Ingredients">
        <Stack.Screen
          name="Ingredients"
          component={IngredientsScreen}
          options={{ title: 'Ingredients' }}
        />
        <Stack.Screen
          name="Meat"
          component={MeatScreen}
          options={{ title: 'Meats' }}
        />
        <Stack.Screen
          name="ExtraIngredients"
          component={ExtraIngredientsScreen}
          options={{ title: 'Extra Ingredients' }}
        />
        <Stack.Screen
          name="Response"
          component={ResponseScreen}
          options={{ title: 'Response' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
