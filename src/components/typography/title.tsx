import styled from 'styled-components';
import { TypographyProps } from './common';

export const Title = styled.p<TypographyProps>`
  color: ${({ color = 'primary', theme }) => theme.Colors[color]};
  font-family: ${({ theme }) => theme.Fonts.regular}, 'Avenir Next', 'Segoe UI',
    sans-serif;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.18px;
  line-height: 24px;
`;
