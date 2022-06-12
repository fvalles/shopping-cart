import styled from 'styled-components';
import { TypographyProps } from './common';

export const H3 = styled.h3<TypographyProps>`
  color: ${({ color = 'productTitle', theme }) => theme.Colors[color]};
  font-family: ${({ theme }) => theme.Fonts.light}, 'Avenir Next', 'Segoe UI',
    sans-serif;
  font-size: 10px;
  letter-spacing: 1px;
  line-height: 16px;
`;
