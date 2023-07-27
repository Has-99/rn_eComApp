import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Start from '../screens/start';
//import { ProductDetails } from '../screens/ProductDetails';
//import { ProductDetails } from '../screens/Productdeails';
import ProductDetails from '../screens/Productdetails';

import Cart from '../screens/cart';
import { CartProvider } from '../../CartContext';
import { CartIcon } from '../components/CartIcon';
import ProductsList from '../screens/ProductsList';


//import Home from '../screens/home';
//import Product_Details from '../screens/AddItemForm';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <CartProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start}/>
        <Stack.Screen name="Products" component={ProductsList} options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})} />
          <Stack.Screen name="Cart" component={Cart} options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})} />
        
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
};

export default MyStack;