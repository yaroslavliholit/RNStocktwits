import React, {memo} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import navigationTheme from '../theme/navigationTheme';
import AppNavigator from './AppNavigator';

const Navigation = () => (
  <NavigationContainer theme={navigationTheme}>
    <AppNavigator />
  </NavigationContainer>
);

export default memo(Navigation);
