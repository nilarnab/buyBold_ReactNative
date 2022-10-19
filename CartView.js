import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, AppRegistry, FlatList } from 'react-native';

const userId = "630dc78ee20ed11eea7fb99f"


  
  
export const CartView = (prop) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    var userId = prop['userProfile']
    console.log(userId)

  const resp = await fetch(`https://desolate-gorge-42271.herokuapp.com/handleCartOps/show_items?user_id=${userId}`, {method: 'POST'})
  var data_raw = await resp.json();
  const data = data_raw["response"]["cart_items"]
  setData(data);
  setLoading(false);
  
 

  }


  const addItem = async ({cart_id}) => {
    const resp = await fetch(`https://desolate-gorge-42271.herokuapp.com/handleCartOps/alter?cart_id=${cart_id}`, {method: 'POST'})
  }

  const Item = ({ prop}) => {
    console.log(prop)
    return (
    <View >
      <View style={styles.cart_item}>
        <Text style={styles.title}>{prop.name}</Text>
        <Text style={styles.title}>{prop.description}</Text>
        <Text style={styles.title}>{prop._id.toString}</Text>
      </View>
    </View>
  )};
  
    

    


    const renderItem = ({ item }) => {
      console.log("prerender condition")
      console.log(item)

      var product_id = item[Object.keys(item)[0]]._id.toString()
      var product_name = item[Object.keys(item)[0]].name
      var product_description = item[Object.keys(item)[0]].description
      return (
      <Item prop={item[Object.keys(item)[0]]} />
    )};

    useEffect(() => {
      fetchCart();
    }, []);
    
  
    
    return (
          
            <SafeAreaView style={styles.outer_container}>
              {loading && <Text>Loading..</Text>}
              <Text>The following shows your cart items</Text>
              <View style={styles.container}>
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                />
              </View>
              <Text>User ID {userId}</Text>
              <StatusBar style="auto" />
            </SafeAreaView>
          
            )
      }

      const styles = StyleSheet.create({
        container: {
              backgroundColor: '#fff',
              alignItems: 'center',
              elevation:3,
              justifyContent: 'center',
              marginVertical: 10,
              marginHorizontal: 20,
              borderRadius: 20
            },

            outer_container: {
              backgroundColor: '#fff',
              height: '100%',
            },
            
            cart_item: {
              height: 'auto',
              justifyContent: 'center',
              elevation: 1,
              margin: 10,
              padding: 10,
              borderStyle: 'solid'
            },
          
            navigation: {
              backgroundColor: 'tomato'
            }
          });