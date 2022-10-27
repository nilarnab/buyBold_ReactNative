import React from 'react';
import {Text, View} from 'react-native';


function Dashboard({data}) {
  return (
    <View>
   
    <Text>{data.id}</Text>
    <Text>{data.msg}</Text>
    if({data.msg}==="This number already exists !"){
      <Text>Please register your mail to continue</Text>
    }
    else{
      <Text>Enjoy your shoping</Text>
    }
    <Text>
      Heyy you are logged in
    </Text>
   
</View>
  )
}

export default Dashboard
