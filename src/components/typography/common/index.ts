import { css } from 'styled-components';
import { KeyColors } from '../../../core/theme/colors';

/**
 * Types
 */

export interface TypographyProps {
  /** Text color */
  color?: KeyColors;
  /** Font Weight */
  fontWeight?: string;
  /** Text margin */
  margin?: string;
}

/**
 * Constants
 */

export const listItemBaseStyles = css<TypographyProps>`
  ${({ color = 'summaryText', fontWeight = 'normal', margin = 0, theme }) => `
    color: ${theme.Colors[color]};
    font-family: ${theme.Fonts.light}, 'Avenir Next', 'Segoe UI',
      sans-serif;
    font-weight: ${fontWeight};
    margin: ${margin};
`}
`;
