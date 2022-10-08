import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import ProductView from "./ProductView";

/**
 * Infinite View Component
 */
const InfiniteList = () => {
    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState(0);

    /**
     * Fetch the products via the API, then update the products state
     */
    const getProducts = () => {
        fetch(`https://api.escuelajs.co/api/v1/products?offset=${pagination}&limit=3`)
            .then(res => res.json())
            .then(data => setProducts([...products, ...data]));
    };

    /**
     * A wrapper for the loader visible at the bottom of the infinite list
     */
    const renderLoader = () => {
        return (
            <View style={styles.loaderStyle}>
                <ActivityIndicator size="large" color="#aaa" />
            </View>
        );
    };

    const loadMoreItems = () => {
        setPagination(pagination + 1);
    };

    useEffect(() => {
        getProducts();
    }, [pagination]);

    return (
        <FlatList
            data={products}
            renderItem={ProductView}
            initialNumToRender={5}
            // TODO: Change to use the item id when integrating with the real api
            keyExtractor={item => Math.random()}
            ListFooterComponent={renderLoader}
            onEndReached={loadMoreItems}
            onEndReachedThreshold={1}
        />
    );
};

const styles = StyleSheet.create({
    loaderStyle: {
        marginVertical: 16,
        alignItems: "center",
    },
});

export default InfiniteList;