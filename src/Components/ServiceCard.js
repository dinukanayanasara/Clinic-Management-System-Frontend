import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

import Colors from '../Styles/Colors'

const ServiceCard = ({title, image}) => {
  return (
    <View style={styles.card}>
        <Text style={styles.service}> {title} </Text>
        <Image style={styles.Cardimage} source={image}/>
    </View>
  )
}

export default ServiceCard

const styles = StyleSheet.create({
    card:{

        elevation: 1,
        backgroundColor: Colors.background,
        marginBottom:15,
        padding: 1,
        borderRadius: 8,
        marginHorizontal: 9,
        marginVertical: 12,
        width:"96%",
        height: 60,
        shadowOffset: {width: 1, height: 1},
        shadowColor: "#333"
    
    },

   Cardimage: {
        width: "30%",
        height: "100%",
        borderRadius: 6,
        resizeMode: 'stretch',
        position: 'absolute',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        alignSelf: 'flex-end',
        right: 20
        
        
        
    },
    service: {
        fontSize: 14,
        color: Colors.TextColor,
        fontFamily: Platform.OS ==="android" ? "Roboto" : "Avenir",
        fontWeight: "bold",
        marginTop: 18,
        left: 30
    }
})