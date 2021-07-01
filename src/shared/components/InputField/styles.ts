import styled from 'styled-components/native';

import {Props} from './';

export const Container = styled.View<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border: ${({withBorder}) => (withBorder ? '1px solid lightgray' : 'none')};
  border-radius: ${({withBorder}) => (withBorder ? '4px' : '0px')};
`;

export const LeftIconContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const InputField = styled.TextInput<Props>`
  width: ${({renderLeftIcon}) => (renderLeftIcon ? '95%' : '100%')};
`;
