import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function ProductSpecific({ route }) {
    const { item } = route.params;

    return (
        <View style={styles.screen}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.description}</Text>
            <Text style={styles.text}>₹{item.price}</Text>
            <Text style={styles.text}>{item.ratings}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff"
    },
    text: {
        fontSize: 20,
    },
});