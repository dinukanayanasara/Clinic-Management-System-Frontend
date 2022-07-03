import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Appointment from '../Screens/Appoinment';
import Colors from '../src/Styles/Colors';
import CancelAppointment from '../Screens/CancelAppoinment';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Top = createMaterialTopTabNavigator();

const TopNavigation = () => {
  return (
    <Top.Navigator
        initialRouteName='Current Appointment'
        screenOptions={{
            tabBarLabelStyle: { fontSize: 12, paddingHorizontal: 10, fontWeight: 'bold' },
            tabBarItemStyle: { width: 200 },
            tabBarActiveTintColor: Colors.primary,
            tabBarInactiveTintColor: Colors.dark,
            tabBarStyle: { backgroundColor: Colors.White },
        }}>
        <Top.Screen 
            name='Current Appointment'
            component={Appointment}
            options={{
                tabBarLabel: "Current Appointment",
            }}

        />
        <Top.Screen
            name='Cancel Appointment'
            component={CancelAppointment}
            options={{
                tabBarLabel: "Cancel Appointment",
            }}
        />
    </Top.Navigator>
  );
}

export default TopNavigation


