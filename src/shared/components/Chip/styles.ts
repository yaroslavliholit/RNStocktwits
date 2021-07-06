import styled from 'styled-components/native';

import {Props} from './';

export const Chip = styled.TouchableOpacity<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 40px;
  padding: ${({theme}) => `${theme.spacing.s} ${theme.spacing.l}`};
  border-radius: ${({theme, withRoundCorners}) =>
    withRoundCorners ? theme.radius.large : theme.radius.small};
  overflow: hidden;
  background-color: ${({color}) => color};
`;
