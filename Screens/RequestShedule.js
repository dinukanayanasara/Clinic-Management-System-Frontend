import React,{useState} from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'; 
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from '../src/Styles/Colors';
import moment from 'moment';
import { FontAwesome5 } from '@expo/vector-icons';
import AppButton from '../src/Components/AppButton';
import TextArea from '../src/Components/TextArea'


export default function RequestShedule() {
 
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [timePicker, setTimePicker] = useState(false);
  const [time, setTime] = useState(new Date(Date.now()));
  console.log("Time:",time)
  console.log("Date:",date)
 
  function showDatePicker() {
    setDatePicker(true);
  };
 
  function showTimePicker() {
    setTimePicker(true);
  };
 
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };
 
  function onTimeSelected(event, value) {
    setTime(value);
    setTimePicker(false);
  };
 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <View style={Styles.MainContainer}>
      <Text style={Styles.text}>Description : </Text>
      <TextArea
          placeholder="Description..."
          placeholderTextColor="#578CCA"
          // value=''
          // onChangeText
          
        />
    <View style={{marginBottom: 14}}></View>
    <Text style={Styles.text}>Date : </Text>
    <View style={Styles.inputContainer}>
        <TextInput
          style={Styles.input}
          // onChangeText={} calendar-alt
          value={date.toDateString()}
        />
        <View style={Styles.Icons}>
          <TouchableOpacity onPress={showDatePicker}>
              {!datePicker && (           
                  <FontAwesome5 
                  name='calendar-alt' 
                  color={Colors.primary} 
                  size={24} />
          )}
          </TouchableOpacity>
        </View>

      </View>

    <Text style={Styles.text}>Time :</Text>
    <View style={Styles.inputContainer}>
        <TextInput
          style={Styles.input}
          // onChangeText={}
          value={time.toLocaleTimeString('en-US')}
        />
        <View style={Styles.Icons}>
          <TouchableOpacity onPress={showTimePicker}>
              {!timePicker && (          
                <FontAwesome5 
                  name='clock' 
                  color={Colors.primary} 
                  size={24} />
          )}
          </TouchableOpacity>
        </View>
      </View>
    
 
        {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected}
            style={Styles.datePicker}
          />
        )}
 
        {timePicker && (
          <DateTimePicker
            value={time}
            mode={'time'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={false}
            onChange={onTimeSelected}
            style={Styles.datePicker}
          />
        )}


        <AppButton
        style={Styles.buttonStyle}
        title="Request"
        color="white"
        // onPress={handleSubmit}
      />
 
 
      </View>


    </SafeAreaView>
  );
}
 
const Styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    padding: 6,
    alignItems: 'center',
    marginHorizontal: 12,
    marginTop: 20
  },
 
  text: {
    fontSize: 17,
    color: Colors.TextColor,
    padding: 2,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginTop: 16
  },
 
  // Style for iOS ONLY...
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 160,
    display: 'flex',
  },
  input:{
    marginLeft: 12,
    width: '86%',
    padding: 4
  },
  inputContainer:{
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 8,
    width: '100%',
    padding: 4,
    flexDirection: 'row',
    marginBottom: 18
    
  },
  Icons:{
    textAlign: 'flex-end',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 4
  },
  buttonStyle:{
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 50
  }
 
})