import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Colors from '../src/Styles/Colors';
import { ScrollView } from 'react-native-gesture-handler';


export default function SelectRole() { 

const navigation = useNavigation();

const rolePatient = "patient"
const roleDoctor = "doctor"

// const isPressedRole = () => {
    
// }

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
    <View style={styles.container}>
        <View style={styles.txtView}> 
            <Text style={styles.txt}>Please Select Your</Text>
            <Text style={styles.txt2}>User Role</Text>
        </View>
        <View style={{justifyContent:'center', textAlign: 'center', alignItems: 'center' }}>
            <View style={styles.doctor}>
                <Image style={styles.doctorRole} source={require('../assets/Img/Doctor.jpg')} />

                <View style={{marginTop: 20}}></View>
                <Button
                    onPress={()=>navigation.navigate("SignIn", roleDoctor)}
                    title="Doctor"
                    color="#578CCA"
                />
            </View> 

            <View style={styles.patient}>
                <Image style={styles.patientRole} source={require('../assets/Img/patient.png')} />
                <View style={{marginTop: 20}}></View>
                <Button
                    onPress={()=>navigation.navigate("patient", rolePatient)}
                    title="Patient"
                    color="#578CCA"
                />
                
        </View>


        </View>

     
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        textAlign: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 106,

    },

    txt:{
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.TextColor

    },
    txtView:{
   
        textAlign: 'center',
        alignSelf: 'center'
    },
    txt2:{
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.TextColor
    },
    doctorRole:{
        width: 120,
        height: 120,
        borderRadius: 120,
        marginTop: 60
        
    },
    patientRole:{
        width: 120,
        height: 120,
        borderRadius: 120,
        marginTop: 90
        
    },
    // doctor:{
    //     width: 120,
    //     height: 120
    // },
    // patient:{
    //     width: 120,
    //     height: 120
    // }
})