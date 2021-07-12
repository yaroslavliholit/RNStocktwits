import React, {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SEARCH_NAVIGATOR_ROUTES, {INITIAL_ROUTE_NAME} from './config';

export type SearchNavigatorParams = {
  Home: undefined;
  CompanyDetails: {ticker: string};
};

const SearchStack = createStackNavigator<SearchNavigatorParams>();

const SearchNavigator = () => (
  <SearchStack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
    {SEARCH_NAVIGATOR_ROUTES.map(route => (
      <SearchStack.Screen
        key={route.name}
        name={route.name as keyof SearchNavigatorParams}
        component={route.component}
        options={route.options}
      />
    ))}
  </SearchStack.Navigator>
);

export default memo(SearchNavigator);
