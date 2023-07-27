import { ScrollView, StyleSheet, View, Alert, Text, SafeAreaView, TouchableOpacity} from 'react-native';

const Home = ({route, navigation}) => {

  // navigation.navigate(('Start'))

  

  const DATA = [
    
    { name: "Pankaj", price: 130, quantity: "10" },
    { name: "Jitender", price: 31, quantity: "12" },
    { name: "Rahul", price: 30, quantity: "5" },
    { name: "Aahil", price: 220, quantity: "8" },
    { name: "Bablu", price: 35, quantity: "20" },
    { name: "Rohan", price: 33, quantity: "30" },
    { name: "Amit", price: 16, quantity: "25" },
    { name: "Sunil", price: 30, quantity: "35" },
    { name: "Juned", price: 30, quantity: "15" },
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
              <Text style={styles.text} > quantity = {item.class} </Text>

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