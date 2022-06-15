import React, { FunctionComponent } from 'react';
import {
  ListItemBig,
  ListItemMedium,
  ListItemSmall,
  Span,
} from '../typography';

/**
 * Constants
 */

const MARGIN_LEFT = '0px 0px 0px 4px';
const SMALL_MARGIN_LEFT = '0px 0px 0px 2px';

/**
 * Types
 */

export enum TypographyType {
  LIST_ITEM_BIG = 'LIST_ITEM_BIG',
  LIST_ITEM_MEDIUM = 'LIST_ITEM_MEDIUM',
  LIST_ITEM_SMALL = 'LIST_ITEM_SMALL',
  SPAN = 'SPAN',
}

interface MoneyProps {
  /** Amount of money to be displayed */
  amount: number;
  /** Currency being used */
  currency?: string;
  /** Typography type used to render Money component text */
  typographyType: TypographyType;
}

/**
 * Money
 */

export const Money: FunctionComponent<MoneyProps> = ({
  amount,
  currency = '€',
  typographyType,
}) => {
  if (typographyType === TypographyType.LIST_ITEM_BIG) {
    return (
      <ListItemBig fontWeight="bold">
        {amount}
        <ListItemBig fontWeight="bold">{currency}</ListItemBig>
      </ListItemBig>
    );
  }

  if (typographyType === TypographyType.LIST_ITEM_MEDIUM) {
    return (
      <ListItemMedium fontWeight="bold">
        {amount}
        <ListItemMedium fontWeight="bold" margin={MARGIN_LEFT}>
          {currency}
        </ListItemMedium>
      </ListItemMedium>
    );
  }

  if (typographyType === TypographyType.LIST_ITEM_SMALL) {
    return (
      <ListItemSmall fontWeight="bold">
        {amount}
        <ListItemSmall fontWeight="bold" margin={SMALL_MARGIN_LEFT}>
          {currency}
        </ListItemSmall>
      </ListItemSmall>
    );
  }

  return (
    <>
      <Span>{amount}</Span>
      <Span margin={MARGIN_LEFT}>{currency}</Span>
    </>
  );
};
