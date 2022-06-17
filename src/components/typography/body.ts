import styled from 'styled-components';
import { TypographyProps } from './common';

export const Body = styled.p<TypographyProps>`
  color: ${({ color = 'body', theme }) => theme.Colors[color]};
  font-family: ${({ theme }) => theme.Fonts.regular}, 'Avenir Next', 'Segoe UI',
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 18px;
`;
