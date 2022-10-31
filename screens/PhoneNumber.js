import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Linking } from 'react-native';
import { State } from 'react-native-gesture-handler';
import * as Keychain from 'react-native-keychain';
import { MMKV } from 'react-native-mmkv';
// import KeyValueStorage from "react-native-key-value-storage"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WebView } from 'react-native-webview'

export default function PhoneNumber(props) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [authToken, setAuthToken] = useState = (null);
    const [authentication, setAuthentication] = useState(1);

    // const requestOtp = async (phoneNumberUser) => {
    //     console.log(phoneNumberUser);
    //     const resp_raw = await fetch(`https://desolate-gorge-42271.herokuapp.com/phoneVerify/reset_otp?phone_num=+91${phoneNumberUser}`, { method: 'GET' })
    //     var resp = resp_raw.json()
    //     console.log("response")
    //     console.log(resp)
    // }

    const handleAuth = async () => {
        console.log("waiting for auth");
        const resp_raw = await fetch(`https://desolate-gorge-42271.herokuapp.com/phoneVerify/phone_num=+91${phoneNumber}`, { method: 'GET' })
        var resp = await resp_raw.json()
        setAuthToken(resp.token)
        setAuthentication(2)
        // await requestOtp(phoneNumber)
        const resp = await fetch(`https://desolate-gorge-42271.herokuapp.com/phoneVerify/waitAuth?token=${authToken}`, { method: 'GET' })
        var resp = await resp.json()
        if (resp.verdict) {
            setAuthentication(3)
        }
        else {
            setAuthentication(1)
        }
    }
    if (authentication == 2)
        return <WebView source={{ uri: `http://192.168.166.176:3000/register?token=${authToken}&phone=${phoneNumber}` }}></WebView>
    else if (authentication == 1)
        return <View style={styles.screen}>
            <Text style={styles.text}>Enter Phone Number</Text>
            <TextInput
                autoFocus
                style={styles.input}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="10 digit Mobile Number"
            />
            <Button title="LogIn" onPress={async () => {
                if (phoneNumber.length == 10) {

                    await handleAuth();
                }
                else { alert(phoneNumber + "is not a valid number") }
            }} />
            <Text style={{ color: "red", marginTop: 100 }}></Text>

        </View>
    else if (authentication === 3) {
        props.navigation.navigate('Main')
    }
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