import React, { FunctionComponent } from 'react';
import { Div } from '../div';
import { Span } from '../typography';

/**
 * Types
 */

interface MoneyProps {
  /** Amount of money to be displayed */
  amount: number;
  /** Currency being used */
  currency?: string;
  /** Component wrapper width */
  width: string;
}

/**
 * Money
 */

export const Money: FunctionComponent<MoneyProps> = ({
  amount,
  currency = '€',
  width,
}) => (
  <Div display="flex" width={width} justifyContent="center">
    <Span>{amount}</Span>
    <Span margin="0px 0px 0px 4px">{currency}</Span>
  </Div>
);
