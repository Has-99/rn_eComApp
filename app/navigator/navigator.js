import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Start from '../screens/start';
import Home from '../screens/home';
import AboutProduct from '../screens/AboutProduct';
import Cart from '../screens/cart';
//import { ProductDetails } from '../screens/ProductDetails';
//import { ProductDetails } from '../screens/Productdeails';
//import ProductDetails from '../screens/Productdetails';

//import Cart from '../screens/cart';
//import { CartProvider } from '../../CartContext';
//import { CartIcon } from '../components/CartIcon';
//import ProductsList from '../screens/ProductsList';



//import Product_Details from '../screens/AddItemForm';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
   // <CartProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name ="AboutProduct" component={AboutProduct}/>
        <Stack.Screen name = "Cart" component={Cart}/>
      </Stack.Navigator>
    </NavigationContainer>
    //</CartProvider>
  );
}

export default MyStack;