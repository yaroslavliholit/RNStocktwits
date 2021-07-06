import {DefaultTheme} from '@react-navigation/native';

import theme from './';

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.bg.primary,
  },
};

export default navigationTheme;
