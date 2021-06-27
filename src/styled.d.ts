import 'styled-components';
import {themeValues} from 'app/theme';

type ThemeValues = typeof themeValues;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeValues {}
}
