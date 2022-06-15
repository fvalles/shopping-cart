import styled from 'styled-components';
import { listItemBaseStyles, TypographyProps } from './common';

export const ListItemSmall = styled.span<TypographyProps>`
  ${listItemBaseStyles};
  font-size: 14px;
  line-height: 17px;
`;
