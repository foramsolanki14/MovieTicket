import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Setting = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Pressable
          style={styles.location}
          onPress={() => navigation.navigate('Cites')}>
          <Text>My Location</Text>
          <Text>City</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e1e3',
  },
  main: {
    paddingTop: 20,
  },
  location: {
    backgroundColor: '#fcfcfc',
  },
});
