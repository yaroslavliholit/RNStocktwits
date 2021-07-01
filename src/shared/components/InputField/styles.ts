import styled from 'styled-components/native';

import {Props} from './';

export const Container = styled.View<Props>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  border: ${({withBorder}) => (withBorder ? '1px solid lightgray' : 'none')};
  border-radius: ${({withBorder}) => (withBorder ? '4px' : '0px')};
`;

export const IconContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100%;
  margin: 0 5px;
`;

export const InputField = styled.TextInput<Props>`
  width: ${({renderLeftIcon}) => (renderLeftIcon ? '87%' : '100%')};
  height: 100%;
`;
