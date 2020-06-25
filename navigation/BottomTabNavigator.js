import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import LinksScreen from '../screens/LinksScreen';
import PostScreen from './../screens/PostScreen';
import NotificationScreen from './../screens/NotificationScreen';
import HeaderOpts from './../constants/HeaderOpts';
import { View, Text, Button } from 'react-native'

const HomeStack = createStackNavigator();
const ResourceStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

function HomeScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      {route?.params?.itemId && <Text>Got data {route.params.itemId}</Text>}
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go to previous screen with params" onPress={() => navigation.navigate('Home', { itemId })} />
    </View>
  );
}

function ResourceDetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function PostDetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function NotificationDetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function BottomTabNavigator() {

  HomeStackScreen = () => {
    return (
      <HomeStack.Navigator screenOptions={({ route }) => ({...HeaderOpts.header(route)})}>
        <HomeStack.Screen name="Home" component={HomeScreen}/>
        <HomeStack.Screen name="Details" component={DetailsScreen}/>
      </HomeStack.Navigator>
     );
  }

  ResourceStackScreen = () => {
    return (
      <ResourceStack.Navigator screenOptions={({ route }) => ({...HeaderOpts.header(route)})}>
        <ResourceStack.Screen name="Links" component={LinksScreen}/>
        <ResourceStack.Screen name="ResourceDetails" component={ResourceDetailsScreen}/>
      </ResourceStack.Navigator>
     );
  }

  PostStackScreen = () => {
    return (
      <ResourceStack.Navigator screenOptions={({ route }) => ({...HeaderOpts.header(route)})}>
        <ResourceStack.Screen name="Post" component={PostScreen}/>
        <ResourceStack.Screen name="PostDetails" component={PostDetailsScreen}/>
      </ResourceStack.Navigator>
     );
  }

  NotificationStackScreen = () => {
    return (
      <ResourceStack.Navigator screenOptions={({ route }) => ({...HeaderOpts.header(route)})}>
        <ResourceStack.Screen name="Notification" component={NotificationScreen}/>
        <ResourceStack.Screen name="NotificationDetails" component={NotificationDetailsScreen}/>
      </ResourceStack.Navigator>
     );
  }

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={ResourceStackScreen}
        options={{
          title: 'Resources',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="Post"
        component={PostStackScreen}
        options={{
          title: 'Post',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="edit" tag="Feather" />,
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={NotificationStackScreen}
        options={{
          title: 'Notification',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-notifications-outline" tag="Ionicons" />,
        }}
      />
    </BottomTab.Navigator>
  );
}
