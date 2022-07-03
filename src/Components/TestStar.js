
// import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, LogBox } from 'react-native'
// import React, { useState } from 'react'
// import AppButton from './AppButton';
// // import { Item } from 'react-native-paper/lib/typescript/components/List/List'

// // LogBox.ignoreAllLogs();
// const TestStar = ({onPressButton}) => {

//     const [defaultRating, setDefaultRating] = useState(2);
//     const [maxRating, setMaxRating] = useState([1,2,3,4,5]);

//     const starImgFilled="https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true"
//     const starImgCorner="https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png" 
// function CustomRatingBar() {
//     return(  
//         <View style={styles.ratingsBarStyle}>
//             {
//                 maxRating.map((item, key)=>{ 
//                     return(
//                         <TouchableOpacity
//                             activeOpacity={0.7}
//                             key={item}
//                             onPress={()=> setDefaultRating(item)}
//                             >
//                             <Image style={styles.starImgStyle}
//                                 source={
//                                     item <= defaultRating
//                                     ? {uri: starImgFilled}
//                                     : {uri: starImgCorner}
//                                 }
//                             />
//                         </TouchableOpacity>
//                     )

//                 })
//             }
//         </View>
//     )
// } 

//   return (
//     <View style={styles.container}>
    
//         <CustomRatingBar/>
    
        
//         <Text style={styles.txtStyle}>
//             {defaultRating} / {Math.max.apply(null, maxRating)}
//         </Text>
//         <TouchableOpacity
//             activeOpacity={0.7}
//             style={styles.b}>

//         </TouchableOpacity>
      
//     </View>
//   )
// }

// export default TestStar

// const styles = StyleSheet.create({
//     starImgStyle:{
//         width: 40,
//         height: 40,
//         resizeMode: 'cover'
//     },
//     ratingsBarStyle:{
//         justifyContent: 'center',
//         flexDirection: 'row',
//         marginTop: 30
//     },
//     txtStyle:{
//         textAlign: 'center',
//         marginTop: 12
//     }
// })