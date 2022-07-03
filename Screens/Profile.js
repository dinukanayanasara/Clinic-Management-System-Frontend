import { StyleSheet,View, TextInput, SafeAreaView, Text } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import Colors from '../src/Styles/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import Border from '../src/Components/Border';
import { bindActionCreators } from "redux";
import {
  setUserInfo,
} from "../src/Actions/UserAction";
import { connect } from "react-redux";
import axios from "axios";

const Profile = (props) => { 

const navigation = useNavigation();

const doctorName = props.user_info.user_data.firstName + ' ' + props.user_info.user_data.lastName
const email = props.user_info.user_data.email
const Mobile = props.user_info.user_data.phoneNumber
const docId = props.user_info.user_data._id

var experience;
var workingHospital;
var category;
var registrationNo;

console.log("Doctor Name",doctorName)
console.log("Doctor Email",email)
console.log("Doctor Moile",Mobile)

  return (
    <View  style={styles.container}>
    <ScrollView>
    <Avatar.Image size={90} source={{ uri: 'https://img.freepik.com/free-vector/doctor-profile-with-medical-service-icon_617655-48.jpg?w=2000',}} style={styles.profilePic} />
        <View style={{alignSelf:'center', marginTop: 12}}>
            <Text style={{fontSize: 22, color: Colors.TextColor, fontWeight: 'bold', fontStyle: 'italic'}}>{doctorName}</Text>
        </View>
      <View style={{marginTop: 40}}>
        <View style={styles.profileInfo}>
            <Text style={styles.profileTxt}>User Name:</Text>
            <Border
              Icon={'user-alt'}
              IconSize={18}
              body={doctorName}
              borderStyle={styles.userNameBorderText}
            />

        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.profileTxt}>Registration No{registrationNo}</Text>
          <Border
              Icon={'id-card-alt'}
              IconSize={18}
              body="Dinuka Nayanasara"
              borderStyle={styles.userNameBorderText}
            />
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.profileTxt}>Category:{category}</Text>
          <Border
              Icon={'grip-horizontal'}
              IconSize={20}
              body="Dinuka Nayanasara"
              borderStyle={styles.userCategoryBorderText}
            />
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.profileTxt}>Working Hospitals:{workingHospital}</Text>
          <Border
              Icon={'hospital-alt'}
              IconSize={17}
              body="Dinuka Nayanasara"
              borderStyle={styles.userNameBorderText}
            />
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.profileTxt}>Experience:{experience}</Text>
          <Border
              Icon={'laptop-medical'}
              IconSize={17}
              body="Dinuka Nayanasara"
              borderStyle={styles.userNameBorderText}
            />
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.profileTxt}>Mobile No:</Text>
          <Border
              Icon={'phone-alt'}
              IconSize={17}
              body={Mobile}
              borderStyle={styles.userNameBorderText}
            />
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.profileTxt}>Email:</Text>
          <Border
              Icon={'envelope'}
              IconSize={18}
              body={email}
              borderStyle={styles.userNameBorderText}
            />
        </View>

        </View>
      
        </ScrollView>
    </View>
  )
}

const mapStateToProps = (state) => ({
  user_info: state.user_info,
});

const mapDispatchToProps = (dispatch) => ({
  setUserInfo: bindActionCreators(setUserInfo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);


const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 30
  },

  profilePic:{
    alignSelf: 'center',
    marginTop: 30
  },
  userNameBorderText:{
    fontSize: 14,
    marginLeft:16,
  },
  profileInfo:{
    marginVertical: 12,

  },
  profileTxt:{
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: Colors.TextColor
  },
  userCategoryBorderText:{
    fontSize: 14,
    marginLeft:18,
  }
  

})


