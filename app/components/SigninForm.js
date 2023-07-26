import React, { useState } from "react";
import { View,StyleSheet , Text, TextInput} from "react-native";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";
import { isValidEmail, isValidObjField, updateError } from "../utils/methods";
import client from "../api/client";

const SigninForm = ({navigation}) => {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState('')
    const {email, password} = userInfo;

    const handleOnChangeText = (value, fieldName) => {
        setUserInfo({...userInfo, [fieldName]: value})
    }

    const isValidForm = () => {
        if(!isValidObjField(userInfo)) return updateError('Required all fields!', setError)

        if(!isValidEmail(email)) return updateError('Invalid Email!', setError)

        if(!password.trim() || password.length < 8) return  updateError('Invalid password!', setError) 

        return true
    }

    const submitForm = async () => {
        if(isValidForm()) {
            try {
                const res = await client.post('/sign-in', {...userInfo});
                console.log(res.data);
                navigation.navigate('Home');
            } catch (error) {
                console.log(error.message);
                
            }   
        }
    }

    return (
      <FormContainer>
        {error? (<Text style= {{color:'red' , fontSize: 12, textAlign: 'center'}}>{error}</Text>): null}
        
        <FormInput 
        value={email}
        autoCapitalize='none'
        onChangeText={value => handleOnChangeText(value, 'email')}
        label='E-mail' 
        placeholder='ex: abc@gmail.com'/>

        <FormInput 
        value={password}
        autoCapitalize='none'
        secureTextEntry 
        onChangeText={value => handleOnChangeText(value, 'password')}
        label='Password' 
        placeholder='********'/>

        <FormSubmitBtn onPress={submitForm} title='Sign-In'/>
      </FormContainer>
    );
};

const styles = StyleSheet.create({});

export default SigninForm; 
