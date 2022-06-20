import React, { FunctionComponent } from 'react';
import { Div } from '@components/div';
import { ButtonBig } from '@components/typography';
import styled from 'styled-components';
import { getElementWidth, getJustifyContent } from '../../helpers';
import { ButtonType } from '../product/types';

/**
 * Types
 */

interface QuantityProps {
  /** Function to be called when an add or subtract button is clicked */
  onClick: (type: ButtonType) => void;
  /** Product quantity to be rendered inside input element */
  quantity: number;
  /** String testId that renders a data-testid attribute in the DOM, used for testing. */
  testId: string;
}

/**
 * Styled Components
 */

const Button = styled.button`
  background: ${({ theme }) => theme.Colors.white};
  border: none;
  color: ${({ theme }) => theme.Colors.primary};
  font-weight: bold;
  height: 40px;
  padding: 0 8px;
`;

const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.Colors.productQuantity};
  border-radius: 4px;
  font-size: 14px;
  height: 40px;
  line-height: 17px;
  text-align: center;
  width: 40px;
`;

/**
 * Quantity
 */

export const Quantity: FunctionComponent<QuantityProps> = ({
  onClick,
  quantity,
  testId,
}) => (
  <Div
    alignItems="center"
    display="flex"
    width={getElementWidth(1)}
    justifyContent={getJustifyContent(1)}>
    <Button
      data-testid={`${testId}-subtract-button`}
      onClick={() => onClick(ButtonType.SUBTRACT)}>
      <ButtonBig>-</ButtonBig>
    </Button>
    <Input min="0" type="number" value={quantity} readOnly />
    <Button
      data-testid={`${testId}-add-button`}
      onClick={() => onClick(ButtonType.ADD)}>
      <ButtonBig>+</ButtonBig>
    </Button>
  </Div>
);
