import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import * as Notifications from 'expo-notifications'

Notifications.setNotificationHandler({
    handleNotification: async() => {
        return{
            shouldPlaySound: true,
            shouldSetBadge: true,
            shouldShowAlert: true
        };
    }
});

export default function LocalNotification() {

    useEffect(()=>{
        const subscription1 = Notifications.addNotificationReceivedListener((notification)=>{
            console.log('Notification Received');
            console.log(notification)
        });

        const subscription2 = Notifications.addNotificationReceivedListener((response) => {
            console.log('NOTIFICATION RESPONSE RECEIVED');
            console.log(response)
        });

        return()=>{
            subscription1.remove();
            subscription2.remove();
        }
    }, []);

    function scheduleNotificationHandler(){
        Notifications.scheduleNotificationAsync({
            content: {title: 'Chamal Medicare', 
            body: 'You login sucessfully',
            data:{userName: 'Dinuka'},
            
        },
        trigger:{
            seconds: 1
        }
        })
        
    }
  return (
    <View style={styles.container}>
      <Button title='Submit' onPress={scheduleNotificationHandler}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  