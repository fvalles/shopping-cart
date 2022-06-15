import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { KeyColors } from '../../core/theme/colors';
import { ButtonSmall } from '../typography';

/**
 * Types
 */

interface StyledButtonProps {
  background?: KeyColors;
}

interface ButtonProps {
  /** Button background color */
  background?: KeyColors;
  /** Button title color */
  color?: KeyColors;
  /** When disabled prop is true, the button is not clickable and its background color changes to grey */
  disabled?: boolean;
  /** Action to execute when the button is clicked */
  onClick: () => void;
  /** Text to be displayed inside the button */
  title: string;
}

/**
 * Styled Components
 */

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ background = 'primary', theme }) =>
    theme.Colors[background]};
  border-radius: 4px;
  padding-bottom: 16px;
  padding-top: 16px;
  width: 100%;
`;

/**
 * Button
 */

export const Button: FunctionComponent<ButtonProps> = ({
  background,
  color,
  disabled,
  onClick,
  title,
}) => (
  <StyledButton
    background={disabled ? 'disabled' : background}
    disabled={disabled}
    onClick={onClick}>
    <ButtonSmall color={color}>{title}</ButtonSmall>
  </StyledButton>
);
