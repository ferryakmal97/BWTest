import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DetailScreen, MainApp} from '../pages';

const Stack = createNativeStackNavigator();
const Hide = {headerShown: false};

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen name="MainApp" component={MainApp} options={Hide} />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={Hide}
      />
    </Stack.Navigator>
  );
};

export default Routes;
