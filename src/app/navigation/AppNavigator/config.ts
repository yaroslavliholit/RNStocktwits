// Screens
import SearchNavigator from '../SearchNavigator';
import AboutUs from '../../../screens/AboutUs';

export const INITIAL_ROUTE_NAME = 'SearchNavigator';

const APP_NAVIGATOR_ROUTES = [
  {
    name: 'SearchNavigator',
    component: SearchNavigator,
    options: {title: 'Search'},
  },
  {
    name: 'AboutUs',
    component: AboutUs,
    options: {title: 'About'},
  },
];

export default APP_NAVIGATOR_ROUTES;
