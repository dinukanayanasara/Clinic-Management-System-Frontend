import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import AppButton from '../src/Components/AppButton';
import AppTextInput from '../src/Components/AppTextInput';
import TextArea from '../src/Components/TextArea';
import Colors from '../src/Styles/Colors';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ScrollView } from 'react-native-gesture-handler';
import ErrorMessage from '../src/Components/ErrorMessage';
import axios from 'axios';

const formValidationSchema = Yup.object().shape({
    fname: Yup.string().required().min(1, 'To Short !').max(40).label("First Name"),
    lname: Yup.string().required().min(1).max(50).label("Last Name"),
    OPD_no: Yup.number().required().label("OPD_No"),
    reception_no: Yup.number().required().label("Reception_No"),
    Working_Place:  Yup.string().required().label("Working_Place"),
    address: Yup.string().required().label("Address"),
    requestDate: Yup.date().required().label("Requested Date"),
    effectedDate: Yup.date().required().label("Effected Date"),
    Description:  Yup.string().required().label("Description"),
    Duration: Yup.number().required().label("Reception_No"),
    Recomendation: Yup.string().required().label("Recomendation"),

  });

export default function IssuMedicalReport() {
    const navigation = useNavigation();

    
//   const getData = (values)=> {
//     console.log(values.email)
//     const data = {
//       role: values.role,
//       firstName: values.fname,
//       lastName: values.lname,
//       email: values.email,
//       phoneNumber: values.mobile,
//       dob: values.dob,
//       password: values.password,
//       confirmPassword: values.confirmPassword
    
//     }
//     console.log(data)
    
//     axios.post("http://192.168.8.164:4000/user/signup", data)
    
//     .then(res => {

//         // const jsonres = await res.json();
//         if(res.status===200){
//           console.log(res.data)
//           navigation.navigate("TabNavigator")
//         }
        

//     }).catch(err=> {
//         console.log("test")
//     })

//   }


    return (
        <ScrollView>
        <View style={styles.container}>
          <View style={styles.lableContainer}>
            <Text style={styles.lable}>First Name:</Text>
          </View>
          <Formik 
              initialValues={{fname: '', lname:'', OPD_no: '', reception_no: '', Working_Place: '', address:'' , requestDate: '', effectedDate: '',Description:'', Duration:'', Recomendation:''  }}
              // onSubmit={(values)=>getData(values)}
            //   onSubmit={getData}
              validationSchema={formValidationSchema}
            >
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
            <>
                <AppTextInput 
                  style={styles.EnvelopeIcon}
                  Icon={"user-o"}
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
                  Icon={"user-o"}
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
                <Text style={styles.lable}>OPD No:</Text>
              </View>
                <AppTextInput 
                  style={styles.EnvelopeIcon}
                  Icon={"plus-square-o"}
                  IconSize={26}
                  placeholder="Enter OPD number"
                  placeholderTextColor="#578CCA"
                  keyboardType="numeric"
                  maxLength={30}
                  onChangeText={handleChange("OPD_no")}
                  onBlur = {()=> setFieldTouched("OPD_no")}
                />
    
              <ErrorMessage error={errors.OPD_no} visibility={touched.OPD_no}/>
    
              
              <View style={styles.lableContainer}>
                <Text style={styles.lable}>Reception No:</Text>
              </View>
                <AppTextInput 
                  style={styles.phoneIcon}
                  Icon={"file-text-o"}
                  IconSize={23}
                  placeholder="Enter reception number"
                  placeholderTextColor="#578CCA"
                  keyboardType="numeric"
                  maxLength={10}
                  onChangeText={handleChange("reception_no")}
                  onBlur = {()=> setFieldTouched("reception_no")}
                />
    
                <ErrorMessage error={errors.reception_no} visibility={touched.reception_no}/>
    
              <View style={styles.lableContainer}>
                  <Text style={styles.lable}>Working Place:</Text>
              </View>
              <AppTextInput 
                    style={styles.EnvelopeIcon}
                    Icon={"home"}
                    IconSize={24}
                    placeholder="Enter working place name"
                    placeholderTextColor="#578CCA"
                    keyboardType="email-address"
                    maxLength={10}
                    onChangeText={handleChange("Working_Place")}
                    onBlur = {()=> setFieldTouched("Working_Place")}
                  />
    
                  <ErrorMessage error={errors.Working_Place} visibility={touched.Working_Place}/>
    
                  <View style={styles.lableContainer}>
                    <Text style={styles.lable}>Address:</Text>
                  </View>
                  <AppTextInput 
                    style={styles.lockIcon}
                    Icon={"address-book-o"}
                    IconSize={24}
                    placeholder="Enter working place address"
                    placeholderTextColor="#578CCA"
                    keyboardType="email-address"
                    onChangeText={handleChange("address")}
                    onBlur = {()=> setFieldTouched("address")}
    
                  />
    
                    <ErrorMessage error={errors.address} visibility={touched.address}/>
    
                  <View style={styles.lableContainer}>
                    <Text style={styles.lable}>Request Date:</Text>
                  </View>
                  <AppTextInput 
                    style={styles.lockIcon}
                    Icon={"calendar"}
                    IconSize={24}
                    placeholder="Enter request date"
                    placeholderTextColor="#578CCA"
                    onChangeText={handleChange("requestDate")}
                    onBlur = {()=> setFieldTouched("requestDate")}
    
                  /> 
    
                    <ErrorMessage error={errors.requestDate} visibility={touched.requestDate}/>

                <View style={styles.lableContainer}>
                    <Text style={styles.lable}>Effected Date:</Text>
                </View>
                <AppTextInput 
                  style={styles.phoneIcon}
                  Icon={"calendar"}
                  IconSize={24}
                  placeholder="Enter effected date"
                  placeholderTextColor="#578CCA"
                  onChangeText={handleChange("effectedDate")}
                  onBlur = {()=> setFieldTouched("effectedDate")}
                />

                    <ErrorMessage error={errors.effectedDate} visibility={touched.effectedDate}/>

                <View style={styles.lableContainer}>
                    <Text style={styles.lable}>Description:</Text>
                </View>

                <View style={styles.TextAreaMargin}>
                <TextArea
                        
                        placeholder="Description..."
                        placeholderTextColor="#578CCA"
                        // value=''
                        onChangeText={handleChange("Description")}
                        onBlur = {()=> setFieldTouched("Description")}
                        
                    />

                </View>

                    
                    <ErrorMessage style={styles.errMsj} error={errors.Description} visibility={touched.Description}/>

                <View style={styles.lableContainer}>
                <Text style={styles.lable}>Duration:</Text>
              </View>
                <AppTextInput 
                  style={styles.phoneIcon}
                  Icon={"history"}
                  IconSize={24}
                  placeholder="Duration"
                  placeholderTextColor="#578CCA"
                  keyboardType="numeric"
                  maxLength={10}
                  onChangeText={handleChange("Duration")}
                  onBlur = {()=> setFieldTouched("Duration")}
                />
    
                <ErrorMessage  error={errors.Duration} visibility={touched.Duration}/>


                <View style={styles.lableContainer}>
                    <Text style={styles.lable}>Recomendation:</Text>
                </View>

                <View style={styles.TextAreaMargin}>
                    <TextArea
                        placeholder="Recomendation..."
                        placeholderTextColor="#578CCA"
                        // value=''
                        onChangeText={handleChange("Recomendation")}
                        onBlur = {()=> setFieldTouched("Recomendation")}
                        
                    />
                </View>   
                    
                    <ErrorMessage style={styles.errMsj} error={errors.Recomendation} visibility={touched.Recomendation}/>
    
                  
                  <View style={styles.buttonContainer}>
                    <AppButton 
                      style={styles.nextButtonStyle}
                      title="Issue Medical Report" 
                      color='white'
                      onPress={handleSubmit} 
    
                    />
                   </View>
                   <View style={{paddingBottom: 60}}></View>
    
            </>
            )}
    
          </Formik>
    
          
        </View>
        </ScrollView>
  )
}


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
    paddingLeft: 7,
  },

  phoneIcon:{
    paddingLeft: 9
  },
  buttonContainer:{
    marginTop:60,
    justifyContent: 'center',
    alignItems: 'center',

  
  
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
  TextAreaMargin:{
    
    width: '100%',
    paddingHorizontal: 30,
    paddingTop: 6
  },


})