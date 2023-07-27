import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Start from '../screens/start';
import Home from '../screens/home';
import Product_Details from '../screens/AddItemForm';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name= "Product_Details" component={Product_Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;