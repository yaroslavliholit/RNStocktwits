import styled from 'styled-components/native';
import MapView from 'react-native-maps';

import Typography from '../../components/Typography';

export const MapContainer = styled(MapView)`
  position: relative;
  width: 100%;
  height: 220px;
  border-radius: 5px;
`;

export const Copyright = styled(Typography)`
  text-align: right;
`;
