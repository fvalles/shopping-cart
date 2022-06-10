import styled from 'styled-components';
import { TypographyProps } from './common';

export const ListItemSmall = styled.span<TypographyProps>`
  color: ${({ color = 'summaryText', theme }) => theme.Colors[color]};
  font-family: ${({ theme }) => theme.Fonts.regular}, 'Avenir Next', 'Segoe UI',
    sans-serif;
  font-size: 14px;
  line-height: 17px;
`;
