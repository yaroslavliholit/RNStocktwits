import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

const useDrawerNavigation = () => useNavigation<DrawerNavigationProp<{}>>();

export default useDrawerNavigation;
