import { StyleSheet, Text, View,TouchableOpacity, ActivityIndicator } from 'react-native'
import React,{useState, useEffect} from 'react'
import GetReview from '../src/Components/GetReview';
import FeedbackCard from '../src/Components/FeedbackCard';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../src/Styles/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { setUserInfo } from '../src/Actions/UserAction';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import axios from 'axios';
import UpcomingCard from '../src/Components/UpcomingCard';
import moment from 'moment';

import { useNavigation } from '@react-navigation/native';

const ViewReviews = (props) => {

const navigation = useNavigation();

const docId = props.user_info.user_data._id
console.log("Doctor ID", docId)
const doctorName = "Dr." + props.user_info.user_data.firstName + ' ' + props.user_info.user_data.lastName
console.log("Doctor name", doctorName)

const [upReviews, setUpReviews] = useState([]);
const [pressDelete, setPressDelete] = useState(false)

useEffect(() => {
  getData()

}, [pressDelete,navigation]); 

function click(){
  setPressDelete(true)
  console.log("Click")

}

const getData=()=>{
  axios.get(`http://192.168.8.164:4000/review/getReviewByUserId/${docId}`)
  .then((res)=>{setUpReviews(res.data.feedback)
    console.log(res.data.feedback)})
}


  return (
        <ScrollView>
            <View style={styles.Container}>
            {upReviews==''? <ActivityIndicator size="large"/>: null} 
            {upReviews.map((item) => (
              <View key={item._id}>
                <GetReview
                        name= {item.userName}
                        ratings= {item.rating}
                        date={moment(item.postedDate).format('LLLL')}
                        val={item.rating}
                        body={item.review}
                        IconSize={22}
                        
                        deleteIcon={"delete"}
                        deleteStyle={styles.deletebtn}
                        pressData={item._id}
                        press ={click}
     

                    />
            </View>
          

            ))}
          </View>  

        </ScrollView>

  );
}

const mapStateToProps = (state) => ({
  user_info: state.user_info,
});

const mapDispatchToProps = (dispatch) => ({
  setUserInfo: bindActionCreators(setUserInfo, dispatch),
});


export default  connect(mapStateToProps, mapDispatchToProps)(ViewReviews)

const styles = StyleSheet.create({
    Container:{
        paddingHorizontal: 14
    },
    like:{
        justifyContent: 'flex-end'
        // paddingLeft: 230
    
      },
      unlike:{
        paddingLeft: 14
      },
      deletebtn:{
        // paddingLeft: 22
        justifyContent: 'center',
        alignSelf: 'center',
         alignContent: 'center',
        alignItems: 'center'
      },
      viewReviews:{
        paddingVertical: 16
      },
      giveReviews:{
        paddingVertical: 16
      }

})