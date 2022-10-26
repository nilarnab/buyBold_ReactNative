import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import ProductView from "./ProductView";

const InfiniteList = (props) => {
    const [products, setProducts] = useState([]);
    const [refreshing, isRefreshing] = useState(false);
    const [pagination, setPagination] = useState(0);

    /**
     * Fetch the products via the API, then update the products state
     */
    const getProducts = () => {
        fetch(`https://desolate-gorge-42271.herokuapp.com/products/infiniteScroll/${pagination}`)
            .then(res => res.json())
            .then(data => setProducts([...products, ...data.query]));
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

    const resetList = () => {
        setProducts([]);
        setPagination(0);
    };

    useEffect(() => {
        getProducts();
    }, [pagination]);

    return (
        <FlatList
            data={products}
            renderItem={ProductView}
            initialNumToRender={1}
            // TODO: Fix in production
            keyExtractor={item => Math.random()}
            ListFooterComponent={renderLoader}
            onEndReached={loadMoreItems}
            onEndReachedThreshold={1}
            refreshing={refreshing}
            onRefresh={resetList}
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