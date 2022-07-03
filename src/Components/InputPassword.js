import React, {useState} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import Colors from '../Styles/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const InputPassword = ({Icon, IconSize, style, ...otherProps}) => {

const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View style={styles.TextInputContainer}>
      <FontAwesome name={Icon} color={Colors.primary} size={IconSize} style={style}/>
      <View style={styles.InputText}>
      <TextInput 
        style={styles.Input} 
        secureTextEntry={isPasswordVisible ? false : true}
        {...otherProps}/>
      </View>
      <TouchableOpacity 
        onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
         <FontAwesome5 
            name={isPasswordVisible ? 'eye' : 'eye-slash'} 
            color={Colors.primary} 
            size={20} 
          />

      </TouchableOpacity>

    </View>
  )
}

export default InputPassword

const styles = StyleSheet.create({
  TextInputContainer:{
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    height: 50,
    width: '85%',
    marginTop: 5,
    borderRadius: 14,
    borderColor: Colors.primary,
    paddingHorizontal: 2
  

  },

  InputText: {
    height:50,
    width: '81%',
    paddingLeft: 1,
    // flex: 1

  },

  Input:{
    alignItems: 'center',
    // flexDirection: 'row',
    padding: 16,
    // borderRadius: 14,
    paddingLeft: 12,
    // backgroundColor: 'red'

  }

})