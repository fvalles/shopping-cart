import styled from 'styled-components';
import { TypographyProps } from './common';

export const H2 = styled.h2<TypographyProps>`
  color: ${({ color = 'summaryHeading', theme }) => theme.Colors[color]};
  font-family: ${({ theme }) => theme.Fonts.regular}, 'Avenir Next', 'Segoe UI',
    sans-serif;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0px;
  line-height: 16px;
`;
