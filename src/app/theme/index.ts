import {DefaultTheme} from 'styled-components';

import colors from './colors';
import sizes from './sizes';
import spacing from './spacing';
import radius from './radius';
import fonts from './fonts';

export const themeValues = {
  colors,
  sizes,
  spacing,
  radius,
  fonts,
};

const theme: DefaultTheme = {
  ...themeValues,
};

export default theme;
