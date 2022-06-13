import styled, { css } from 'styled-components';
import { TypographyProps } from './common';

export const ListItemBig = styled.span<TypographyProps>`
  color: ${({ color = 'summaryText', theme }) => theme.Colors[color]};
  font-family: ${({ theme }) => theme.Fonts.light}, 'Avenir Next', 'Segoe UI',
    sans-serif;
  font-size: 20px;
  ${({ fontWeight }) =>
    fontWeight &&
    css`
      font-weight: ${fontWeight};
    `}
  line-height: 25px;
`;
