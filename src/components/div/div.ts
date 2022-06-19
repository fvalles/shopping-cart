import styled, { css } from 'styled-components';

/**
 * Types
 */

interface DivProps {
  /** Div align items property. Default is set to 'center' */
  alignItems?: string;
  /** Div display property */
  display?: string;
  /** Div margin */
  margin?: string;
  /** Div width. Default value is 100% */
  width?: string;
  /** Div justify-content property */
  justifyContent?: string;
}

/**
 * Div
 */

export const Div = styled.div<DivProps>`
  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}
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
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
  width: ${({ width = '100%' }) => width};
`;
