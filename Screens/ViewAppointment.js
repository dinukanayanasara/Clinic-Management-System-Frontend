import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../src/Styles/Colors'
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const ViewAppointment = () => {

    const navigation = useNavigation();

    // const Date;
    // const Time;
    // const patientName;
    // const age;
    // const id;


  return (
    <View style={styles.container}>
      <Text style={styles.txtStyle}>--Appointment Details--</Text>
        <View style={{paddingTop: 20}}></View>


        <ScrollView>
            <View style={styles.flatListStyle}>     
                <Text style={styles.txt}>Patient Name</Text> 
                <Text style={styles.colan1}>:</Text> 
                <Text style={styles.column}> Mr. Dinuka Nayanasara</Text> 
            </View>

            <View style={styles.flatListStyle}>     
                <Text style={styles.txt}>Date</Text> 
                <Text style={styles.colan2}>:</Text> 
                <Text style={styles.column}> 2022-04-12</Text>
            </View>

            <View style={styles.flatListStyle}>     
                <Text style={styles.txt}>Time</Text>
                <Text style={styles.colan3}>:</Text>  
                <Text style={styles.column2}>04.30 PM</Text>
            </View>

            <View style={styles.flatListStyle}>     
                <Text style={styles.txt}>Age</Text>
                <Text style={styles.colan4}>:</Text>  
                <Text style={styles.column2}>45</Text>
            </View>

            <View style={styles.flatListStyle}>     
                <Text style={styles.txt}>Patient ID</Text>
                <Text style={styles.colan5}>:</Text>  
                <Text style={styles.column2}>01</Text>
            </View>

            <View style={styles.flatListStyle}>     
                <Text style={styles.txt}>Charges</Text>
                <Text style={styles.colan6}>:</Text>  
                <Text style={styles.column2}>Rs 2500.00</Text>
            </View>

        </ScrollView>


    </View>


  )
}

export default ViewAppointment

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 20

    },
    txtStyle:{
        color: Colors.TextColor,
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingTop: 18


    },
    flatListStyle:{
        flexDirection: 'row'


    },
    txt:{
        fontSize: 14,
        paddingVertical: 12,
        fontWeight: 'bold'

    },
    colan1:{
        marginLeft: 16,
        paddingVertical: 12,
        fontWeight: 'bold'

    },
    column:{
        marginLeft: 10,
        paddingVertical: 12
    },
    colan2:{
        marginLeft: 74,
        paddingVertical: 12,
        fontWeight: 'bold'

    },
    colan3:{
        marginLeft: 71,
        paddingVertical: 12,
        fontWeight: 'bold'

    },
    column2:{
        marginLeft: 13,
        paddingVertical: 12
    },
    colan4:{
        marginLeft: 79,
        paddingVertical: 12,
        fontWeight: 'bold'

    },
    colan5:{
        marginLeft: 43,
        paddingVertical: 12,
        fontWeight: 'bold'

    },
    colan6:{
        marginLeft: 53,
        paddingVertical: 12,
        fontWeight: 'bold'

    },
})