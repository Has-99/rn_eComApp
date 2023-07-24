import React, { useState } from "react";
import { View,StyleSheet , Text} from "react-native";
import { isValidObjField,  isValidEmail ,updateError } from "../utils/methods";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";

import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    fullName: Yup.string().trim().min(3, 'Invalid name!').required('Name is required!'),
    email: Yup.string().email('Invalid Email').required('Email is required!'),
    password: Yup.string().trim().min(8, 'Password is too short!').required('Password is required!'),
    confirmPassword: Yup.string().equals([Yup.ref('password'), null],'Password does not match!')
});

const SignupForm = () => {
    const userInfo = {
            fullName:'',
            email:'',
            password:'',
            confirmPassword:'',  
    }
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
    };
    

    
    const submitForm = () => {
        if(isValidForm()) {
            console.log(userInfo);
        }
    };
   

    return (
      <FormContainer>
        <Formik 
            initialValues={userInfo} 
            validationSchema={validationSchema} 
            onSubmit={(values, formikActions) =>{
                setTimeout(() => {
                    console.log(values)
                    formikActions.resetForm();
                    formikActions.setSubmitting(false)
                }, 3000);
            }}
        >
            {({values, errors, touched, isSubmitting ,handleChange, handleBlur,handleSubmit}) => {

              
                const {fullName, email, password, confirmPassword} = values;
                return (
                  <>
                    <FormInput 
                        value={fullName} 
                        error={touched.fullName && errors.fullName}
                        onChangeText={handleChange('fullName') }
                        onBlur= {handleBlur('fullName')} 
                        label='Full Name' 
                        placeholder='ex: Kamal Perera'
                    />
                    <FormInput 
                        value={email} 
                        error={touched.email && errors.email}
                        onChangeText={handleChange( 'email') }
                        onBlur= {handleBlur('email')}  
                        autoCapitalize='none' 
                        label='E-mail' 
                        placeholder='ex: abc@gmail.com'
                    />
                    <FormInput 
                        value={password} 
                        error={touched.password && errors.password}
                        onChangeText={handleChange( 'password')}
                        onBlur= {handleBlur('password')} 
                        autoCapitalize='none' 
                        secureTextEntry label='Password' 
                        placeholder='********'
                    />
                    <FormInput 
                        value={confirmPassword} 
                        error={touched.confirmPassword && errors.confirmPassword}
                        onChangeText={handleChange('confirmPassword')} 
                        onBlur= {handleBlur('confirmPassword')} 
                        autoCapitalize='none' 
                        secureTextEntry label='Confirm Password' 
                        placeholder='********'
                    />
                    <FormSubmitBtn submitting={isSubmitting} onPress={handleSubmit}  title='Sign Up'/>
                  </>
                );
            }}
        </Formik>

        
      </FormContainer>
    );
};

const styles = StyleSheet.create({});

export default SignupForm; 