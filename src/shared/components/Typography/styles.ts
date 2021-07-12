import styled from 'styled-components/native';

import {Props} from './';
import {DefaultTheme} from 'styled-components';

const getTypographyVariant = (theme: DefaultTheme) => ({
  label: () => `
    font-family: ${theme.fonts.regular};
    font-size: ${theme.sizes.m};
    font-weight: 400;
    color: ${theme.colors.text.primary};
  `,
  button: () => `
    font-family: ${theme.fonts.bold};
    font-size: ${theme.sizes.l};
    font-weight: 700;
    color: ${theme.colors.text.secondary};
  `,
  heading: () => `
    font-family: ${theme.fonts.bold};
    font-size: ${theme.sizes.xl};
    font-weight: 600;
    color: ${theme.colors.text.primary};
  `,
  subtitle: () => `
    font-family: ${theme.fonts.bold};
    font-size: ${theme.sizes.l};
    font-weight: 600;
    color: ${theme.colors.text.primary};
  `,
  important: () => `
    font-family: ${theme.fonts.bold};
    font-size: ${theme.sizes.m};
    font-weight: 600;
    color: ${theme.colors.text.primary};
  `,
  danger: () => `
    font-family: ${theme.fonts.bold};
    font-size: ${theme.sizes.m};
    font-weight: 600;
    color: ${theme.colors.text.error};
  `,
  success: () => `
    font-family: ${theme.fonts.bold};
    font-size: ${theme.sizes.m};
    font-weight: 600;
    color: ${theme.colors.text.success};
  `,
  link: () => `
    font-family: ${theme.fonts.regular};
    font-size: ${theme.sizes.s};
    font-weight: 400;
    color: ${theme.colors.brand.primary};
    text-decoration: underline;
    text-decoration-color: ${theme.colors.brand.primary};
  `,
});

export const Typography = styled.Text<Props>`
  ${({theme, variant}) => getTypographyVariant(theme)[variant]}
`;
