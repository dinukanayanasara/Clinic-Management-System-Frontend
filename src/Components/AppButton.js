import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'

import { FontAwesome5 } from '@expo/vector-icons'

import Colors from '../Styles/Colors'

export default function AppButton({title, Icon, IconSize, onPress, style}) {
  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress} style={({pressedButton}) => pressedButton && styles.pressedButton}>
        <View style={[styles.button]}>
          <Text style={[styles.buttonTitle]}>{title}
          <FontAwesome5 
            style={styles.next}
            name={Icon} 
            color={Colors.White} 
            size={IconSize} 
            
          />
          </Text>

        </View>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({

  button:{
    borderRadius: 14,
    padding: 8,
    backgroundColor: Colors.primary,
    height: 50,

  },
  buttonTitle:{
    color: Colors.White,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
   
  },
  pressedButton:{
    opacity: 0.75,
    backgroundColor: Colors.secondary,
    borderRadius: 4
  },


})