import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppTextInput from '../src/Components/AppTextInput';
import AppButton from '../src/Components/AppButton';
import Colors from '../src/Styles/Colors';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import ErrorMessage from '../src/Components/ErrorMessage';
import InputPassword from '../src/Components/InputPassword';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

const mobileRegex = RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);

const signUpValidationSchema = Yup.object().shape({
  role: Yup.string().required(),
  fname: Yup.string().required().min(1, 'To Short !').max(40).label("First Name"),
  lname: Yup.string().required().min(1).max(50).label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  mobile: Yup.string().required().matches(mobileRegex, "Invalid Mobile Number").label("Mobile Number"),
  dob: Yup.date().required().label("Birthday"),
  password: Yup.string()
    .required()
    .min(8).max(12)
    .label("Password"),
  confirmPassword: Yup.string()
    .required()
    .min(8)
    .max(12)
    .oneOf([Yup.ref("password"), null], "Oops!, Password does not match. Please enter the correct password")
    .label('Confirm password'),
});

const SignUp_1 = (props) => {

const navigation = useNavigation();


  const getData = (values)=> {
    console.log(values.email)
    const data = {
      role: values.role,
      firstName: values.fname,
      lastName: values.lname,
      email: values.email,
      phoneNumber: values.mobile,
      dob: values.dob,
      password: values.password,
      confirmPassword: values.confirmPassword
    
    }
    console.log(data)
    
    axios.post("http://192.168.8.164:4000/user/signup", data)
    
    .then(res => {

        // const jsonres = await res.json();
        if(res.status===200){
          console.log(res.data)
          navigation.navigate("TabNavigator")
        }
        

    }).catch(err=> {
        console.log("test")
    })

  }

// const hSubmit = async ({ role, fname, lname, email, phoneNumber, password, dob  }) => {

  
//       let payload=
//       {    
//         "role": role,
//         "firstName": fname,
//         "lastName": lname,
//         "email": email,
//         "phoneNumber": phoneNumber,
//         "dob": dob,
//         "password": password

//       }
  
//       axios.post(`'http://192.168.8.164:4000/user/signup`, payload )
//       .then(res => {
//         console.log("Axios_Response",res.config.data);
//         props.setUserInfo(res.data.result);

//       }).catch(e=> {
//         console.log(e)
//       }
        
//       )

//     };



  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.lableContainer}>
        <Text style={styles.lable}>First Name:</Text>
      </View>
      <Formik 
          initialValues={{ role: "patient", fname: '', lname:'', email: '', mobile: '', dob: '', password:'' , confirmPassword: '' }}
          // onSubmit={(values)=>getData(values)}
          onSubmit={getData}
          validationSchema={signUpValidationSchema}
        >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
        <>
            <AppTextInput 
              style={styles.EnvelopeIcon}
              Icon={"user-circle-o"}
              IconSize={24}
              placeholder="Enter your first name"
              placeholderTextColor="#578CCA"
              keyboardType="email-address"
              maxLength={42}
              onChangeText={handleChange("fname")}
              onBlur = {()=> setFieldTouched("fname")}
            />

            <ErrorMessage error={errors.fname} visibility={touched.fname}/>

          <View style={styles.lableContainer}>
            <Text style={styles.lable}>Last Name:</Text>
          </View>
            <AppTextInput 
              style={styles.EnvelopeIcon}
              Icon={"user-circle-o"}
              IconSize={24}
              placeholder="Enter your last name"
              placeholderTextColor="#578CCA"
              keyboardType="email-address"
              maxLength={52}
              onChangeText={handleChange("lname")}
              onBlur = {()=> setFieldTouched("lname")}
            />

          <ErrorMessage error={errors.lname} visibility={touched.lname}/>


          <View style={styles.lableContainer}>
            <Text style={styles.lable}>E-mail:</Text>
          </View>
            <AppTextInput 
              style={styles.EnvelopeIcon}
              Icon={"envelope"}
              IconSize={22}
              placeholder="Enter your email"
              placeholderTextColor="#578CCA"
              keyboardType="email-address"
              maxLength={30}
              onChangeText={handleChange("email")}
              onBlur = {()=> setFieldTouched("email")}
            />

          <ErrorMessage error={errors.email} visibility={touched.email}/>

          
          <View style={styles.lableContainer}>
            <Text style={styles.lable}>Mobile Number:</Text>
          </View>
            <AppTextInput 
              style={styles.phoneIcon}
              Icon={"phone"}
              IconSize={24}
              placeholder="Enter your mobile number"
              placeholderTextColor="#578CCA"
              keyboardType="numeric"
              maxLength={10}
              onChangeText={handleChange("mobile")}
              onBlur = {()=> setFieldTouched("mobile")}
            />

            <ErrorMessage error={errors.mobile} visibility={touched.mobile}/>

          <View style={styles.lableContainer}>
              <Text style={styles.lable}>Date of Birth:</Text>
          </View>
          <AppTextInput 
                style={styles.EnvelopeIcon}
                Icon={"calendar-plus-o"}
                IconSize={24}
                placeholder="YYYY-MM-DD"
                placeholderTextColor="#578CCA"
                keyboardType="decimal-pad"
                maxLength={10}
                onChangeText={handleChange("dob")}
                onBlur = {()=> setFieldTouched("dob")}
              />

              <ErrorMessage error={errors.dob} visibility={touched.dob}/>

              <View style={styles.lableContainer}>
                <Text style={styles.lable}>Password:</Text>
              </View>
              <InputPassword
                style={styles.lockIcon}
                Icon={"lock"}
                IconSize={24}
                placeholder="Create password"
                placeholderTextColor="#578CCA"
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur = {()=> setFieldTouched("password")}

              />

                <ErrorMessage error={errors.password} visibility={touched.password}/>

              <View style={styles.lableContainer}>
                <Text style={styles.lable}>Confirm Password:</Text>
              </View>
              <InputPassword
                style={styles.lockIcon}
                Icon={"lock"}
                IconSize={24}
                placeholder="Confirm your password"
                placeholderTextColor="#578CCA"
                textContentType="password"
                onChangeText={handleChange("confirmPassword")}
                onBlur = {()=> setFieldTouched("confirmPassword")}

              /> 

                <ErrorMessage error={errors.confirmPassword} visibility={touched.confirmPassword}/>

              
              <View style={styles.buttonContainer}>
                <AppButton 
                  style={styles.nextButtonStyle}
                  title="Create Account" 
                  color='white'
                  onPress={handleSubmit} 

                />
               </View>

        </>
        )}

      </Formik>

      
    </View>
    </ScrollView>
  )
}

