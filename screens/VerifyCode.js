import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function OTP(props) {

    const [code, setCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('----')
    const [verdict, setVerdict] = useState('type OTP')

    const fetchPhone = async () => {
        console.log('trying to fetch phone number')
        var keyRaw = 'phoneNumber'
        var key = await keyRaw.toString()
        var data = await AsyncStorage.getItem(key)

        console.log(data)
        setPhoneNumber(data)

    }

    useEffect(() => {
        fetchPhone()
    }, []);

    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Enter OTP</Text>
            <TextInput
                autoFocus
                value={code}
                onChangeText={setCode}
                keyboardType="numeric"
                style={styles.input}
            />
            <Text>{verdict}</Text>
            <Button title="Confirm OTP" onPress={async () => {

                setVerdict("Judging OTP")

                const resp_raw = await fetch(`https://desolate-gorge-42271.herokuapp.com/phoneVerify/verify_otp?phone_num=+91${phoneNumber}&pin=${code}`, { method: 'GET' })
                var resp = await resp_raw.json()
                console.log("response")
                console.log(resp)

                if (resp['verdict'] == 1) {
                    setVerdict('OTP Correct')
                    props.navigation.navigate("Main")
                }
                else {
                    setVerdict(resp['message'])
                }


            }} />
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