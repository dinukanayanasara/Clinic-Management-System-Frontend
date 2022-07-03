import { StyleSheet,View, Text } from 'react-native'
import React from 'react'
import Colors from '../Styles/Colors'
import { FontAwesome5 } from '@expo/vector-icons';

export default function Border({Icon, body, borderStyle, IconSize}) {
    return(
        <View style={styles.borderContainer}>
       
          <FontAwesome5 name={Icon} color={Colors.primary} size={IconSize} />
          <Text style={borderStyle}>{body}</Text>

          
        </View>
      )
}

const styles = StyleSheet.create({

    borderContainer:{
      borderBottomWidth: 1,
      borderBottomColor: Colors.primary,
      flexDirection: 'row',
      marginVertical: 12
    }
  
  })

