/**
 * Types
 */

import styled, { css } from 'styled-components';

interface LiRowProps {
  /** LiRow flex-flow property  */
  flexFlow?: string;
  /** LiRow justify-content property */
  justifyContent?: string;
}

/**
 * LiRow
 */

export const LiRow = styled.li<LiRowProps>`
  display: flex;
  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
  ${({ flexFlow }) =>
    flexFlow &&
    css`
      flex-flow: ${flexFlow};
    `}
`;
