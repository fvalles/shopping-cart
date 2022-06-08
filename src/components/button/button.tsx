import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { KeyColors } from '../../core/theme/colors';
import { ButtonText } from '../typography';

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
 * Types
 */

interface StyledButtonProps {
  background?: KeyColors;
}

interface ButtonProps {
  /** Text to be displayed inside the button */
  title: string;
  /** Action to execute when the button is clicked */
  onClick: () => void;
  /** Button background color */
  background?: KeyColors;
  /** Button title color */
  color?: KeyColors;
}

/**
 * Button
 */

export const Button: FunctionComponent<ButtonProps> = ({
  title,
  onClick,
  background,
  color,
}) => (
  <StyledButton background={background} onClick={onClick}>
    <ButtonText color={color}>{title}</ButtonText>
  </StyledButton>
);
