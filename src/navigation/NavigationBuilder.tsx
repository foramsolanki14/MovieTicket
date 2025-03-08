import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenName} from '../utils/Constants';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './TabNavigator';
import MyProfile from '../modules/Profile/screens/MyProfile/MyProfile';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenName.BottomTab} component={TabNavigator} />

      <Stack.Group screenOptions={{headerShown: true}}>
        <Stack.Screen name={ScreenName.MyProfile} component={MyProfile} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default Navigation;
