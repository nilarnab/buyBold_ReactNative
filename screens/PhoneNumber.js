import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { State } from 'react-native-gesture-handler';
import * as Keychain from 'react-native-keychain';
import { MMKV } from 'react-native-mmkv';
import Dashboard from './Dashboard';
// import KeyValueStorage from "react-native-key-value-storage"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default  function PhoneNumber(props) {
    const [phoneNumber, setPhoneNumber] = useState('');

    const requestOtp = async (phoneNumberUser) => {
        const resp_raw = await fetch(`https://desolate-gorge-42271.herokuapp.com/phoneVerify/reset_otp?phone_num=+91${phoneNumber}`, {method: 'GET'})
        var resp = resp_raw.json()
        console.log("response")
        console.log(resp)
    }

    const handleButton = async () => {
        console.log("sending request")
        await requestOtp(phoneNumber)
    }
    
   return (
        <View style={styles.screen}>
            <Text style={styles.text}>Enter Phone Number</Text>
            <TextInput
                autoFocus
                style={styles.input}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="10 digit Mobile Number"
            />
            <Button title="LogIn" onPress={async () => { 
                if (phoneNumber.length == 10) 
                    { 

                        handleButton();
                        
                        var keyRaw = 'phoneNumber'
                        var key = await keyRaw.toString()

                        await AsyncStorage.setItem(key, phoneNumber)
                        console.log("complete")
                       
                                     
                        // props.navigation.navigate('Dash') 
                        props.navigation.navigate('Verify') 
                } 
                else { alert(phoneNumber + "is not a valid number") } 
                }} />
            <Text style={{ color: "red", marginTop: 100 }}></Text>
            <Button title="Skip Login" style={{ marginTop: 10 }} onPress={() => {props.navigation.navigate('Main') }} />

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 2,
        borderColor: 'lightblue',
        width: 300,
        marginVertical: 30,
        fontSize: 25,
        padding: 10,
        borderRadius: 8,
    },
    text: {
        fontSize: 25,
    },
});