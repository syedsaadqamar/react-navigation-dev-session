import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

PostScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Post</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('PostDetails')} />
    </View>
  );
}

PostScreen.navigationOptions = {
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
export default PostScreen;