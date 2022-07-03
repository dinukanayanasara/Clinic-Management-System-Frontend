import { View, Text } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';

const Settings = () => {

const navigation = useNavigation();

  return (
    <View>
      <Text onPress={()=>navigation.navigate('Home')}>This is Settings Screen</Text>
    </View>
  )
}

export default Settings