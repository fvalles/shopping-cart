import React, { Fragment, FunctionComponent, useEffect } from 'react';
import { Button } from '@components/button';
import { Div } from '@components/div';
import { LiRow } from '@components/li-row';
import { Money, TypographyType } from '@components/money';
import { Separator } from '@components/separator';
import { Spacer } from '@components/spacer';
import { H1, H2, ListItemSmall } from '@components/typography';
import styled from 'styled-components';
import { useSnackbar } from 'react-simple-snackbar';
import { Discounts, ProductsDiscounts, SummaryItems } from '../../types';
import { ProductCode } from '../product/types';

/**
 * Constants
 */

const DISCOUNTS: Discounts[] = [
  {
    name: '2x1 Mug offer',
    productCode: ProductCode.MUG,
  },
  {
    name: 'x3 Shirt offer',
    productCode: ProductCode.SHIRT,
  },
  {
    name: 'Promo code',
  },
];

export const CURRENCY = '€';

const SNACKBAR_DURATION = 4000;

const SNACKBAR_OPTIONS = {
  style: {
    backgroundColor: 'green',
  },
};

/**
 * Types
 */

interface OrderSummaryProps {
  productsDiscounts: ProductsDiscounts;
  summaryItems: SummaryItems;
  totalPrice: number;
}

/**
 * Styled Components
 */

const Aside = styled.aside`
  background-color: ${({ theme }) => theme.Colors.summaryBackground};
  color: ${({ theme }) => theme.Colors.summaryText};
  display: block;
  flex-flow: column wrap;
  padding: 40px 32px;
  width: 312px;
`;

/**
 * Order Summary
 */

export const OrderSummary: FunctionComponent<OrderSummaryProps> = ({
  productsDiscounts,
  summaryItems: { totalCost, totalQuantity },
  totalPrice,
}) => {
  const [openSnackbar, closeSnackbar] = useSnackbar(SNACKBAR_OPTIONS);

  useEffect(() => {
    const snackbarTimeout = setTimeout(() => {
      closeSnackbar();
    }, SNACKBAR_DURATION);

    return () => {
      clearTimeout(snackbarTimeout);
    };
  }, [openSnackbar]);

  return (
    <Aside>
      <H1>Order Summary</H1>
      <Spacer size={16} />
      <Separator />
      <Spacer size={32} />
      <ul>
        <LiRow justifyContent="space-between">
          <ListItemSmall>{totalQuantity} items</ListItemSmall>
          <Money
            amount={totalCost}
            typographyType={TypographyType.LIST_ITEM_MEDIUM}
          />
        </LiRow>
      </ul>
      <Spacer size={32} />
      <Separator />
      <Spacer size={24} />
      <Div>
        <H2>DISCOUNTS</H2>
        <Spacer />
        <ul>
          {DISCOUNTS.map(({ name, productCode }, discountIndex) => (
            <Fragment key={name}>
              <LiRow justifyContent="space-between">
                <ListItemSmall>{name}</ListItemSmall>
                <Money
                  amount={productCode ? -productsDiscounts[productCode] : 0}
                  typographyType={TypographyType.LIST_ITEM_SMALL}
                />
              </LiRow>
              {DISCOUNTS.length - 1 !== discountIndex && <Spacer size={20} />}
            </Fragment>
          ))}
        </ul>
      </Div>
      <Spacer size={24} />
      <Separator />
      <Spacer size={161} />
      <Separator />
      <Spacer size={16} />
      <Div>
        <ul>
          <LiRow justifyContent="space-between">
            <ListItemSmall>TOTAL COST</ListItemSmall>
            <Money
              amount={totalPrice}
              typographyType={TypographyType.LIST_ITEM_BIG}
            />
          </LiRow>
        </ul>
      </Div>
      <Spacer size={22} />
      <Button
        disabled={!totalQuantity}
        onClick={() =>
          openSnackbar(
            totalQuantity > 1
              ? `Your ${totalQuantity} selected items with a total cost of ${totalPrice}${CURRENCY} are ready to be purchased!`
              : `Your ${totalQuantity} selected item with a total cost of ${totalPrice}${CURRENCY} is ready to be purchased!`,
          )
        }
        testId="order-summary-checkout-button"
        title="Checkout"
      />
    </Aside>
  );
};
