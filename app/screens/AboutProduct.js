import React from 'react';
import { useState, useEffect } from 'react';
import { Alert, StyleSheet, SafeAreaView, ScrollView, Text, Button, TouchableOpacity, View } from 'react-native';
import client from '../api/client';
import FormInput from '../components/FormInput';
import FormContainer from '../components/FormContainer';
import FormSubmitBtn from '../components/FormSubmitBtn';
import { updateError } from '../utils/methods';


const AboutProduct = ({route, navigation}) => {

  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState('')

  const product = route.params.item;
  const owner =route.params.name;
  const token =route.params.token;
  // console.log(route.params.token);

  const addToCart = async () => {
    try{
      if(Number(quantity)<1) return;
      const res = await client.post('addtocart', {
        "owner": owner,
        "image":product.image,
        "product": product.name,
        "quantity": Number(quantity),
        "price": product.price
      }, {headers:{Authorization: 'JWT ' + token,}})
      // console.log(res.data)
      if(!res.data.success){
        updateError('Stock unavailable', setError);
      }else{
        navigation.goBack();
      }
      // setData(res.data)
    }catch(e){
      console.log(e.message);
    }
  }

  return (
    <SafeAreaView style={styles.MainContainer}>
      <Text style={styles.topic} > {product.name} </Text>
      <Text style={styles.text2} >  {product.description} </Text>
      <Text  >  {product.image} </Text>
      <Text style={styles.text2} > In-Stock:  {product.quantity} </Text>
      <Text style={styles.text} > Price: Rs. {product.price}/= </Text>
      {error ? <Text style={{color:'red', textAlign:'center'}}>{error}</Text>:null}

      <FormContainer>
        <FormInput label='Quantity' autoCapitalize='none' keyboardType="numeric" onChangeText={value => setQuantity(value)}/>
        <View style={{width:200, alignSelf:'center',paddingTop:20}}>
            <FormSubmitBtn title='Add to Cart' onPress={addToCart}/>
        </View>
        
      </FormContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop:100,
    paddingHorizontal:20,
    paddingBottom:20,
    alignItems:'center',
    backgroundColor: '#c9dfec',
  },
  topic: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    paddingLeft: 10,
    paddingTop: 50
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    paddingLeft: 10,
    paddingTop: 5
  },
  text2: {
    fontSize: 16,
    color: '#797979',
    textAlign: 'auto',
    paddingLeft: 10,
    paddingTop: 5
  }

});

export default AboutProduct;