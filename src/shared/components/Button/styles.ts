import styled from 'styled-components/native';

import {center} from '../../../app/theme/commonStyles';
import {Props} from './';

export const Button = styled.TouchableOpacity<Props>`
  padding: ${({theme}) => theme.spacing.m};
  border-radius: ${({theme}) => theme.radius.common};
  border-color: ${({theme, variant}) =>
    variant === 'primary' ? theme.colors.brand.primary : 'transparent'};
  border-width: 1px;
  background-color: ${({theme, variant}) =>
    variant === 'primary'
      ? theme.colors.brand.primary
      : theme.colors.bg.primary};
  ${center}
`;

export const Label = styled.Text<Pick<Props, 'variant'>>`
  font-size: ${({theme}) => theme.sizes.m};
  color: ${({variant, theme}) =>
    variant === 'primary'
      ? theme.colors.bg.primary
      : theme.colors.text.primary};
`;
