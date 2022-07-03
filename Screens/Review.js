import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react'
import AppButton from '../src/Components/AppButton'
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Colors from '../src/Styles/Colors';
import FeedbackCard from '../src/Components/FeedbackCard'
import axios from "axios";
import moment from 'moment';

const Review = () => {

  const navigation = useNavigation();

  const [allReviews, setAllReviews] = useState([]);


    useEffect(() => {
      getData()

    }, []); 

    const getData=()=>{
      axios.get('http://192.168.8.164:4000/review/getAllReviews')
      .then((res)=>{setAllReviews(res.data.feedback)
        console.log(res.data.feedback)})
    }


  return (
    <View style={styles.container}>
      <Text style={styles.reviewText}>...What pepople are saying...</Text>

      <View style={styles.ReviewContainer}>
      <ScrollView>
          {allReviews==''? <ActivityIndicator size="large"/>: null} 
          {allReviews.map((item) => (
            <View key={item._id}>
                  <FeedbackCard
                    username= {item.userName}
                    date={moment(item.postedDate).format('LLLL')}
                    val={item.rating}
                    body= {item.review}
                  /> 

          </View>

          ))}
       
        </ScrollView>
      </View>

      <View style={styles.viewReviews}>
          <AppButton
            title="View my reviews "
            Icon={"angle-double-right"}
            IconSize={20}
            onPress={()=> navigation.navigate("ViewReviews")}
            style={styles.btnStyle}
            
          />

      </View>



      <View style={styles.giveReviews}>
          <AppButton
            title="Give Reviews "
            Icon={"angle-double-right"}
            IconSize={20}
            onPress={()=> navigation.navigate("GiveReviews")}
            style={styles.btnStyle}
            
          />

      </View>


      
    </View>
  );
}

export default Review

const styles = StyleSheet.create({

  container:{
    paddingHorizontal: 14


  },
  reviewText:{
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',

  },

  ReviewContainer:{
    elevation: 1,
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    backgroundColor: Colors.White,
    width: "100%",
    height: 360,
    borderRadius: 8,
    marginVertical: 12,
    shadowOffset: {width: 1, height: 1},
    shadowColor: "#333"
  },

  reviewStyle: {
    alignSelf: 'flex-start'
  },
  bodyContainer:{

   
  },
  like:{

    paddingLeft: 240

  },
  unlike:{
    paddingLeft: 16
  },
  viewReviews:{
    paddingVertical: 16
  },
  giveReviews:{
    paddingVertical: 12
  }

})




                {/* <GetReview
                  style={styles.reviewStyle}
                  name="Dinuka Nayanasara"
                  ratings= {" "}
                  date="2022-05-11"
                  body="WebView objects allow you to display web content as part of your activity layout, but lack some of the features of fully-developed browsers. A WebView is useful when you need increased control over the UI and advanced configuration options that will allow you to embed web pages in a specially-designed environment for your app."
                  likeStyle={styles.like}
                  unlikeStyle={styles.unlike}
                  likeIcon={"like2"}
                  IconSize={22}
                  unLikeIcon={"dislike2"}

                />

                <GetReview
                  name="Dinuka Nayanasara"
                  ratings= {" "}
                  date="2022-05-11"
                  body="WebView objects allow you to display web content as part of your activity layout, but lack some of the features of fully-developed browsers. A WebView is useful when you need increased control over the UI and advanced configuration options that will allow you to embed web pages in a specially-designed environment for your app."
                  likeStyle={styles.like}
                  unlikeStyle={styles.unlike}
                  likeIcon={"like2"}
                  IconSize={22}
                  unLikeIcon={"dislike2"}

                />
                <GetReview
                  name="Dinuka Nayanasara"
                  ratings= {" "}
                  date="2022-05-11"
                  body="WebView objects allow you to display web content as part of your activity layout, but lack some of the features of fully-developed browsers. A WebView is useful when you need increased control over the UI and advanced configuration options that will allow you to embed web pages in a specially-designed environment for your app."
                  likeStyle={styles.like}
                  unlikeStyle={styles.unlike}
                  likeIcon={"like2"}
                  IconSize={22}
                  unLikeIcon={"dislike2"}

                /> */}