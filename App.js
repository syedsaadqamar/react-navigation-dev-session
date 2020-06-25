import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import HomeTabNavigator from './navigation/BottomTabNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './components/DrawerContent';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

 function SettingScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Setting Screen</Text>
    </View>
  );
}

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName={'Home'} headerMode={'none'} drawerContent={DrawerContent}>
          <Drawer.Screen name="Home" component={HomeTabNavigator} />
          <Drawer.Screen name="Setting" component={SettingScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});









{/*
import { StatusBar } from 'expo-status-bar';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';  
<View style={styles.container}>
<NavigationContainer linking={LinkingConfiguration}>
  <Stack.Navigator>
    <Stack.Screen name="Root" component={BottomTabNavigator} />
  </Stack.Navigator>
</NavigationContainer>
<StatusBar style="auto" />
</View> */}