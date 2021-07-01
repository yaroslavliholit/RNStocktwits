import React, {memo} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Screens
import SearchNavigator from '../SearchNavigator';
import AboutUs from '../../../screens/AboutUs';

const Drawer = createDrawerNavigator();

const AppNavigator = () => (
  <Drawer.Navigator initialRouteName={'SearchNavigator'}>
    <Drawer.Screen name={'SearchNavigator'} component={SearchNavigator} />
    <Drawer.Screen name={'AboutUs'} component={AboutUs} />
  </Drawer.Navigator>
);

export default memo(AppNavigator);
