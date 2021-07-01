import React, {memo} from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../../shared/components/Header';

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
    </SafeAreaView>
  );
};

export default memo(Home);
