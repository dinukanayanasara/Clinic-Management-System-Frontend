import {
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";
import DetailCard from "../src/Components/DetailCard";
import { useNavigation } from "@react-navigation/native";
import { filter } from "lodash";
import { Searchbar, IconButton, Menu, Divider } from "react-native-paper";
import moment from "moment";

export default function CancelAppointment() {
  const navigation = useNavigation();
  const [users, setUsers] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const [searchState, setSearchState] = useState(false);

  useEffect(() => {
    var axios = require("axios");
    var data = "";
    var config = {
      method: "get",
      url: 'http://192.168.8.164:4000/onlinePatient/displayOnline',
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        const userData = response.data;
        const today = new Date();
        console.log('today: '+today);
        const filteredUsers = filter(userData, (user_data) => {
          return dateFilter(user_data.date, today);
        });
        // setUsers(filteredUsers);
        setUsers(userData);
        console.log(users);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [refreshing]);

  const allsUsers = users;

  const onChangeSearch = (searchQuery) => {
    if (searchQuery) {
      const formatedData = searchQuery.toLowerCase();
      const filterData = filter(users, (user) => {
        return contains(user, formatedData);
      });
      setUsers(filterData);
      setSearchState(true);
    } else {
      setUsers(allsUsers);
    }
  };

  const dateFilter = (date, today) => {
    if (date.toLowerCase().includes(today)) {
      return true;
    }
    return false;
  };

  const contains = ({ firstname, lastname }, searchQuery) => {
    if (
      firstname.toLowerCase().includes(searchQuery) ||
      lastname.toLowerCase().includes(searchQuery)
    ) {
      return true;
    }
    return false;
  };

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.container}>
      {/* <SearchBar /> */}
      <Searchbar
        placeholder="Search"
        onChangeText={(searchQuery) => onChangeSearch(searchQuery)}
        autoCapitalize="none"
        style={styles.searchBar}
      />
      <View style={{ paddingTop: 12 }}></View>
      {/* <ScrollView> */}
      <FlatList
        data={users}
        keyExtractor={(data) => data._id.toString()}
        contentContainerStyle={{ paddingBottom: 60 }}
        style={{
          shadowColor: "#fff",
          shadowOpacity: 0.7,
          shadowOffset: { height: 5, width: 0 },
        }}
        renderItem={({ item }) => (
          <DetailCard
            id={item._id}
            firstname={item.firstname}
            lastname={item.lastname}
            address={item.address}
            charges={item.charges}
            date={moment(item.date).format('LLLL')}
            dob={moment(item.dob).format('YYYY-MM-DD')}
            mobileno={item.mobileno}
          />
        )}
        
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
  
      {searchState ? (
        <Text style={styles.refreshMassage}>pull down to refresh</Text>
      ) : null}
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 8,
  },
  refreshMassage: {
    alignSelf: "center",
    color: "gray",
  },

});






// import { StyleSheet, TouchableOpacity, View, Text, FlatList } from 'react-native'
// import React,{useState, useEffect} from 'react'
// import DetailCard from '../src/Components/DetailCard';
// import SearchBar from '../src/Components/SearchBar';

// import { useNavigation } from '@react-navigation/native';
// import { ScrollView } from 'react-native-gesture-handler';
// import axios from 'axios';
// import { Colors } from 'react-native/Libraries/NewAppScreen';



// export default function CancelAppointment(){

// const navigation = useNavigation();

// const [users, setUsers] = useState();
// const [filterData, setFilterData] = useState();

// useEffect(() => {
//   var axios = require('axios');
// var data = '';

// var config = {
//   method: 'delete',
//   url: `http://192.168.8.164:4000/onlinePatient/onlineprofile/${id}`,
//   headers: { },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   const userData = response.data
//   setUsers(userData)
//   console.log(users)
// })
// .catch(function (error) {
//   console.log(error);
// });


// }, []); 


  // return (
  //   <View>
  //     <Text>Check</Text>
  //   </View>
    // <View style={styles.container}>
    // <SearchBar
      
    // />
    // <View style={{paddingTop: 12}}></View>
    // {/* <ScrollView> */}
    //     <FlatList
    //         data={users}
    //         keyExtractor={(data) => data._id.toString()}
    //         contentContainerStyle={{ paddingBottom: 60 }}
    //         style={{
    //           shadowColor: '#fff',
    //           shadowOpacity: 0.7,
    //           shadowOffset: { height: 5, width: 0 },
    //         }}
            
    //         renderItem={({ item }) => (
    //             <DetailCard
    //                 _id = {item._id}
    //                 firstname = {item.firstname}
    //                 lastname = {item.lastname}
    //                 address = {item.address}
    //                 charges = {item.charges}
    //                 date = {item.date}
    //                 dob = {item.dob}
    //                 mobileno = {item.mobileno}
                    
    //             />
    //             //id,address, charges, date, dob, doctorname, firstname, lastname, mobileno, specialization
              
    //         )}
           
    //       />
        
    // {/* </ScrollView> */}
    // </View>
//   );
// }



// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 20,
//     paddingHorizontal: 8,
//   },
// });