import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

NotificationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Notification</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('NotificationDetails')} />
    </View>
  );
}

NotificationScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    paddingTop: 30,
  },
});
export default NotificationScreen;