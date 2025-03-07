import {View, Text, Image} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Image source={require('../../../../assets/tab/home.png')} />
    </View>
  );
};

export default Home;
