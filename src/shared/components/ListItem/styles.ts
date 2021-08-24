import styled from 'styled-components/native';

import {Props} from './';

export const Container = styled.View<Props>`
  flex-direction: row;
  align-items: center;
  width: ${({leftNode, rightNode}) => (leftNode || rightNode ? '100%' : '60%')};
`;

export const IconContainer = styled.View`
  width: 20%;
  align-items: center;
`;
