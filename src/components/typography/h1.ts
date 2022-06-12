import styled from 'styled-components';
import { TypographyProps } from './common';

export const H1 = styled.h1<TypographyProps>`
  color: ${({ color = 'summaryText', theme }) => theme.Colors[color]};
  font-family: ${({ theme }) => theme.Fonts.medium}, 'Avenir Next', 'Segoe UI',
    sans-serif;
  font-size: 18px;
  letter-spacing: -0.18px;
  line-height: 24px;
`;
