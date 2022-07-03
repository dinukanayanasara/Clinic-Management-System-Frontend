import { StyleSheet, 
  Text, 
  SafeAreaView, 
  ScrollView, 
  StatusBar, 
  View,
  TouchableOpacity 
 } from 'react-native';

import React from 'react'

import { useNavigation } from '@react-navigation/native';

import Card from '../src/Components/Card';
import EventCard from '../src/Components/EventCard';
import Colors from '../src/Styles/Colors';
import ServiceCard from '../src/Components/ServiceCard';

const Home = () => {

const navigation = useNavigation();

return (
<SafeAreaView style={styles.container}>
<ScrollView style={styles.scrollView}>
<Card image={require("../assets/Img/CardIMG.jpg")}/>
<Text style={styles.eventText}>Daily Event</Text>

  <View style={styles.EventContainer}>
      <EventCard 
          title="Today Appointments"
          Amount= ""
          button="CHECK NOW"
          onPress={()=>navigation.navigate('ConfirmAppointment')}
      />

      <EventCard 
          title="Medical Report Request"
          Amount= ""
          button="CHECK NOW"
      />
{/* 
      <EventCard 
          title="New     Messages" style
          Amount= ""
          button="CHECK NOW"
      /> */}

  </View>

<Text style={styles.eventText}>Healthcare Services</Text>

  <View style={styles.ServiceCardStyles}>
  <TouchableOpacity onPress={()=> navigation.navigate("Appointment")}>
    <ServiceCard
      title={"Check Appointments"}
      image={require("../assets/Img/checkAppoinment.png")}

    /> 
  </TouchableOpacity>

  <TouchableOpacity  onPress={()=> navigation.navigate("IssuMedicalReport")}>
    <ServiceCard
      title={"Issue Medical Reports"}
      image={require("../assets/Img/checkReports.png")}

    />
  </TouchableOpacity>

 <TouchableOpacity  onPress={()=> navigation.navigate("RequestShedule")}>
    <ServiceCard
      title={"Request New Shedule"}
      image={require("../assets/Img/AddNewShedule.jpg")}

    />
  </TouchableOpacity>

    {/* <ServiceCard
      title={"Check Reports"}
      image={require("../assets/Img/checkReports.png")}

    /> */}
  </View>
</ScrollView>
</SafeAreaView>
)
}

export default Home

const styles = StyleSheet.create({
container: {
flex: 1,
paddingTop: StatusBar.currentHeight,
},
scrollView: {
backgroundColor: Colors.Appbackground,
marginHorizontal: 10,
marginTop: -15,
},
text: {
fontSize: 42,
},
EventContainer: {
flexDirection: 'row',
left:4

},
eventText:{
fontSize: 18,
fontWeight: 'bold',
left: 18
},
ServiceCardStyles:{
// marginHorizontal: 12
}
});