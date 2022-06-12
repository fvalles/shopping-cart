import styled from 'styled-components';
import { TypographyProps } from './common';

export const ButtonBig = styled.span<TypographyProps>`
  color: ${({ color = 'primary', theme }) => theme.Colors[color]};
  font-family: ${({ theme }) => theme.Fonts.regular}, 'Avenir Next', 'Segoe UI',
    sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
`;
