import React, { useState } from "react";

import SignIn from "../Screens/SignIn";
import SignUp_1 from "../Screens/SignUp_1";
import ResetPassword from "../Screens/ResetPassword";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Settings from "../Screens/Settings";
import About from "../Screens/About";
import Review from "../Screens/Review";
import ViewReviews from "../Screens/ViewReviews";
import GiveReviews from "../Screens/GiveReviews";
import RequestShedule from "../Screens/RequestShedule";
import Welcome from "../Screens/Welcome";
// import { AuthContext } from '../auth/context'
// import * as SecureStore from 'expo-secure-store';
// import SplashScreen from '../Screens/SplashScreen';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import ViewAppointment from "../Screens/ViewAppointment";
import ConfirmAppointment from "../Screens/ConfirmAppointment";
import configureStore from "../src/Store";
import { Provider } from "react-redux";
import SelectRole from "../Screens/SelectRole";
import patient from "../Screens/patient";
import Upcoming from "../Screens/Upcoming";
import IssuMedicalReport from "../Screens/IssuMedicalReport";


const store = configureStore();
const Stack = createStackNavigator();
// const AuthFlow = createStackNavigator();
// const AppFlow = createStackNavigator();

// function AuthStack({navigation}){

//   return(
//     <AuthFlow.Navigator initialRouteName='SignIn'>
//         <AuthFlow.Screen name='SignIn' component={SignIn} options={{ headerShown: false }}/>
//         <AuthFlow.Screen name='SignUp_1' component={SignUp_1} options={{title:"SignUp", headerTitleAlign:"center"}} />
//         <AuthFlow.Screen name='SignUp_2' component={SignUp_2} options={{title:"Confirm Account", headerTitleAlign:"center"}} />
//         <AuthFlow.Screen name='ResetPassword' component={ResetPassword} />
//       </AuthFlow.Navigator>
//     );

// }

// function AppStack({navigation}){
//   return(

//     <AppFlow.Navigator initialRouteName='TabNavigator'>
//     <AppFlow.Screen name='Profile' component={Profile} options={{title:"Profile", headerTitleAlign:"center"}}/>
//             <AppFlow.Screen name='TabNavigator' component={TabNavigator} options={{headerShown:false}}/>
//             <AppFlow.Screen name='About' component={About} options={{title:"About", headerTitleAlign:"center"}}/>
//             <AppFlow.Screen name='Settings' component={Settings} options={{title:"Settings", headerTitleAlign:"center"}}/>
//             <AppFlow.Screen name='Review' component={Review} options={{title:"Ratings and reviews", headerTitleAlign:"center"}}/>
//             <AppFlow.Screen name='ViewReviews' component={ViewReviews} options={{title:"My reviews", headerTitleAlign:"center"}}/>
//             <AppFlow.Screen name='GiveReviews' component={GiveReviews} options={{title:"Give feedback", headerTitleAlign:"center"}}/>
//             <AppFlow.Screen name='ViewAppointment' component={ViewAppointment} options={{title:"ViewAppointment", headerTitleAlign:"center"}}/>
//             <AppFlow.Screen name='ConfirmAppointment' component={ConfirmAppointment} options={{title:"Daily Appointments", headerTitleAlign:"center"}}/>
//             <AppFlow.Screen name='RequestShedule' component={RequestShedule} options={{title:"Request New Shedule", headerTitleAlign:"center"}}/>
//         </AppFlow.Navigator>
//     );

// }

