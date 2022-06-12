import styled from 'styled-components';

/**
 * Types
 */

interface SpacerProps {
  size?: number;
}

/**
 * Spacer
 */

export const Spacer = styled.div<SpacerProps>`
  height: ${({ size = 16 }) => `${size}px`};
`;
