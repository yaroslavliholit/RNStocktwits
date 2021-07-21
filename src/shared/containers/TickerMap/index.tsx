import React, {
  memo,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import GeocoderOsm from 'react-native-geocoder-osm';
import {Linking} from 'react-native';

import Spacer from '../../components/Spacer';
import * as S from './styles';

interface Props {
  ticker: TickerDetails;
}

interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const TickerMap = ({ticker, ...rest}: PropsWithChildren<Props>) => {
  const [region, setRegion] = useState<Nullable<Region>>(null);

  const handleOpenCopyrightPage = useCallback(() => {
    Linking.openURL('https://osm.org/copyright');
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const [result] = await GeocoderOsm.getGeoAddress(ticker.hqAddress);

        if (result) {
          setRegion({
            latitude: Number(result.lat),
            longitude: Number(result.lon),
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          });
        }
      } catch {
        setRegion(null);
      }
    })();
  }, [ticker.hqAddress]);

  if (!region) {
    return null;
  }

  return (
    <>
      <Spacer positionType={'bottom'} sizeType={'small'}>
        <S.MapContainer
          {...rest}
          region={region}
          provider={PROVIDER_GOOGLE}
          pitchEnabled={false}
          rotateEnabled={false}
          zoomEnabled={false}
          scrollEnabled={false}>
          <Marker coordinate={region} />
        </S.MapContainer>
      </Spacer>
      <S.Copyright variant={'link'} onPress={handleOpenCopyrightPage}>
        © OpenStreetMap contributors
      </S.Copyright>
    </>
  );
};

export default memo(TickerMap);
