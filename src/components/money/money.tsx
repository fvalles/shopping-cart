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
      <>
        <ListItemBig>{amount}</ListItemBig>
        <ListItemBig>{currency}</ListItemBig>
      </>
    );
  }

  if (typographyType === TypographyType.LIST_ITEM_MEDIUM) {
    return (
      <>
        <ListItemMedium>{amount}</ListItemMedium>
        <ListItemMedium margin={MARGIN_LEFT}>{currency}</ListItemMedium>
      </>
    );
  }

  if (typographyType === TypographyType.LIST_ITEM_SMALL) {
    return (
      <>
        <ListItemSmall>{amount}</ListItemSmall>
        <ListItemSmall>{currency}</ListItemSmall>
      </>
    );
  }

  return (
    <>
      <Span>{amount}</Span>
      <Span margin={MARGIN_LEFT}>{currency}</Span>
    </>
  );
};
