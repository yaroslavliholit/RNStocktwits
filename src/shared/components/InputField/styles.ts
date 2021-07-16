import styled from 'styled-components/native';

import {center} from '../../../app/theme/commonStyles';
import {Props} from './';

export const Container = styled.View<Props>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-height: 50px;
  border: ${({withBorder, theme}) =>
    withBorder ? `1px solid ${theme.colors.ui.secondary}` : 'none'};
  border-radius: ${({withBorder, theme}) =>
    withBorder ? theme.radius.small : '0px'};
`;

export const IconContainer = styled.View`
  width: 10%;
  height: 100%;
  margin: 0 ${({theme}) => theme.spacing.s};
  ${center}
`;

export const InputField = styled.TextInput<Props>`
  width: ${({renderLeftIcon}) => (renderLeftIcon ? '87%' : '100%')};
  height: 100%;
`;
