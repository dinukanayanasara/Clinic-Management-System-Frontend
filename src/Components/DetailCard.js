import { StyleSheet, } from 'react-native'
import React from 'react'
import { View, Text } from 'react-native';
import { List } from 'react-native-paper';


const DetailCard = ({id, address, charges, date, dob, firstname, lastname, mobileno }) => {
  // const name=firstname+las

  const Name= "Name: ";
  const Address = "Address: ";
  const Dob = "DOB: ";
  const Date = "Date: ";
  const Charges = "Charges: Rs.";
  const phone = "Mobile No: ";

  return (
    
    <View style={styles.card}>
        <List.AccordionGroup>
        <List.Accordion title=  {Name + ' ' + firstname + '  ' + lastname} id={id}>
          <List.Item title={Address + ' ' + address} />
          <List.Item title={Dob + ' ' + dob} />
          <List.Item title={Date + '' + date} />
          <List.Item title={Charges + ' ' + charges} />
          <List.Item title={phone + ' ' + mobileno} />
          <View style={{marginTop: 10, borderBottomWidth: 1, borderBottomColor: 'gray'}}></View>
        </List.Accordion>
      </List.AccordionGroup>
    </View>
  )
}

export default DetailCard

const styles = StyleSheet.create({


})