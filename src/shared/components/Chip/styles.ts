import styled from 'styled-components/native';

import {ChipLabelContainerProps, Props} from './';

export const Chip = styled.View<Props>`
  display: flex;
  flex-direction: row;
  min-width: 100px;
  max-width: 130px;
  height: 40px;
  border-radius: 40px;
  background-color: darkred;
  overflow: hidden;
`;

export const ChipLabelContainer = styled.TouchableOpacity<ChipLabelContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const Label = styled.Text`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
`;
