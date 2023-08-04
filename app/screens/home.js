import React from 'react';
import { ScrollView, StyleSheet, View, Alert, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import client from '../api/client';
import FormSubmitBtn from '../components/FormSubmitBtn';




const Home = ({route, navigation}) => {

    const getData = async () => {
      try{
        const res = await client.get('products')
        // console.log(res.data)
        setData(res.data)
      }catch(e){
        console.log(e.message);
      }
    }
  
    const [data, setData] = useState([])
    const [update, setUpdate] = useState(false)
    
    useEffect(() => {
      const timeoutObj = setTimeout(() => {
        if(update) {setUpdate(false)} else {setUpdate(true)};
      }, 5000);
  
      getData();
    }, [update]);
  
    const Show_Selected_Item = (Item) => {
      // console.log(route.params.name)
      navigation.navigate('AboutProduct', {item: Item, name: route.params.name, token: route.params.token})
    }
  
    const goCart = () => {
      // console.log(route.params.name)
      navigation.navigate('Cart', {name: route.params.name, token: route.params.token})
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
                <Text style={styles.product} > {item.name} </Text>
                <Text style={styles.text} > Price: Rs. {item.price}/= </Text>
                <Text style={styles.text} > Quantity: = {item.quantity} </Text>
                <Divider />
              </TouchableOpacity>
            ))
          }
        </ScrollView>
        <View style={{width:250, alignSelf:'flex-end', paddingTop:10}}>
          <FormSubmitBtn title='Cart' onPress={goCart}/>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      paddingTop:20,
      paddingHorizontal:20,
      paddingBottom:20,
      backgroundColor:'#c9dfec'
    },
    product: {
      fontSize: 25,
      color: 'black',
      textAlign: 'left',
      paddingLeft: 10,
      paddingTop: 5
    },
    text: {
      fontSize: 18,
      color: 'black',
      textAlign: 'left',
      paddingLeft: 10,
      paddingTop: 5
    }
  });

export default Home;