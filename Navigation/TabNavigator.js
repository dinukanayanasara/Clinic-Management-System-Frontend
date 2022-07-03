import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Home from '../Screens/Home';
import More from '../Screens/More';
import History from '../Screens/History';
import Colors from '../src/Styles/Colors';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TopNavigation from './TopNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: '#C9DFEC',
            tabBarStyle: { backgroundColor: Colors.primary, height: 56},
            tabBarInactiveTintColor: '#191970',
            tabBarLabelStyle: { fontSize: 12, paddingBottom: 6 },
        }}
        >
        <Tab.Screen name="Home" 
            component={Home}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color,size}) => (
                    <MaterialCommunityIcons name="home" color={color} size={26}/>
                ),
            }}>

        </Tab.Screen>
        <Tab.Screen 
            name="Appointment" 
            component={TopNavigation}
            options={{
                tabBarLabel: 'Appointment',
                headerTitleAlign: 'center',
                // headerShown: false,
                tabBarIcon: ({color,size}) => (
                    <MaterialCommunityIcons name="book-clock-outline" color={color} size={26}/>
                ),
            }}
            ></Tab.Screen>
        <Tab.Screen 
            name="Notification" 
            component={History}
            options={{
                tabBarLabel: 'Notification',
                tabBarIcon: ({color,size}) => (
                    <MaterialIcons name="notifications-on" color={color} size={27}/>
                ),
            }}
            >

        </Tab.Screen>
        <Tab.Screen 
            name=" " 
            component={More}
            options={{
                tabBarLabel: 'More',
                headerStyle: {
                backgroundColor: Colors.primary,
                
          },
                tabBarIcon: ({color,size}) => (
                    <MaterialCommunityIcons name="more" color={color} size={26}/>
                ),
            }}
            >

        </Tab.Screen>
        
    </Tab.Navigator>
  );
}

