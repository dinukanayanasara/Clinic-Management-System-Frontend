import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import React from 'react'

export default function TextArea({...otherProps}) {
  return (

      
        <View style={styles.textArea}>
            <ScrollView>
                <TextInput
                    style={styles.input} {...otherProps}
                    multiline
                    numberOfLines={4}
                />    
            </ScrollView>
        </View> 

  )
}

const styles = StyleSheet.create({

      textArea:{
        width:'100%',
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#578CCA',
        // marginBottom: 30,
        height: 120
        
      },
      textAreaContent:{
        width: '100%',
    
      },
      input:{
        marginHorizontal: 8,
        // backgroundColor: 'red',
        height: 120,
        // padding: 8

      }
})