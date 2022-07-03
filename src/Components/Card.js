import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import Colors from '../Styles/Colors';

const Card = ({image}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.Cardimage} source={image}/>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card:{
        borderRadius: 15,
        elevation: 12,
        backgroundColor: Colors.White,
        marginBottom:20,
        marginTop: 10,
        padding: 1,
        borderRadius: 15,
        shadowOffset: {width: 1, height: 1},
        shadowColor: "#333",
        marginHorizontal: 9,
        marginVertical: -1
    
    },

   Cardimage: {
        width:"100%",
        height: 160,
        borderRadius: 15,
        resizeMode: 'cover',
        
    }

})