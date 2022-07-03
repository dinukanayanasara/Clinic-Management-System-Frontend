import { View, Text } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';

const About = () => { 

const navigation = useNavigation();

  return (
    <View>
      <Text onPress={()=>navigation.navigate('Profile')}>This is About Screen</Text>
    </View>
  )
}

export default About