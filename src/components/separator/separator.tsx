import styled from 'styled-components';
import { TypographyProps } from '../typography/common';

/**
 * Types
 */

interface SeparatorProps extends Pick<TypographyProps, 'color'> {
  height?: number;
}

/**
 * Separator
 */

export const Separator = styled.div<SeparatorProps>`
  height: ${({ height = 1 }) => `${height}px`};
  border-bottom: ${({ color = 'separator', height = 1, theme }) =>
    `${height}px solid ${theme.Colors[color]}`};
`;
