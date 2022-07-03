import React,{useState} from "react"; 
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../Styles/Colors"

const FeedbackCard = ({username, date, body, val}) => {
    ////
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
    /////
  return (
    <View style={styles.container}>
    <ScrollView>
        <View style={styles.bodyStyle}>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.day}>{date}</Text>
            <CustomRatingBar/>
            <Text style={styles.content}>{body}</Text>
        </View> 
    </ScrollView>    
    </View>
  )
}

export default FeedbackCard

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.White,
        width: "100%",
        height: 120,
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary,
        paddingTop: 20
    },
    body:{
        marginHorizontal: 20,
        marginHorizontal: 15
    },
    username:{
        fontSize: 13,
        fontWeight: 'bold',
        
    },
    day:{
        fontSize: 11,

    },
    content:{
        fontSize: 12,
        marginVertical: 6
        
    },
    ratingsBarStyle:{
     justifyContent: 'flex-start',
     flexDirection: 'row',
     marginTop: 2
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
     bodyStyle:{
        marginBottom: 12
     }


})