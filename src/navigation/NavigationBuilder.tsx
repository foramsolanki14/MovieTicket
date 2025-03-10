import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenName} from '../utils/Constants';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './TabNavigator';
import MyProfile from '../modules/Profile/screens/MyProfile/MyProfile';
import YourOrders from '../modules/Profile/screens/YourOrders/YourOrders';
import MovieDetails from '../modules/Movies/screens/MovieDetails/MovieDetails';
import SelectSeat from '../modules/Movies/screens/SelectSeat/SelectSeat';
import Cinema from '../modules/Movies/screens/Cinema/Cinema';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenName.BottomTab} component={TabNavigator} />

      <Stack.Group screenOptions={{headerShown: true}}>
        <Stack.Screen name={ScreenName.MyProfile} component={MyProfile} />
        <Stack.Screen name={ScreenName.YourOrders} component={YourOrders} />
      </Stack.Group>
      <Stack.Group screenOptions={{headerShown: true}}>
        <Stack.Screen name={ScreenName.MovieDetails} component={MovieDetails} />
        <Stack.Screen name={ScreenName.Cinema} component={Cinema} />
        <Stack.Screen name={ScreenName.SelectSeat} component={SelectSeat} />
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
