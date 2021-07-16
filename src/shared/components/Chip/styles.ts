import styled from 'styled-components/native';

import {center} from '../../../app/theme/commonStyles';
import {Props} from './';

export const Chip = styled.TouchableOpacity<Props>`
  flex-direction: row;
  height: 40px;
  padding: ${({theme}) => `${theme.spacing.s} ${theme.spacing.l}`};
  border-radius: ${({theme, withRoundCorners}) =>
    withRoundCorners ? theme.radius.large : theme.radius.small};
  overflow: hidden;
  background-color: ${({color}) => color};
  ${center}
`;
