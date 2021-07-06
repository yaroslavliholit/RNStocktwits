import {DefaultTheme} from 'styled-components';

import colors from './colors';
import sizes from './sizes';
import spacing from './spacing';
import radius from './radius';

export const themeValues = {
  colors,
  sizes,
  spacing,
  radius,
};

const theme: DefaultTheme = {
  ...themeValues,
};

export default theme;
