import { StyleSheet, View, TextInput} from 'react-native'
import React from 'react'

import Colors from '../Styles/Colors';
import { FontAwesome } from '@expo/vector-icons';


const AppTextInput = ({Icon, IconSize, style, ...otherProps}) => {

  return (
    <View style={styles.TextInputContainer}>
      <FontAwesome name={Icon} color={Colors.primary} size={IconSize} style={style}/>
        <View style={styles.InputText}>
      <TextInput 
        style={styles.Input} {...otherProps}/>
      </View>
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
  TextInputContainer:{
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    height: 50,
    width: '85%',
    marginTop: 4,
    borderRadius: 14,
    borderColor: Colors.primary,
  

  },

  InputText: {
    height:50,
    width: '92%',
    paddingLeft: 1,

  },

  Input:{
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
    borderRadius: 14,
    paddingLeft: 12

  }

})