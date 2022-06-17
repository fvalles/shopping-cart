import styled from 'styled-components';

/**
 * Types
 */

interface SpacerProps {
  /** Spacer height. Default value is 16px */
  size?: number;
}

/**
 * Spacer
 */

export const Spacer = styled.div<SpacerProps>`
  height: ${({ size = 16 }) => `${size}px`};
`;
