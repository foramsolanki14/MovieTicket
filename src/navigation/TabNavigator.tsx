import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenName} from '../utils/Constants';
import Home from '../modules/Home/screens/Home/Home';
import Movies from '../modules/Movies/screens/Movies/Movies';
import Profile from '../modules/Profile/screens/Profile/Profile';

const BottomTab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen name={ScreenName.Home} component={Home} />
      <BottomTab.Screen name={ScreenName.Movies} component={Movies} />
      <BottomTab.Screen name={ScreenName.Profile} component={Profile} />
    </BottomTab.Navigator>
  );
}
