import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React,{useState} from "react"; 
import { AntDesign } from '@expo/vector-icons'
import Colors from '../Styles/Colors'
import axios from 'axios'
///////////////////////////
///////////


const GetReview = ({name, pressData, date, body, likeIcon,val, unLikeIcon,deleteIcon,IconSize, likeStyle, unlikeStyle}) => {
  ///////
  const [defaultRating, setDefaultRating] = useState(val);
  const [maxRating, setMaxRating] = useState([1,2,3,4,5]);
  const [ratings, setRatings] = useState("");
  const starImgFilled="https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true";
  const starImgCorner="https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png";
  
  let userRatings;
  userRatings=defaultRating;
  console.log("Ratings: ", userRatings)
  
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
  
  )
  }

      // DELETE request using fetch with async/await
       function deletePost() {
        console.log("Press:", pressData)
        axios.delete(`http://192.168.8.164:4000/review/deleteReview/${pressData}`).then().catch()
        console.log('Delete successful');
    }

    console.log("Test:",pressData)
  ///////
    return (
    <View style={styles.container}>
      <Text style={styles.userName}>{name}</Text>
      <Text style={styles.dateTime}>{date}</Text>
         <CustomRatingBar/>
      <Text style={styles.reviewBody}>{body}</Text>
      <View style={styles.putLike}>
      <TouchableOpacity>

        <AntDesign 
                style={likeStyle}
                name={likeIcon} 
                color={Colors.primary} 
                size={IconSize} 
                
            />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign 
                style={unlikeStyle}
                name={unLikeIcon} 
                color={Colors.primary} 
                size={IconSize} 
                
            />
        </TouchableOpacity>
            

        </View>
        <View style={styles.deleteStyle}>

        <TouchableOpacity onPress={deletePost}>
                <AntDesign 
                    style={styles.dltbtn}
                    name={deleteIcon} 
                    color={Colors.primary} 
                    size={IconSize} 

                />

    </TouchableOpacity>
</View>

    </View>
  )
}

export default GetReview

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 12,
        paddingVertical: 18,
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        textAlign: 'flex-start',
        backgroundColor: Colors.White,
        borderRadius: 14,
        paddingHorizontal: 10,
        elevation: 6,
        width: '100%'

    },
    userName:{
        fontSize: 12,
        fontWeight: 'bold',
        paddingHorizontal: 12
    },
    dateTime:{
        fontSize: 10,
        paddingLeft: 12
    },
    reviewBody:{
        fontSize: 12,
        paddingLeft: 12,
        paddingVertical: 6
    },
    reaction:{
        color: Colors.TextColor
    },
    putLike:{
        flexDirection: "row"
    },
    deleteStyle:{
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
        // marginLeft: 300,

    },

    day:{
        fontSize: 11,

    },
    ratingsBarStyle:{
     justifyContent: 'flex-start',
     flexDirection: 'row',
     marginTop: 2,
     marginLeft: 9
    },
    txtStyle:{
     textAlign: 'center',
     marginTop: 12,
     color: 'red'
    },
    starImgStyle:{
      width: 12,
      height: 12,
      resizeMode: 'cover'
     },
     dltbtn:{


     }
})