import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, View, Animated, Dimensions} from 'react-native';
import FormHeader from './app/components/FormHeader';
import FormSelectorBtn from './app/components/FormSelectorBtn';
import SigninForm from './app/components/SigninForm';
import SignupForm from './app/components/SignupForm';
import axios from 'axios';
import MyStack from './app/navigator/navigator';



export default function App() {

  
  
  return ( 
    <MyStack/>
  
  );
}
