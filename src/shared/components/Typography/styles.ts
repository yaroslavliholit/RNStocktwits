import styled from 'styled-components/native';

import {Props} from './';

export const label = () => `
  font-size: 16px;
  font-weight: 500;
`;

export const button = () => `
  font-size: 18px;
  font-weight: 700;
  color: white;
`;

const VARIANTS = {
  label,
  button,
};

export const Typography = styled.Text<Props>`
  ${props => VARIANTS[props.variant]}
`;
