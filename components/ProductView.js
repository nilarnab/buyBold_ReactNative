import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

/**
 * Product View Component
 */
const ProductView = ({ item }) => {
    return (
        <View style={styles.itemWrapperStyle}>
            <Image style={styles.itemImageStyle} source={{ uri: item.images[1] }} />
            <View style={styles.contentWrapperStyle}>
                <Text style={styles.txtNameStyle}>{item.title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemWrapperStyle: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: "#ddd",
    },
    itemImageStyle: {
        width: '100%',
        aspectRatio: 1,
        marginVertical: 16,
        borderRadius: 25,
    },
    contentWrapperStyle: {
        justifyContent: "space-around",
    },
    txtNameStyle: {
        fontSize: 16,
    }
});

// TODO: Optimize large virtualized list
export default ProductView;