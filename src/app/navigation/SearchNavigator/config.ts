// Screens
import Home from '../../../screens/Home';
import CompanyDetails from '../../../screens/CompanyDetails';

export const INITIAL_ROUTE_NAME = 'Home';

const SEARCH_NAVIGATOR_ROUTES = [
  {
    name: 'Home',
    component: Home,
    options: {headerShown: false, title: 'Home'},
  },
  {
    name: 'CompanyDetails',
    component: CompanyDetails,
    options: {headerShown: false, title: 'Company details'},
  },
];

export default SEARCH_NAVIGATOR_ROUTES;
