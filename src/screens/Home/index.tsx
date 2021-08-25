import React, {memo} from 'react';
import {SafeAreaView} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import {useGetRecentSearches} from '../../store/search/hooks';
import Header from '../../shared/components/Header';
import Icon from '../../shared/components/Icon';
import Spacer from '../../shared/components/Spacer';

const Home = () => {
  // region ********** DATA **********
  const {colors} = useTheme();
  const {openDrawer} = useNavigation<DrawerNavigationProp<{}>>();
  // endregion

  // region ********** EFFECTS **********
  useGetRecentSearches();
  // endregion

  // region ********** JSX **********
  return (
    <SafeAreaView>
      <Spacer positionType={'bottom'} sizeType={'large'}>
        <Header
          onButtonPress={openDrawer}
          renderLeftIcon={
            <Icon
              type={'menu'}
              width={15}
              height={15}
              fill={colors.ui.secondary}
            />
          }
        />
      </Spacer>
    </SafeAreaView>
  );
  // endregion
};

export default memo(Home);
