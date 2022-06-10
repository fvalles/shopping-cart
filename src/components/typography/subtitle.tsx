import styled from 'styled-components';
import { TypographyProps } from './common';

export const Subtitle = styled.p<TypographyProps>`
  color: ${({ color = 'productTitle', theme }) => theme.Colors[color]};
  font-family: ${({ theme }) => theme.Fonts.regular}, 'Avenir Next', 'Segoe UI',
    sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.13px;
  line-height: 16px;
`;
