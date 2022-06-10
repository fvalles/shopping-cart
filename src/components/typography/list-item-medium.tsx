import styled from 'styled-components';
import { TypographyProps } from './common';

export const ListItemMedium = styled.span<TypographyProps>`
  color: ${({ color = 'summaryText', theme }) => theme.Colors[color]};
  font-family: ${({ theme }) => theme.Fonts.regular}, 'Avenir Next', 'Segoe UI',
    sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 17px;
`;
