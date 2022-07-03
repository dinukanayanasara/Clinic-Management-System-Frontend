import { StyleSheet,
  Text, 
  TextInput, 
  View, 
  Image,
  TouchableOpacity,
  Alert
 } from 'react-native'

import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native';
import Colors from '../src/Styles/Colors';
import AppButton from '../src/Components/AppButton';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../src/Components/ErrorMessage';
import { bindActionCreators } from "redux";
import {
  setUserInfo,
} from "../src/Actions/UserAction";
import { connect } from "react-redux";
import axios from "axios";


const feedbackValidationSchema = Yup.object().shape({
// name: Yup.string().required().max(40).label("Name"),
review: Yup.string().required().label("Feedback")

});


const GiveReviews = (props) => {

const navigation = useNavigation();

let Today = new Date();
console.log("Today: ",Today); // 2022-02-06T08:05:49.292Z

const docId = props.user_info.user_data._id
console.log("Doctor ID", docId)
const doctorName = 'Dr.' + ' '+ props.user_info.user_data.firstName + ' ' + props.user_info.user_data.lastName
console.log(doctorName)

// let demo;
const [defaultRating, setDefaultRating] = useState(1);
const [maxRating, setMaxRating] = useState([1,2,3,4,5]);
const [ratings, setRatings] = useState("");
const starImgFilled="https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true"
const starImgCorner="https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png" 


var userRatings;

const hSubmit = async ({ docId, review, userRatings }) => {

    userRatings = defaultRating;
    // console.log("Ratings: ", userRatings)

    let feedback =
    {    
        "userId": docId,
        "userName": doctorName,
        "review": review,
        "rating": userRatings,
        "postedDate": Today,
    }

    axios.post(`http://192.168.8.164:4000/review/postReview`,  feedback)
    .then(res => {
      console.log("Axios_Response",res.data);

    }).catch(e=> {
      console.log("Error:",e)

    })

  };


function CustomRatingBar() {
return(  
<View style={styles.ratingsBarStyle}>
   {
       maxRating.map((item, key)=>{ 
           return(
               <TouchableOpacity
                   activeOpacity={0.7}
                   key={item}
                   onPress={()=> setDefaultRating(item)}
                   >
                   <Image style={styles.starImgStyle}
                       source={
                           item <= defaultRating
                           ? {uri: starImgFilled}
                           : {uri: starImgCorner}
                       }
                   />
               </TouchableOpacity>
           )

       })
       
   }
</View>
)}

return (
<View style={styles.container}>
<Text style={styles.txt}>Please give your valuable feedback to improve our services</Text>
<View style={styles.nameField}>

 <Formik
    initialValues={{ docId, review: '', userRatings }}
    onSubmit={hSubmit}
    validationSchema={feedbackValidationSchema}
 >

 {({ handleChange, handleSubmit,  errors, setFieldTouched, touched }) => (
     <>
        <View style={{paddingTop: 20}}></View>

         <View style={styles.textAreaContainer}>
               <TextInput
                       style={styles.textArea}
                       multiline={true}
                       numberOfLines={10}
                       placeholder="Type your feedback......"
                       placeholderTextColor="#578CCA"
                       onChangeText={handleChange('review')}
                       onBlur ={()=> setFieldTouched('review')}
                /> 

                <ErrorMessage error={errors.review} visibility={touched.review}/>

        </View>
         
        <View style={{alignItems: 'center', paddingVertical: 14}}>
             <Text style={styles.rateUs}>How was your experience with us</Text>
             <Text style={styles.plzRateUs}>Please Rate Us</Text> 
        </View>

         {/* Config Ratings  */}
        <CustomRatingBar/>
        <Text style={styles.txtStyle}>
            {defaultRating} / {Math.max.apply(null, maxRating)}
        </Text>


        <View style={styles.postReview}>
            <AppButton
                title="Post Review "
                Icon={"angle-double-right"}
                IconSize={20}
                onPress={handleSubmit}
                style={styles.btnStyle}
                
            />

        </View>

     </>

 )}
 </Formik>


</View>


</View>
)
}

