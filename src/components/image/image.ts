import styled from 'styled-components';
import { KeyColors } from '../../core/theme/colors';

/**
 * Types
 */

interface ImageProps {
  /** Image border. If not present, default value is '1px solid' */
  border?: string;
  /** Image border color. If not present, default value is Colors.productImageBorder */
  borderColor?: KeyColors;
  /** Image border radius. If not present, default value is 4px */
  borderRadius?: number;
  /** Image height */
  height: number;
  /** Image margin. If not present, default value is '0px 16px 0px 0px' */
  margin?: string;
  /** Image width */
  width: number;
}

/**
 * Image
 */

export const Image = styled.img<ImageProps>`
  ${({
    border = '1px solid',
    borderColor = 'productImageBorder',
    borderRadius = 4,
    height,
    margin = '0px 16px 0px 0px',
    theme,
    width,
  }) => `
    border: ${border};
    border-color: ${theme.Colors[borderColor]};
    border-radius: ${borderRadius};
    height: ${height};
    margin: ${margin};
    width: ${width};
  `}
`;
