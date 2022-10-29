import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Video } from 'expo-av';


export default function ProductSpecific({ route }) {
    const { item } = route.params;
    return (
        <View style={styles.screen}>
            <Video
                source={{ uri: "http://43.205.195.106:5000/video/id_video_2/_manifest.mpd" }}
                rate={1.0}
                volume={1.0}
                isMuted={true}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{ width: 330, height: 300 }}
            />
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