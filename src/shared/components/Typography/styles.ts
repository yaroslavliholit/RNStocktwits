import styled from 'styled-components/native';

import {Props} from './';
import {DefaultTheme} from 'styled-components';

const getTypographyVariant = (theme: DefaultTheme) => ({
  label: () => `
    font-size: ${theme.sizes.m};
    font-weight: 500;
    color: ${theme.colors.text.primary};
  `,
  button: () => `
    font-size: ${theme.sizes.l};
    font-weight: 700;
    color: ${theme.colors.text.secondary};
  `,
  heading: () => `
    font-size: ${theme.sizes.xl};
    font-weight: 600;
    color: ${theme.colors.text.primary};
  `,
  subtitle: () => `
    font-size: ${theme.sizes.l};
    font-weight: 600;
    color: ${theme.colors.text.primary};
  `,
  important: () => `
    font-size: ${theme.sizes.m};
    font-weight: 600;
    color: ${theme.colors.text.primary};
  `,
  danger: () => `
    font-size: ${theme.sizes.m};
    font-weight: 600;
    color: ${theme.colors.text.error};
  `,
  success: () => `
    font-size: ${theme.sizes.m};
    font-weight: 600;
    color: ${theme.colors.text.success};
  `,
});

export const Typography = styled.Text<Props>`
  ${({theme, variant}) => getTypographyVariant(theme)[variant]}
`;
