import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import Colors from '../src/Styles/Colors';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const More = () => {

const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.textStyle}>
        <EvilIcons 
              style={styles.shedulingIcon}
              name={"user"} 
              color={Colors.dark} 
              size={50} 
              
            />
            
            <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
              <Text style={styles.textLink}>Profile</Text>
          </TouchableOpacity>
      </View>


      <View  style={styles.textStyle}>
        <EvilIcons 
                style={styles.profileIcon}
                name={"calendar"} 
                color={Colors.dark} 
                size={50} 
                
              />
          <TouchableOpacity onPress={()=>navigation.navigate('Upcoming')}>
              <Text style={styles.textLink}>Upcoming Events</Text>
          </TouchableOpacity>
      </View>

      {/* <View  style={styles.textStyle}>
              <MaterialCommunityIcons
                style={styles.MessageIcon}
                name={"message-reply-text-outline"} 
                color={Colors.dark} 
                size={35} 
                
              />
          <Text style={styles.textMessage}>Messages</Text>
      </View> */}

      {/* <View  style={styles.textStyle}> 
              <Ionicons
                style={styles.MessageIcon}
                name={"documents-outline"} 
                color={Colors.dark} 
                size={35} 
                
              />
          <Text style={styles.textMessage}>Reports</Text>
      </View> */}

      <View  style={styles.textStyle}> 
              <MaterialIcons
                style={styles.MessageIcon}
                name={"dynamic-feed"} 
                color={Colors.dark} 
                size={35} 
                
              />
          
          <TouchableOpacity onPress={()=>navigation.navigate('Review')}>
            <Text style={styles.textMessage}>Reviews</Text>
          </TouchableOpacity>
      </View>

      {/* <View  style={styles.textStyle}>
              <MaterialIcons
                style={styles.MessageIcon}
                name={"help-outline"} 
                color={Colors.dark} 
                size={35} 
                
              />

            <TouchableOpacity onPress={()=>navigation.navigate('Review')}>
                <Text style={styles.textMessage}>Help & Services</Text>
            </TouchableOpacity>
          
      </View> */}

      {/* <View style={styles.textStyle}>
              <Ionicons
                style={styles.MessageIcon}
                name={"settings-outline"} 
                color={Colors.dark} 
                size={35} 
                
              />
          <Text style={styles.textMessage}>Settings</Text>
      </View> */}

      <View style={styles.textStyle}>
              <Ionicons
                style={styles.LogOutIcon}
                name={"log-in-outline"} 
                color={Colors.dark} 
                size={35} 
                
              />
            <TouchableOpacity onPress={()=>navigation.navigate('SelectRole')}>
              <Text style={styles.textLogOut}>Log Out</Text>
            </TouchableOpacity>
          
      </View>
    </View>
    
  )
}

export default More

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Colors.background,
    // alignItems: 'center',
    textAlign: 'flex-start',
    paddingHorizontal: 30,
    height: 50,
    width: "100%",
    paddingTop: 40,
    flexDirection: 'column'
  },
  profileIcon:{
    paddingTop:20
  },

  shedulingIcon:{
    paddingTop: 12,
  },
  MessageIcon:{
    paddingTop: 25,
    paddingLeft: 8
  },
  LogOutIcon:{
    paddingTop: 25,
    paddingLeft: 8

  },

  textLink:{
    fontSize: 18,
    color: Colors.dark,
    paddingTop: 24,
    // marginTop: 1,
    paddingLeft: 6
    
  },

  textLogOut:{
    fontSize: 20,
    color: Colors.dark,
    paddingTop: 28,
    paddingLeft: 12,
    fontWeight: 'bold',
    color:Colors.primary

    
  },
  textStyle:{
    flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  textMessage:{
    fontSize: 18,
    color: Colors.dark,
    paddingTop: 29,
    paddingLeft: 12
  },

  
})