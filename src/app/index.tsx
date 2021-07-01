import React from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';

import store from './redux';
import Navigation from './navigation';
import withStorybook from '../shared/hocs/withStorybook';

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default withStorybook(App);
