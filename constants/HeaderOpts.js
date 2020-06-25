import React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import { View, TouchableOpacity, Dimensions, Text } from 'react-native';

export default {
  header: (route) => {
    const opts = {
      headerLeft: () => 
      <TouchableOpacity style={{marginLeft: 4}}>
        <View><TabBarIcon focused={false} name="user-circle-o" tag="FontAwesome" size={40}/></View>
      </TouchableOpacity>,
      headerTitle: _ =>
        <View style={{width: (Dimensions.get('window').width) - 120}}>
          <Text style={{color: '#fff'}}>{route.name}</Text>
        </View>,
      headerRight: _ => <View style={{marginRight: 4}}><TabBarIcon focused={false} name="bubbles" tag="SimpleLineIcons" size={40}/></View>,
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff'
    }
    return opts;
  }
}