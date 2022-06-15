import styled from 'styled-components';
import { listItemBaseStyles, TypographyProps } from './common';

export const ListItemBig = styled.span<TypographyProps>`
  ${listItemBaseStyles};
  font-size: 20px;
  line-height: 25px;
`;
