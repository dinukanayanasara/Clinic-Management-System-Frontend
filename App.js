import React from 'react'
import { AppState, StyleSheet } from 'react-native'
import AuthNavigator from './Navigation/AuthNavigator';
// import GiveReviews from './Screens/GiveReviews';
// import LocalNotification from './Screens/LocalNotification';
// import PushNotification from './src/Components/PushNotification';


export default function App() {
  return (

        <AuthNavigator/>
        // <LocalNotification/>

        // <PushNotification/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
