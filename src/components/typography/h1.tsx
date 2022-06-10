import styled from 'styled-components';
import { TypographyProps } from './common';

export const H1 = styled.h1<TypographyProps>`
  color: ${({ color = 'summaryText', theme }) => theme.Colors[color]};
  font-family: ${({ theme }) => theme.Fonts.regular}, 'Avenir Next', 'Segoe UI',
    sans-serif;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.18px;
  line-height: 24px;
`;
