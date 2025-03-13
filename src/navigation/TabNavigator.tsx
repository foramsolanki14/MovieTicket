import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenName} from '../utils/Constants';
import Home from '../modules/Home/screens/Home/Home';
import Movies from '../modules/Movies/screens/Movies/Movies';
import Profile from '../modules/Profile/screens/Profile/Profile';
import {Image, StyleSheet} from 'react-native';
import Cites from '../modules/Cites/screens/Cites/Cites';

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: 'red'}}>
      <BottomTab.Screen
        name={ScreenName.Home}
        component={Home}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require('../assets/tab/home.png')}
                style={styles.img}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={ScreenName.Movies}
        component={Movies}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require('../assets/tab/movie.png')}
                style={styles.img}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={ScreenName.Profile}
        component={Profile}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require('../assets/tab/profile.png')}
                style={styles.img}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  img: {
    height: 20,
    width: 20,
  },
});
