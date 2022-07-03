import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React,{useState, useEffect} from 'react'
import UpcomingCard from '../src/Components/UpcomingCard'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { setUserInfo } from '../src/Actions/UserAction';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import axios from 'axios';

const Upcoming = (props) => {

const navigation = useNavigation();

const docId = props.user_info.user_data._id
console.log("Doctor ID", docId)

const [upEvent, setUpEvent] = useState([]);


useEffect(() => {
  getData()

}, []); 

const getData=()=>{
  axios.get(`http://192.168.8.164:4000/upcomingEvents/getEventsByDoctorId/${docId}`)
  .then((res)=>{setUpEvent(res.data.upcomingEvents)
    console.log(res.data.upcomingEvents)})


}

   
       return ( 
        <ScrollView>
              <View style={styles.container}>
              {upEvent==''? <ActivityIndicator size="large"/>: null} 
              {upEvent.map((item) => (
                <View key={item._id}>
                <UpcomingCard
                  events={item.event}
          
                  date={item.date}
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


export default  connect(mapStateToProps, mapDispatchToProps)(Upcoming)

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 15
  }
})





 /*  var axios = require('axios');
  var data = '';

  var config = {
    method: 'get',
    url: `http://192.168.8.164:4000/upcomingEvents/getEventsByDoctorId/${docId}`,
    headers: { },
    data : data
  };

  axios(config)
  .then(function (response) {
    const userEvent = response
    setUpEvent(userEvent)
    console.log("Event: ",upEvent)
  })
  .catch(function (error) {
    console.log("Err: ",error);
  }); */