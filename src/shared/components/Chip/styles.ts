import styled from 'styled-components/native';

import {ChipLabelContainerProps, Props} from './';

export const Chip = styled.View<Props>`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 40px;
  border-radius: ${props => (props.withRoundCorners ? '40px' : '3px')};
  overflow: hidden;
  background-color: ${props => props.color || 'green'};
`;

export const ChipLabelContainer = styled.View<ChipLabelContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 20px;
  background-color: ${props => props.color || 'green'};
  width: ${props => (props.deletable ? '75%' : '100%')};
`;

export const DeleteArea = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;
