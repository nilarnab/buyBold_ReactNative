import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, AppRegistry, FlatList } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export const HomeScreen = () => {

    return (
          <SafeAreaView style={styles.container}>
            <View>
            <Text>Home Screen View</Text>
            <StatusBar style="auto" />
            
            </View>
        </SafeAreaView>
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