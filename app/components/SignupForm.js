import React, { useState } from "react";
import { View,StyleSheet , Text} from "react-native";
//import { isValidObjField,  isValidEmail ,updateError, updateMsg} from ,
import { isValidEmail, isValidObjField, updateError, updateMsg } from "../utils/methods";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";
import client from "../api/client";

import { Formik } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object({
    fullname: Yup.string().trim().min(3, 'Invalid name!').required('Name is required!'),
    email: Yup.string().email('Invalid Email').required('Email is required!'),
    password: Yup.string().trim().min(8, 'Password is too short!').required('Password is required!'),
    confirmPassword: Yup.string().equals([Yup.ref('password'), null],'Password does not match!')
});


const SignupForm = () => {
    const userInfo = {
            fullname:'',
            email:'',
            password:'',
            confirmPassword:'',  
    }
    const [error, setError] = useState('')

    const{fullname,email, password, confirmPassword} = userInfo;

    const handleOnChangeText = (value, fieldName) => {
        setUserInfo({...userInfo, [fieldName]: value});
    };




    const isValidForm = () => {
        if(!isValidObjField(userInfo)) return updateError('Require all fields!', setError);
        if(!fullname.trim() || fullname.length < 3) return updateError('Enter valid name!', setError);
        if(!isValidEmail(email)) return updateError('Invalid Email!', setError);
        if(!password.trim() || password.length <8) return updateError('Password should have 8 characters!', setError);
        if(password !== confirmPassword) return updateError('Password not match!', setError);

        return true; 
    };
    

    
    const submitForm = () => {
        if(isValidForm()) {
          //  console.log(userInfo);
          signUp(userInfo);
        }
    };



    // const signUp = async (values, formikActions) =>{
    //     const res = await client.post('/create-user', {
    //         ...values,
    //     })
    //     console.log(res.data);
    //     formikActions.resetForm();
    //     formikActions.setSubmitting(false);
        
    // };
   
    const signUp = async (values, formikActions) =>{
        try{
        
        const res = await client.post('/create-user', {
            ...values,
        })
        console.log(res.data);
        formikActions.resetForm();
        formikActions.setSubmitting(false);  
        if(res.data.success){
            const res2 = await client.post('/createcart', {
                  "owner": userInfo.fullname
                 })
             updateMsg('Signup Successful', setMsg)
        }
            else{
                updateError(res.data.message, setError)
                  }
        }catch(error){
              console.log(error.message)
     }
   }
            

//     const signUp= async (values) => {
//     try{
//       const res = await client.post('/createuser', {
//         name: userInfo.fullName,
//         email: userInfo.email,
//         password: userInfo.password
//       })
//       if(res.data.success){
//         const res2 = await client.post('/createcart', {
//           "owner": userInfo.fullName
//         })
//         updateMsg('Signup Successful', setMsg)
//       }
//       else{
//         updateError(res.data.message, setError)
//       }
//     }catch(error){
//       console.log(error.message)
//     }
//   }



    return (
      <FormContainer>
        <Formik 
            initialValues={userInfo} 
            validationSchema={validationSchema} 
            onSubmit={signUp}
        >
            {({values, errors, touched, isSubmitting ,handleChange, handleBlur,handleSubmit}) => {

              
                const {fullname, email, password, confirmPassword} = values;
                return (
                  <>
                    <FormInput 
                        value={fullname} 
                        error={touched.fullname && errors.fullname}
                        onChangeText={handleChange('fullname') }
                        onBlur= {handleBlur('fullname')} 
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