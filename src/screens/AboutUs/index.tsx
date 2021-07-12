import React, {memo, useCallback} from 'react';
import {SafeAreaView} from 'react-native';
import {Linking} from 'react-native';

import Typography from '../../shared/components/Typography';
import Spacer from '../../shared/components/Spacer';

const AboutUs = () => {
  const handleFreePikLink = useCallback(() => {
    Linking.openURL('https://www.freepik.com');
  }, []);

  const handleFlatIconLink = useCallback(() => {
    Linking.openURL('https://www.flaticon.com/');
  }, []);

  const handleOpenStreetMapLink = useCallback(() => {
    Linking.openURL('https://osm.org/copyright');
  }, []);

  return (
    <SafeAreaView>
      <Spacer positionType={['left', 'right']} sizeType={'medium'}>
        <Spacer positionType={'bottom'} sizeType={'medium'}>
          <Typography variant={'subtitle'}>Icons made by</Typography>
          <Typography variant={'link'} onPress={handleFreePikLink}>
            Freepik
          </Typography>
        </Spacer>
        <Spacer positionType={'bottom'} sizeType={'medium'}>
          <Typography variant={'subtitle'}>from</Typography>
          <Typography variant={'link'} onPress={handleFlatIconLink}>
            www.flaticon.com
          </Typography>
        </Spacer>
        <Typography variant={'subtitle'}>Geocoding</Typography>
        <Typography variant={'link'} onPress={handleOpenStreetMapLink}>
          © OpenStreetMap contributors
        </Typography>
      </Spacer>
    </SafeAreaView>
  );
};

export default memo(AboutUs);
