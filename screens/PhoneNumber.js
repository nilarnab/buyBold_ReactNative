import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function PhoneNumber(props) {
    const [phoneNumber, setPhoneNumber] = useState(null);

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
            <Button title="LogIn" onPress={() => { if (phoneNumber.length == 10) { props.navigation.navigate('Verify') } else { alert(phoneNumber + "is not a valid number") } }} />
            <Text style={{ color: "red", marginTop: 100 }}></Text>
            <Button title="Skip Login" style={{ marginTop: 10 }} onPress={() => { props.navigation.navigate('Main') }} />

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