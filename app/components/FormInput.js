import React from "react";
import { View,StyleSheet, Text, TextInput} from "react-native";
//import FormContainer from "./FormContainer";

const FormInput = (props) => {
    const {placeholder, label, error} = props
    return (
      <>
      <View 
        style={{
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            marginBottom: 5
        }}>
      <Text style={{fontWeight:'bold'}}>{label}</Text>
      {error? <Text style={{color: 'red', fontSize: 12}}>{error}</Text> : null}
        
      </View>
        <TextInput  {...props}placeholder={placeholder} style={styles.input}/>
     </>

    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1, 
        borderColor:'rgba(0,0,128,0.6)', 
        height: 35, 
        borderRadius:8, 
        fontSize: 16, 
        paddingLeft: 10 ,
        
        marginBottom: 20
        }
});

export default FormInput; 