import React from 'react'
import { View,StyleSheet, TouchableOpacity,Text } from "react-native";

const FormSubmitBtn = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={{fontSize:18, color: '#fff'}}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 45,
        backgroundColor: 'rgba(0,0,128,0.9)',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
     }
        
});

export default FormSubmitBtn;