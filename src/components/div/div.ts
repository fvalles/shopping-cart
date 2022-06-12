import styled, { css } from 'styled-components';

/**
 * Types
 */

interface DivProps {
  /** Div display property */
  display?: string;
  /** Div width. Default value is 100% */
  width?: string;
  /** Div justify-content property */
  justifyContent?: string;
}

/**
 * Div
 */

export const Div = styled.div<DivProps>`
  ${({ display }) =>
    display &&
    css`
      display: ${display};
    `}
  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
  width: ${({ width = '100%' }) => width};
`;