const AuthNavigator = () => {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen
              name="welcome"
              component={Welcome}
              options={{  headerShown: false }}
            />

            <Stack.Screen name='SelectRole' 
              component={SelectRole} 
              options={{ headerShown: false}}
            />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: true }}
          /> 
          <Stack.Screen
            name="patient"
            component={patient}
            options={{ headerShown: true }}
          /> 
          <Stack.Screen
            name="SignUp_1"
            component={SignUp_1}
            options={{ title: "SignUp", headerTitleAlign: "center" }}
          /> 
           <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: "Profile", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{ title: "About", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ title: "Settings", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Review"
            component={Review}
            options={{
              title: "Ratings and reviews",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="ViewReviews"
            component={ViewReviews}
            options={{ title: "My reviews", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="GiveReviews"
            component={GiveReviews}
            options={{ title: "Give feedback", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="ViewAppointment"
            component={ViewAppointment}
            options={{ title: "ViewAppointment", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="ConfirmAppointment"
            component={ConfirmAppointment}
            options={{
              title: "Daily Appointments",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="RequestShedule"
            component={RequestShedule}
            options={{
              title: "Request New Shedule",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Upcoming"
            component={Upcoming}
            options={{
              title: "Upcoming Events",
              headerTitleAlign: "center",
            }}
          /> 
          <Stack.Screen
            name="IssuMedicalReport"
            component={IssuMedicalReport}
            options={{
              title: "Issue Medical Report",
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default AuthNavigator;

//   const [state, dispatch] = React.useReducer(
//     (prevState, action) => {
//       switch (action.type) {
//         case 'RESTORE_TOKEN':
//           return {
//             ...prevState,
//             userToken: action.token,
//             isLoading: false,
//           };
//         case 'SIGN_IN':
//           return {
//             ...prevState,
//             isSignout: false,
//             userToken: action.token,
//           };
//         case 'SIGN_OUT':
//           return {
//             ...prevState,
//             isSignout: true,
//             userToken: null,
//           };
//       }
//     },
//     {
//       isLoading: true,
//       isSignout: false,
//       userToken: null,
//     }
//   );

//   React.useEffect(() => {
//     // Fetch the token from storage then navigate to our appropriate place
//     const bootstrapAsync = async () => {
//       let userToken;

//       try {
//         userToken = await SecureStore.getItemAsync('userToken');
//         console.log(userToken)
//       } catch (e) {
//         console.log("userToken Fail")
//         // Restoring token failed
//       }

//       // After restoring token, we may need to validate it in production apps

//       // This will switch to the App screen or Auth screen and this loading
//       // screen will be unmounted and thrown away.
//       dispatch({ type: 'RESTORE_TOKEN', token: userToken });
//     };

//     bootstrapAsync();
//   }, []);

//   const authContext = React.useMemo(
//     () => ({
//       signIn: async (data) => {
//         const userToken=data.userToken
//         console.log(userToken)
//         try {
//           await SecureStore.setItemAsync('userToken', userToken)
//           console.log("User Token store success: "+userToken)
//         } catch (err) {
//           console.log("Error in Storing :"+err)
//         }

//         // In a production app, we need to send some data (usually username, password) to server and get a token
//         // We will also need to handle errors if sign in failed
//         // After getting token, we need to persist the token using `SecureStore`
//         // In the example, we'll use a dummy token

//         dispatch({ type: 'SIGN_IN', token: userToken });
//       },
//       signOut: async () => {
//         try {
//           await SecureStore.deleteItemAsync('userToken', userToken)
//         } catch (err) {
//           console.log('Error in storage :' + err)
//         }
//         dispatch({ type: 'SIGN_OUT' })
//       },

//       signUp: async (data) => {

//         // In a production app, we need to send user data to server and get a token
//         // We will also need to handle errors if sign up failed
//         // After getting token, we need to persist the token using `SecureStore`
//         // In the example, we'll use a dummy token

//         dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
//       },
//     }),
//     []
//   );

//   // if (state.isLoading) {
//   //   // We haven't finished checking for the token yet
//   //   return <SplashScreen />;
//   // }

//   return (
//     <AuthContext.Provider value={authContext}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           {state.isLoading ? (
//             // We haven't finished checking for the token yet
//             <Stack.Screen name="Splash" component={SplashScreen} />
//           ) : state.userToken == null ? (
//             // No token found, user isn't signed in
//             <Stack.Screen
//               name="AuthStack"
//               component={AuthStack}
//               // options={{
//               //   title: 'Sign in',
//               //   // When logging out, a pop animation feels intuitive
//               //   animationTypeForReplace: state.isSignout ? 'pop' : 'push',
//               // }}
//             />
//           ) : (
//             // User is signed in
//             <Stack.Screen name="AppStack" component={AppStack} />
//           )}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </AuthContext.Provider>
//   );

// }
