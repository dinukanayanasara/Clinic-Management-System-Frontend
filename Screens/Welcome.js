import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import AppButton from '../src/Components/AppButton';
import Colors from '../src/Styles/Colors';

const Welcome = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <View style={styles.headingContainer}>
      <View style={styles.headingContainer2}>
        <Text style={styles.heading1}>Welcome To</Text>
        <Text style={styles.heading1}>Chamal Medicare</Text>
      </View>
      <Text style={styles.heading2}>Keep track of your health easily</Text>
    </View>
    
      <Image style={styles.stretch} source={require('../assets/Img/homepng.png')} />

            <View style={styles.buttonContainer}>
                <AppButton
                    style={styles.buttonStyle}
                    title="Get Started "
                    color="white"
                    onPress={()=>navigation.navigate('SelectRole')}
                    Icon={'arrow-right'}
                    IconSize={ 22}
                />
            </View>


    </View> 

  )
}

export default Welcome

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
        textAlign: 'center',
        justifyContent: 'center',
        
    },
    heading2:{
      fontSize: 18,
      fontWeight: 'bold',
      fontStyle: 'italic',
      color: Colors.primary

    },

    heading1:{
      fontSize: 36,
      fontWeight: 'bold',
      fontStyle: 'italic',
      color: Colors.TextColor

    },
    headingContainer:{
      marginTop: 90

    },
    
    stretch:{
        marginTop: 20,
        alignItems: 'center',
        width: "100%",
        height:  400,
        resizeMode: 'contain',
    },
    buttonContainer:{
        marginTop:6,
        justifyContent: 'center',
        alignItems: 'center',
      
      
      },


})