export default SignUp_1

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    paddingVertical: 20
    
  },

  EnvelopeIcon: {
    paddingLeft: 6,
  },
  lockIcon:{
    paddingLeft: 12,
  },

  phoneIcon:{
    paddingLeft: 9
  },
  buttonContainer:{
    marginTop:60,
    justifyContent: 'center',
    alignItems: 'center'
  
  
  },

  buttonContainer:{
    marginTop:60,
    justifyContent: 'center',
    alignItems: 'center'
  
  
  },

  nextButtonStyle:{
    minWidth: "40%",
  },

  lable:{
    
    fontSize: 16,
    color: Colors.TextColor,
    fontFamily: Platform.OS ==="android" ? "Roboto" : "Avenir", 
    fontWeight: "bold",
  },
  lableContainer:{
    alignSelf: 'stretch',
    paddingLeft: 28,
    marginTop: 20

  },

  nextButtonStyle:{
    minWidth: "40%",
  },

  lable:{
    
    fontSize: 16,
    color: Colors.TextColor,
    fontFamily: Platform.OS ==="android" ? "Roboto" : "Avenir", 
    fontWeight: "bold",
  },
  lableContainer:{
    alignSelf: 'stretch',
    paddingLeft: 28,
    marginTop: 20

  },
  nicContainer:{
    marginTop: 20,
    // alignSelf: 'sc'
  }

})