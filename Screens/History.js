import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';

const History = () => {

const navigation = useNavigation();

  return (
    <View>
      <Text>History</Text>
    </View>
  )
}

export default History

const styles = StyleSheet.create({})