import React, { useState } from "react";
import { View,StyleSheet , Text} from "react-native";
import { isValidObjField,  isValidEmail ,updateError } from "../utils/methods";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";






const SignupForm = () => {
    const [userInfo, setUserInfo]= useState({
        fullName:'',
        email:'',
        password:'',
        confirmPassword:'',
    });

    const [error, setError] = useState('')

    const{fullName,email, password, confirmPassword} = userInfo;

    const handleOnChangeText = (value, fieldName) => {
        setUserInfo({...userInfo, [fieldName]: value});
    };





    const isValidForm = () => {
        if(!isValidObjField(userInfo)) return updateError('Some fields are missing!', setError);
        if(!fullName.trim() || fullName.length < 3) return updateError('Enter valid name!', setError);
        if(!isValidEmail(email)) return updateError('Invalid Email!', setError);
        if(!password.trim() || password.length <8) return updateError('Password should have 8 characters!', setError);
        if(password !== confirmPassword) return updateError('Password does not match!', setError);

        return true; 
    }
    

    
    const submitForm = () => {
        if(isValidForm()) {
            console.log(userInfo);
        }
    };
   

    return (
      <FormContainer>
        {error? (<Text style= {{color:'red' , fontSize: 12, textAlign: 'center'}}>{error}</Text>): null}
        <FormInput value={fullName} onChangeText={(value) => handleOnChangeText(value, 'fullName') } label='Full Name' placeholder='ex: Kamal Perera'/>
        <FormInput value={email} onChangeText={(value) => handleOnChangeText(value, 'email') } autoCapitalize='none' label='E-mail' placeholder='ex: abc@gmail.com'/>
        <FormInput value={password} onChangeText={(value) => handleOnChangeText(value, 'password') } autoCapitalize='none' secureTextEntry label='Password' placeholder='********'/>
        <FormInput value={confirmPassword} onChangeText={(value) => handleOnChangeText(value, 'confirmPassword') } autoCapitalize='none' secureTextEntry label='Confirm Password' placeholder='********'/>
        <FormSubmitBtn onPress={submitForm}  title='Sign Up'/>
        
      </FormContainer>
    );
};

const styles = StyleSheet.create({});

export default SignupForm; 