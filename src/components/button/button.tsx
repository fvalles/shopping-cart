import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { ButtonText } from '../typography';

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.Colors.primary};
  border-radius: 4px;
  padding-bottom: 16px;
  padding-top: 16px;
  width: 100%;
`;

interface ButtonProps {
  title: string;
}

export const Button: FunctionComponent<ButtonProps> = ({ title }) => (
  <StyledButton>
    <ButtonText>{title}</ButtonText>
  </StyledButton>
);
