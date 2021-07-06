import styled from 'styled-components/native';

import {Props} from './';

// TODO: add mixins

export const Button = styled.TouchableOpacity<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({theme}) => theme.spacing.m};
  border-radius: ${({theme}) => theme.radius.common};
  border-color: ${({theme, variant}) =>
    variant === 'primary' ? theme.colors.brand.primary : 'transparent'};
  border-width: 1px;
  background-color: ${({theme, variant}) =>
    variant === 'primary'
      ? theme.colors.brand.primary
      : theme.colors.bg.primary};
`;

export const Label = styled.Text<Pick<Props, 'variant'>>`
  font-size: ${({theme}) => theme.sizes.m};
  color: ${({variant, theme}) =>
    variant === 'primary'
      ? theme.colors.bg.primary
      : theme.colors.text.primary};
`;