const mapStateToProps = (state) => ({
    user_info: state.user_info,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    setUserInfo: bindActionCreators(setUserInfo, dispatch),
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(GiveReviews);

const styles = StyleSheet.create({ 

container:{
 flex: 1,
 alignSelf: 'center',
 paddingTop: 14,
 marginHorizontal: 8,
 alignItems: 'center'
},

txt:{
 fontSize: 19,
 fontWeight: 'bold',
 color: Colors.TextColor,
 textAlign: 'center',
 paddingVertical: 16
},
rateUs:{
 fontSize: 16,
 fontWeight: 'bold',
 color: Colors.TextColor,
 textAlign: 'center',


},

EnvelopeIcon: {
 paddingLeft: 6,
},
nameField:{
paddingVertical: 20


},
textArea: {
 width: 300,
 height: 130,
 paddingHorizontal: 12,
 paddingBottom: 90,
 textAlignVertical: 'top',
 paddingTop: 12,
 borderColor: Colors.primary,
 borderWidth: 2,
 borderRadius: 14,
 
 
},
starImgStyle:{
 width: 40,
 height: 40,
 resizeMode: 'cover'
},
ratingsBarStyle:{
 justifyContent: 'center',
 flexDirection: 'row',
 marginTop: 20
},
txtStyle:{
 textAlign: 'center',
 marginTop: 12,
 color: Colors.TextColor
},
plzRateUs:{
fontSize: 18,
color: Colors.TextColor,
marginTop: 12
},
postReview:{
marginTop: 24
}
})


// import { StyleSheet, Text, TextInput, View } from 'react-native'
// import React, { useState } from 'react'

// import { useNavigation } from '@react-navigation/native';
// import Colors from '../src/Styles/Colors';
// import AppTextInput from '../src/Components/AppTextInput';
// import AppButton from '../src/Components/AppButton';
// import { feedbackValidator } from '../src/Validation/feedbackValidator';
// import Textarea from '../src/Components/Textarea';
// import ErrorMessage from '../src/Components/ErrorMessage';


// const GiveReviews = () => {

// const navigation = useNavigation();

// const [name, setName] = useState("")
// const [feedback, setFeedback] = useState({ value: "", error: ""})

// const onLoginPressed = () => {
//   const feedbackError = feedbackValidator(feedback.value)
//   if (feedbackError) {
//     setFeedback({...feedback, error: feedbackError})
//     return
//   }
//   navigation.reset({
//     index: 0,
//     routes: [{ name: 'Home' }],

//   })
// }


//   return (
//     <View style={styles.container}>
//       <Text style={styles.txt}>Please give your valuable feedback to improve our services</Text>

//       <View style={styles.nameField}>
//         <AppTextInput 
//                 style={styles.EnvelopeIcon}
//                 Icon={"user-circle-o"}
//                 IconSize={24}
//                 placeholder="Enter your full name"
//                 placeholderTextColor="#578CCA"
//                 keyboardType="email-address"
//                 onChangeText={setName}
//                 value={name}
//             />

//             <View style={{paddingTop: 20}}>

//                 <TextInput
//                     style={styles.textArea}
//                     multiline={true}
//                     // numberOfLines={10}
//                     // underlineColorAndroid="transparent"
//                     placeholder="Type your feedback......"
//                     laceholderTextColor="#578CCA"
//                     onChangeText={(text)=> setFeedback({ value: text, error: ''})}
//                     value={feedback.value}
//                     error={!!feedback.error}
//                     errorText={feedback.error}
//                   /> 


//         </View>

//         <View style={{alignItems: 'center', paddingVertical: 14}}>
//             <Text style={styles.rateUs}>Please rate us</Text>
//         </View>

//         <View style={styles.postReview}>
//           <AppButton
//             title="Give Reviews "
//             Icon={"angle-double-right"}
//             IconSize={20}
//             onPress={onLoginPressed}
//             style={styles.btnStyle}
     
//           />

//         </View>

//       </View>


//     </View>
//   )
// }

// export default GiveReviews

// const styles = StyleSheet.create({ 

//     container:{
//         flex: 1,
//         alignSelf: 'center',
//         paddingTop: 14



//     },

//     txt:{
//         fontSize: 19,
//         fontWeight: 'bold',
//         color: Colors.TextColor,
//         textAlign: 'center',
//         paddingVertical: 16
//     },
//     rateUs:{
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: Colors.TextColor,
//         textAlign: 'center',


//     },

//     EnvelopeIcon: {
//         paddingLeft: 6,
//     },
//     nameField:{
//         width: "100%",
//         paddingVertical: 20


//     },
//     textArea: {
 
//       paddingHorizontal: 12,
//       paddingBottom: 90,
//       height: 150,
//       justifyContent: "flex-start",
//       borderColor: Colors.primary,
//       borderWidth: 2,
//       borderRadius: 14,
 
//       }


// })