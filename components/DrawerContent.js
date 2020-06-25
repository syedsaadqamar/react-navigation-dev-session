import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';

const DrawerContent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.button} onPress={_ => navigation.navigate('Home')} activeOpacity={0.7}>
          <View style={styles.icon}>
            <TabBarIcon focused={false} name="home" tag="FontAwesome" size={32} />
          </View>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={_ => navigation.navigate('Setting')} activeOpacity={0.7}>
          <View style={styles.icon}>
            <TabBarIcon focused={false} name="settings" tag="Feather" size={32} />
          </View>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 40,
    backgroundColor: '#fff'
  },
  icon: {
    marginLeft: 10
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#dfe7e5',
    borderWidth: 1,
    borderColor: '#b8e4c4'
  },
  buttonText: {
    marginLeft: 20,
    flex: 1,
    // textAlign: 'center',
    fontSize: 20
  }
});
export default DrawerContent;