import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import useCachedResources from './hooks/useCachedResources';

const Stack = createStackNavigator();

function HomeScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      {route?.params?.itemId && <Text>Got data {route.params.itemId}</Text>}
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            // itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId } = route.params;
  const { otherParam } = route.params;
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text style={styles.buttonStyle}>otherParam: {JSON.stringify(otherParam)}</Text>
      <View style={styles.buttonStyle}>
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      </View>
      <View style={styles.buttonStyle}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.buttonStyle}>
        <Button title="Go to previous screen with params" onPress={() => navigation.navigate('Home', { itemId })} />
      </View>
    </View>
  );
}

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} initialParams={{ itemId: 42 }}/>
        </Stack.Navigator>
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
  buttonStyle: {
    marginBottom: 10
  }
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