import styled from 'styled-components/native';
import {Svg} from 'react-native-svg';

export const SvgContainer = styled(Svg)`
  border: 1px solid ${({theme}) => theme.colors.bg.secondary};
  border-radius: 5px;
`;
