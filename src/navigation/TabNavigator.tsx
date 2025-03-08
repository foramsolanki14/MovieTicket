import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenName} from '../utils/Constants';
import Home from '../modules/Home/screens/Home/Home';
import Movies from '../modules/Movies/screens/Movies/Movies';
import Profile from '../screens/Profile';
import {Image} from 'react-native';

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{tabBarActiveTintColor: 'red'}}>
      <BottomTab.Screen
        name={ScreenName.Home}
        component={Home}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require('../assets/tab/home.png')}
                style={{height: 20, width: 20}}
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
                style={{height: 20, width: 20}}
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
                style={{height: 20, width: 20}}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
