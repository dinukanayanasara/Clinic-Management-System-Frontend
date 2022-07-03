import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../src/Styles/Colors';
import { useNavigation } from '@react-navigation/native';
import AppTextInput from '../src/Components/AppTextInput';
import AppButton from '../src/Components/AppButton';
import ErrorMessage from '../src/Components/ErrorMessage';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('*Please enter your email for reset password*').email().label("Email"),
});

const ResetPassword = () => {

const navigation = useNavigation(); 

const forgetPassword = (values)=> {
  console.log(values.email)
  const data = {
    email: values.email,
  
  }
  console.log(data)
  
  axios.post("http://192.168.8.164:4000/user/forgot-password", data)
  
  .then(res => {

      // const jsonres = await res.json();
      if(res.status===200){
        console.log(res.data)
        navigation.navigate("TabNavigator")
      }
      

  }).catch(err=> {
      console.log("error")
  })

}

  return (
    <View style={styles.container}>
      <View style={styles.resetPassword}>
        <TouchableOpacity onPress={()=> navigation.navigate('SignIn')} >
          <Text style={styles.resetText}>Reset your Password</Text>
        </TouchableOpacity>
            <Formik style={styles.formikContainer} 
              initialValues={{ email: ''}}
              // onSubmit={(values)=>console.log(values)}
              onSubmit={forgetPassword}
              validationSchema={validationSchema}
            >
              {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                <>
                  <Text style={styles.text}>Please enter your email address. We will send you an email to reset your password</Text>
                      <View style={styles.appTextInput}>
                        <AppTextInput
                          style={styles.EnvelopeIcon}
                          Icon={"envelope"}
                          IconSize={22}
                          placeholder="Enter your valid email address"
                          placeholderTextColor="#578CCA"
                          keyboardType="email-address"
                          onChangeText={handleChange("email")}
                          onBlur = {()=> setFieldTouched("email")}
                          textContentType="emailAddress"
                          autoCapitalize= "none"
                          maxLength={30}
                          
                        />
                      </View>

                      <ErrorMessage style={styles.errtext} error={errors.email} visibility={touched.email}/>


                  <View style={styles.buttonContainer}>
                    <AppButton 
                      style={styles.buttonStyle}
                      title="Confirm Email" 
                      color='white'
                      onPress={handleSubmit} 

                    /> 
                  </View>
                </>
              )}
          </Formik>
    </View>

    </View>


  )
}

export default ResetPassword

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    // justifyContent: 'center',
    backgroundColor: "#fff",

  },
  resetText:{
    fontSize: 32,
    fontWeight: 'bold',
    paddingTop: 30,
    textAlign: 'center'
    
  },
  text:{
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.TextColor,
    textAlign: 'center',
    paddingTop: 14,
    paddingHorizontal: 25


  },
  errtext:{
    paddingRight: 30
  },
  buttonContainer:{
    marginTop:60,
    justifyContent: 'center',
    alignItems: 'center',
   
    
  
  },
  EnvelopeIcon: {
    paddingLeft: 6,
  },
  appTextInput:{
    alignSelf: 'center',
    paddingTop: 60
  }
})