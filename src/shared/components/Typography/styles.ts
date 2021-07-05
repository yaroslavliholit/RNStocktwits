import styled from 'styled-components/native';

import {Props} from './';

const label = () => `
  font-size: 16px;
  font-weight: 500;
`;

const button = () => `
  font-size: 18px;
  font-weight: 700;
  color: white;
`;

const heading = () => `
  font-size: 22px;
  font-weight: 600;
`;

const subtitle = () => `
  font-size: 18px;
  font-weight: 600;
`;

const important = () => `
  font-size: 16px;
  font-weight: 600;
`;

const danger = () => `
  font-size: 16px;
  font-weight: 600;
  color: #E83E3E;
`;

const success = () => `
  font-size: 16px;
  font-weight: 600;
  color: #58D38C;
`;

const VARIANTS = {
  label,
  button,
  heading,
  subtitle,
  important,
  danger,
  success,
};

export const Typography = styled.Text<Props>`
  ${props => VARIANTS[props.variant]}
`;
