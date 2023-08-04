import React from 'react';
import { useState, useEffect } from 'react';
import { Alert, StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import client from '../api/client';
import FormSubmitBtn from '../components/FormSubmitBtn';

const Cart = ({route, navigation}) => {

  token = route.params.token;

  const getData = async () => {
    try{
      const res = await client.post('getCart', {
        "owner": route.params.name
    }, {headers:{Authorization: 'JWT ' + token,}})
      // console.log(route.params.name)
      setData(res.data)
      setCost(total(res.data));
    }catch(e){
      console.log(e.message);
    }
  }

  const total = (list) => {
    var value = 0;
    for (key in list){
      value += (list[key].price*list[key].quantity)
      // console.log(list[key].price);
    }
    return value;
  }

  const [data, setData] = useState([])
  const [cost, setCost] = useState(0)

  const placeOrder = async () =>{
    try{
      const result = client.put('placeCart', {
        "owner": route.params.name
      }, {headers:{Authorization: 'JWT ' + token,}})
    }catch(e){
      console.log(e.message);
    }
  }
  

  useEffect(() => {
    getData();
  }, [data]);

  const Show_Selected_Item = (Item) => {
    Alert.alert('Remove Item?', 'Press OK to remove item from cart.', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK', onPress: () => removeItem(route.params.name, Item.product, Item.quantity)},
    ]);
  }

  const removeItem = async (owner, item, quantity) =>{
    try{
      const res = await client.post('removefromcart', {
        "owner": owner,
        "product": item,
        "quantity": quantity
      }, {headers:{Authorization: 'JWT ' + token,}})
      setData(res.data)
      setCost(total(res.data));
    }catch(e){
      console.log(e.message);
    }
  }

  const Divider = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: 'black',
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        {
          data.map((item, key) => (
            <TouchableOpacity key={key} onPress={() => Show_Selected_Item(item)}>
              <Text style={styles.product} > {item.product} </Text>
              <Text style={styles.text} > Price: Rs.{item.price}/= </Text>
              <Text style={styles.text} > Quantity: {item.quantity} </Text>
              <Divider />
            </TouchableOpacity>
          ))
        }
      </ScrollView>
      <View>
        <Text style={{paddingVertical:10, alignSelf:'center'}}>Total Price: {cost}</Text>
        <FormSubmitBtn title='Place Order' onPress={placeOrder}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop:50,
    paddingHorizontal:20,
    paddingBottom:20,
    backgroundColor:'#c9dfec'
  },
  product: {
    fontSize: 32,
    color: 'black',
    textAlign: 'left',
    paddingLeft: 10,
    paddingTop: 5
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'left',
    paddingLeft: 10,
    paddingTop: 5
  }
});

export default Cart;