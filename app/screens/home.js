import { ScrollView, StyleSheet, View, Alert, Text, SafeAreaView, TouchableOpacity} from 'react-native';

const Home = ({route, navigation}) => {

  // navigation.navigate(('Start'))

  

  const DATA = [
    
    { name: "Kothmale Yoghurt", price: 70, quantity: 50 },
    { name: "Nutriline Oats 500g", price: 700, quantity: 12 },
    { name: "Kothmale Fresh milk 1l", price: 500, quantity: 15 },
    { name: "Milo Drink 180ml", price: 130, quantity: 20 },
    { name: "Coca cola 1l", price: 350, quantity: 20 },
    { name: "MD tomato Sauce 200ml", price: 330, quantity: 10 },
    { name: "Keels Chicken Sausage 210g", price: 540, quantity: 15 },
    { name: "Araliya Rice Keeri Samba 5kg", price: 1300, quantity: 35 },
    { name: "Dhal 1kg", price: 430, quantity: 25 },
  ];

  const Show_Selected_Item = (Item) => {

    navigation.navigate('Product_Details');
    //Alert.alert(Item);
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
    <SafeAreaView style={styles.container}>
      <ScrollView>

        {
          DATA.map((item, key) => (

            <TouchableOpacity key={key} onPress={() => Show_Selected_Item(item.name)}>
              <Text style={styles.text} > Name = {item.name} </Text>
              <Text style={styles.text} > Price= {item.price} </Text>
              <Text style={styles.text} > quantity = {item.quantity} </Text>

              <Divider />
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1 
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'left',
    paddingLeft: 10,
    paddingTop: 5
  }
});

export default Home;