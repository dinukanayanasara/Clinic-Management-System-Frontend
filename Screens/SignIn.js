import {
  StyleSheet,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import AppTextInput from "../src/Components/AppTextInput";
import AppButton from "../src/Components/AppButton";
import Colors from "../src/Styles/Colors";
import InputPassword from "../src/Components/InputPassword";
import ErrorMessage from "../src/Components/ErrorMessage";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { bindActionCreators } from "redux";
import {
  setUserInfo,
} from "../src/Actions/UserAction";
import { connect } from "react-redux";
import axios from "axios";



const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).max(12).label("Password"),
});

const SignIn = (props) => {
  const navigation = useNavigation();

  const {role} = props.route.params

  const [state, setState]=useState('')
  if(role === "doctor"){
    setState(true)
  }

  const [loginFailed, setLoginFailed] = useState(false);

  const hSubmit = async ({ email, password }) => {


    let body =
    {    
      "email": email,
      "password": password
    }
    console.log(email)

    axios.post(`http://192.168.8.164:4000/user/login`,  body )
    .then(res => {
      console.log("Axios_Response",res.data);
      setLoginFailed(false);
      props.setUserInfo(res.data.user);
      navigation.navigate("TabNavigator")
      // console.log(res.data);
    }).catch(e=> {
      console.log(e)
      setLoginFailed(true);
    }
      
    )

  };

  console.log(props.user_info);

  return (
    <ScrollView style={{backgroundColor: "#fff"}}>
    <View style={styles.container}>
    
      <Image
        style={styles.logo}
        source={require("../assets/Img/Hospital_Logo.png")}
      />
      <Image
        style={styles.hospitalName}
        source={require("../assets/Img/BrandName.png")}
      />
      <View style={{ paddingTop: 90 }}></View>


      {/* <Text>{props.user_info.user_data}</Text>
      <Text>{props.user_info.user_data.role == '' ? '' : props.user_info.user_token }</Text> */}

      {/* redux example */}
      <Formik
        style={styles.formikContainer}
        initialValues={{ email: "", password: "" }}
        // onSubmit={()=>navigation.navigate('TabNavigator')}
        onSubmit={hSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <ErrorMessage
              error="Invalid email or password. Please try again."
              visibility={loginFailed}
            />

            <AppTextInput
              style={styles.EnvelopeIcon}
              Icon={"envelope"}
              IconSize={22}
              placeholder="Enter your email"
              placeholderTextColor="#578CCA"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
              textContentType="emailAddress"
              autoCapitalize="none"
              maxLength={30}
            />

            <ErrorMessage error={errors.email} visibility={touched.email} />
            <View style={styles.textInputSpacing}></View>

            <InputPassword
              style={styles.lockIcon}
              Icon={"lock"}
              IconSize={24}
              placeholder="Enter your password"
              placeholderTextColor="#578CCA"
              textContentType="password"
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
              maxLength={12}
            />

            <ErrorMessage
              error={errors.password}
              visibility={touched.password}
            />

            <StatusBar style="auto" />

            <View
              style={{ paddingTop: 10, alignSelf: "flex-end", marginRight: 32 }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("ResetPassword")}
              >
                <Text style={styles.forgetPasswordText}>Forget Password</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <AppButton
                style={styles.buttonStyle}
                title="SignIn"
                color="white"
                onPress={handleSubmit}
              />
            </View>

            {/* { amountError ? (
            <Text style={{ color: theme.colors.error, marginLeft: 6 }}>Amount must be less than or equal to {amount}</Text>
          ) : null} */}

            
            {/* {state ? (
              <View style={{ paddingTop: 10, flexDirection: "row" }}>
              <Text style={{ fontSize: 14 }}>Create an account</Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp_1")}>
                <Text style={styles.signUpText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            ): null} */}
    
              <View style={{ paddingTop: 10, flexDirection: "row" }}>
              <Text style={{ fontSize: 14 }}>Create an account</Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp_1")}>
                <Text style={styles.signUpText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
         
            
          </>
        )}
      </Formik>
      
    </View>
    </ScrollView>
  );
};
const mapStateToProps = (state) => ({
  user_info: state.user_info,
});

const mapDispatchToProps = (dispatch) => ({
  setUserInfo: bindActionCreators(setUserInfo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  formikContainer: {
    paddingTop: 20,
  },

  logo: {
    width: 100,
    height: 120,
    resizeMode: "stretch",
    alignItems: "center",
    marginTop: 20,
  },

  hospitalName: {
    width: 100,
    height: 60,
    resizeMode: "stretch",
    alignItems: "center",
  },

  EnvelopeIcon: {
    paddingLeft: 6,
  },

  lockIcon: {
    paddingLeft: 12,
  },

  buttonContainer: {
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonStyle: {
    minWidth: "85%",
  },
  
  EnvelopeIcon: {
    paddingLeft: 6,
  },

  phoneIcon:{
    paddingLeft: 9
  },
  buttonContainer:{
    marginTop:60,
    justifyContent: 'center',
    alignItems: 'center'
  
  
  },

  PasswordShown: {
    alignItems: "flex-end",
  },
  textInputSpacing: {
    marginTop: 25,
  },
  signUpText: {
    fontWeight: "bold",
    fontSize: 14,
    color: Colors.primary,
    paddingLeft: 6,
    fontStyle: "italic",
  },
  forgetPasswordText: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 14,
    color: Colors.TextColor,
  },
});
