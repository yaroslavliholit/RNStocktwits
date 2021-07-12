import React, {memo} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import APP_NAVIGATOR_ROUTES, {INITIAL_ROUTE_NAME} from './config';

const Drawer = createDrawerNavigator();

const AppNavigator = () => (
  <Drawer.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
    {APP_NAVIGATOR_ROUTES.map(route => (
      <Drawer.Screen key={route.name} {...route} />
    ))}
  </Drawer.Navigator>
);

export default memo(AppNavigator);
