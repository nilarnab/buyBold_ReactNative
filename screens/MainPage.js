import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, AppRegistry, FlatList } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../HomeScreen'
import { CartView } from '../CartView'

AppRegistry.registerComponent('Appname', () => App);

const userId = "630dc78ee20ed11eea7fb99f"
const Tab = createBottomTabNavigator()
function MainPage() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Cart" children={() => <CartView userProfile={userId} />} />
        </Tab.Navigator>
    );
}

export default MainPage