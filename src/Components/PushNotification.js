import { View, Text, Alert, Platform } from 'react-native'
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

export default function PushNotification() {
        useEffect(() => {
            async function configurePushNotifications(){
                const { status } = await Notifications.getPermissionsAsync();
                let finalStatus = status;

                if (finalStatus != 'granted'){
                    const {status} = await Notifications.requestPermissionsAsync();
                    finalStatus = status;
                }

                if(finalStatus!=='granted'){
                    Alert.alert(
                    'Permission required',
                    'Push notifications need the appropriate permissions.'
                    );
                    return;
                }
                const pushTokenData = await Notifications.getExpoPushTokenAsync()
                    console.log(pushTokenData); 

                    if(Platform.OS==='android'){
                        Notifications.setNotificationChannelAsync('default',{
                            name: 'default',
                            importance: Notifications.AndroidImportance.DEFAULT
                        });
                    }

            }

            configurePushNotifications();

        }, []);

        return (
            <View>
            <Text>PushNotification</Text>
            </View>
        )
}