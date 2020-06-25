import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import * as React from 'react';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  const CustomTag = props.tag;
  if (CustomTag === 'FontAwesome') {
    return (
      <FontAwesome
        name={props.name}
        size={props.size ? props.size : 30}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );

  } else if (CustomTag === 'AntDesign') {
    return (
      <AntDesign
        name={props.name}
        size={props.size ? props.size : 30}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  } else if (CustomTag === 'MaterialCommunityIcons') {
    return (
      <MaterialCommunityIcons
        name={props.name}
        size={props.size ? props.size : 30}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  } else if (CustomTag === 'Feather') {
    return (
      <Feather
        name={props.name}
        size={props.size ? props.size : 30}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  } else if (CustomTag === 'SimpleLineIcons') {
    return (
      <SimpleLineIcons
        name={props.name}
        size={props.size ? props.size : 30}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  } else {
    return (
      <Ionicons
        name={props.name}
        size={props.size ? props.size : 30}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}
