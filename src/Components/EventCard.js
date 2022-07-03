import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import Colors from '../Styles/Colors';

const EventCard = ({title, Amount, button, onPress}) => {
  return (
    <View style={styles.EventCard}>
      <Text style={styles.CardText}> {title} </Text> 
      <Text style={styles.Amounts}> {Amount} </Text>

        <TouchableOpacity style={[styles.button,]} onPress={onPress}>
            <Text style={styles.buttonText}> {button} </Text>   
        </TouchableOpacity>
      
    </View>
  )
}

export default EventCard

const styles = StyleSheet.create({
    EventCard:{
        borderRadius: 15,
        elevation: 12,
        backgroundColor: Colors.White,
        marginBottom:20,
        padding: 1,
        borderRadius: 15,
        marginHorizontal: 7,
        marginVertical: 15,
        width: "45%",
        height: 150,
        
    },
    CardText: {
        textAlign: 'center',
        alignItems:'center',
        alignSelf: "center", 
        justifyContent: "center",
        fontWeight: "bold",
        top: 14,
        fontSize: 13,
        color: Colors.TextColor

    },
    Amounts:{
        textAlign: "center",
        top: 35,
        fontSize: 18
    },
    button:{
        textAlign: "center",
        top: 70,
        backgroundColor: Colors.primary,
        borderRadius: 14,
        padding: 10

    },
    buttonText:{
        fontSize: 12,
        alignSelf: 'center',
        fontWeight: "bold",
        color: Colors.White
    }
})