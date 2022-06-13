import styled, { css } from 'styled-components';
import { TypographyProps } from './common';

export const ListItemMedium = styled.span<TypographyProps>`
  color: ${({ color = 'summaryText', theme }) => theme.Colors[color]};
  font-family: ${({ theme }) => theme.Fonts.light}, 'Avenir Next', 'Segoe UI',
    sans-serif;
  font-size: 16px;
  ${({ fontWeight }) =>
    fontWeight &&
    css`
      font-weight: ${fontWeight};
    `}
  line-height: 17px;
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
`;
