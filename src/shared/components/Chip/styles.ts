import styled from 'styled-components/native';

import {Props} from './';

export const Chip = styled.TouchableOpacity<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 40px;
  padding: 5px 20px;
  border-radius: ${props => (props.withRoundCorners ? '40px' : '3px')};
  overflow: hidden;
  background-color: ${props => props.color || 'green'};
`;
