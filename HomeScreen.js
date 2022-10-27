import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, AppRegistry, FlatList } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InfiniteList from "./components/InfiniteList";
// import { Router, Scene } from 'react-native-router-flux'

/* <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "locVer" component = {LocVer} title = "Locatio Verification" />
      </Scene>
   </Router> */

// const Routes = () => (
//     <Router>
//        <Scene key = "root">
//           <Scene key = "home" component = {Home} title = "Home" initial = {true} />
//           <Scene key = "about" component = {About} title = "About" />
//        </Scene>
//     </Router>
//  )

const Home = () => {

  return (
    <SafeAreaView style={styles.container}>
            <View>
            <InfiniteList />
            <StatusBar style="auto" />
            
            </View>
    </SafeAreaView>
  )
}


export const HomeScreen = () => {

    return (
          Home()
        )
    
      }

const styles = StyleSheet.create({
    container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      
        navigation: {
          backgroundColor: 'tomato'
        }
      });