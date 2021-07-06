import styled from 'styled-components/native';

import theme from '../../../app/theme';
import {Props, SpacerPosition, SpacerSize} from './';

const sizeVariant = {
  small: theme.spacing.s,
  medium: theme.spacing.m,
  large: theme.spacing.l,
};

const positionVariant = {
  top: 'margin-top',
  right: 'margin-right',
  bottom: 'margin-bottom',
  left: 'margin-left',
};

const getVariant = (positionType: SpacerPosition, sizeType: SpacerSize) => {
  const property = positionVariant[positionType];
  const value = sizeVariant[sizeType];

  return `${property}:${value}`;
};

export const Spacer = styled.View<Props>`
  ${({positionType, sizeType}) =>
    Array.isArray(positionType)
      ? positionType.map(e => getVariant(e, sizeType)).join(';')
      : getVariant(positionType, sizeType)}
`;
