import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ErrorMessage = ({error, visibility}) => {
    
    if(!visibility || !error) return null; 

    return (
        <Text style={styles.ErrorMessage}>{error} {visibility} </Text>
    )
}

export default ErrorMessage

const styles = StyleSheet.create({

    ErrorMessage:{
        fontSize: 13 ,
        color: 'red', 
        alignSelf: 'flex-start',
        paddingHorizontal: 30

    }
})