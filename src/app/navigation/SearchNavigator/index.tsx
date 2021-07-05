import React, {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Home from '../../../screens/Home';
import CompanyDetails from '../../../screens/CompanyDetails';

export type SearchNavigatorParams = {
  Home: undefined;
  CompanyDetails: {ticker: string};
};

const SearchStack = createStackNavigator<SearchNavigatorParams>();

const SearchNavigator = () => (
  <SearchStack.Navigator initialRouteName={'Home'}>
    <SearchStack.Screen
      name={'Home'}
      component={Home}
      options={{headerShown: false}}
    />
    <SearchStack.Screen
      name={'CompanyDetails'}
      component={CompanyDetails}
      options={{headerShown: false}}
    />
  </SearchStack.Navigator>
);

export default memo(SearchNavigator);
