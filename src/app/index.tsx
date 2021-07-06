import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';

import theme from './theme';
import store from './redux';
import Navigation from './navigation';
import ErrorBoundary from '../shared/containers/ErrorBoundary';
import withStorybook from '../shared/hocs/withStorybook';

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ErrorBoundary>
        <Navigation />
      </ErrorBoundary>
    </Provider>
  </ThemeProvider>
);

export default withStorybook(App);
