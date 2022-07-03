import React from "react"
import { StyleSheet, Text, View} from 'react-native'
import Colors from "../Styles/Colors"
import moment from "moment"
import { ScrollView } from "react-native-gesture-handler"

const UpcomingCard = ({date,events}) => {
  return (
    
    <View style={styles.container}>

        <View style={styles.body}>
        <ScrollView>

            <Text style={styles.txt}>{events}</Text>
            <View style={{marginVertical: 6}}>

            
                <Text style={styles.title}>DATE :  {moment(date).format('LL')}</Text>
            </View>
        </ScrollView>    
            

        </View>
     
    </View>
   
  )
}

export default UpcomingCard

const styles = StyleSheet.create({
    container:{
        paddingVertical: 20,
        backgroundColor: Colors.Appbackground,
        width: "100%",
        height: 120,
        marginVertical: 13,
        justifyContent: 'center',
        paddingHorizontal: 10,
        elevation: 4,
        borderRadius: 12

    },
    body:{
        marginHorizontal: 10,
      
    },
    txt:{
        fontSize: 16,
        marginVertical: 6
    },
    title:{
        fontSize: 14,
        fontWeight: 'bold'
    },
    dateFormat:{
        marginLeft: 12,
        fontSize: 14, 
        fontWeight: 'bold',
       
    }
})