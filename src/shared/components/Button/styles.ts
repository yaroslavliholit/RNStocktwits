import styled from 'styled-components/native';

import {Props} from './';

export const Button = styled.TouchableOpacity<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 5px;
  border-color: ${props =>
    props.variant === 'primary' ? 'blue' : 'lightgray'};
  border-width: 1px;
  background-color: ${props =>
    props.variant === 'primary' ? 'blue' : 'white'};
`;

export const Label = styled.Text<Pick<Props, 'variant'>>`
  font-size: 16px;
  color: ${props => (props.variant === 'primary' ? 'white' : 'black')};
`;
