import React, {memo} from 'react';
import {SafeAreaView} from 'react-native';
import {useTheme} from 'styled-components';

import useDrawerNavigation from '../../shared/hocs/useDrawerNavigation';
import Header from '../../shared/components/Header';
import Icon from '../../shared/components/Icon';
import Spacer from '../../shared/components/Spacer';

const Home = () => {
  const {colors} = useTheme();
  const {openDrawer} = useDrawerNavigation();

  return (
    <SafeAreaView>
      <Spacer positionType={'bottom'} sizeType={'medium'}>
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
};

export default memo(Home);
