import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

/**
 * Product View Component
 */
const ProductView = ({ item }) => {
    return (
        <View style={styles.itemWrapperStyle}>
            <Image style={styles.itemImageStyle} source={{ uri: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-1_large.png?format=webp&v=1530129113" }} />
            <View style={styles.contentWrapperStyle}>
                <Text style={styles.txtNameStyle}>{item.name}</Text>
                <Text>{item.description}</Text>
                <Text>{item.price}</Text>
                <Text>{item.ratings}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemWrapperStyle: {
        flexDirection: "column",
        justifyContent: 'center',
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
        alignItems : "flex-start",
    },
    txtNameStyle: {
        fontSize: 16,
    }
});

// TODO: Optimize large virtualized list
export default ProductView;