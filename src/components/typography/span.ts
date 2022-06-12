import styled, { css } from 'styled-components';
import { TypographyProps } from './common';

export const Span = styled.span<TypographyProps>`
  color: ${({ color = 'productPrice', theme }) => theme.Colors[color]};
  font-family: ${({ theme }) => theme.Fonts.regular}, 'Avenir Next', 'Segoe UI',
    sans-serif;
  font-size: 16px;
  line-height: 1;
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
`;
