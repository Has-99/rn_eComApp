import React from 'react'
import { View,StyleSheet, TouchableOpacity,Text } from "react-native";

const FormSubmitBtn = ({title, submitting, onPress}) => {
    const backgroundColor = submitting ? 'rgba(0,0,128,0.4)' : 'rgba(0,0,128,0.9)'

    return (
        <TouchableOpacity onPress={ !submitting ?  onPress : null} style={[styles.container, {backgroundColor}]}>
            <Text style={{fontSize:18, color: '#fff'}}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 45,
      //  backgroundColor: 'rgba(0,0,128,0.9)',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
     }
        
});

export default FormSubmitBtn;