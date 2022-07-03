import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../src/Styles/Colors';
import AppButton from '../src/Components/AppButton';

import { useNavigation } from '@react-navigation/native';


const ConfirmAppointment = () => {

const navigation = useNavigation(); 

// useEffect(() => {
//     getData()
  
//   }, []); 
  
//   const getData=()=>{
//     axios.get(`http://192.168.8.164:4000/doctor/getAppointmentsCount/${docId}`)
//     .then((res)=>{setUpEvent(res.data.upcomingEvents)
//       console.log(res.data.upcomingEvents)})


  return (
    <View style={styles.container}>
        <View style={styles.card}>
            <Text style={styles.cardText}>Current Appointments</Text>
            <Text style={styles.count}>26</Text>

        </View>

        <View style={{paddingTop: 70}}>
            <AppButton
                title="Confirm Appointments"
                onPress={()=> navigation.navigate("Home")}
                style={styles.btn1}
            />
            
            <AppButton
                title="Cancel Appointments"
                onPress={()=> navigation.navigate("Home")}
                style={styles.btn1}
            />

            <AppButton
                title="View All Appointments"
                onPress={()=> navigation.navigate("Appointment")}
                style={styles.btn1}
            />

        </View>



    </View>
  )
}

export default ConfirmAppointment

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 20,
        // alignSelf: 'center'

    },

    card:{
        borderRadius: 15,
        elevation: 12,
        backgroundColor: Colors.White,
        marginBottom:20,
        marginTop: 40,
        padding: 1,
        borderRadius: 15,
        shadowOffset: {width: 1, height: 1},
        shadowColor: "#333",
        width: "100%",
        height: 150
    
    },
    cardText:{
        color: Colors.TextColor,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 25
    },
    count:{
        fontSize: 26,
        color: Colors.primary,
        textAlign: 'center',
        paddingVertical: 20
    },
    btn1:{
        marginVertical: 20,
   
    }

})