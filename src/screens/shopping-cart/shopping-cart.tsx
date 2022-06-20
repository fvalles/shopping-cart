import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Checkout } from './checkout';
import { ShoppingCartDetail } from './components/shopping-cart-detail';
import { OrderSummary } from './components/order-summary';
import { useProducts } from './hooks/use-products';
import { DiscountType, PricingRules } from './types';
import { ProductCode } from './components/product/types';

/**
 * Constants
 */

const PRICING_RULES: PricingRules[] = [
  {
    count: 2,
    discount: 0.5,
    productCode: ProductCode.MUG,
    discountType: DiscountType.TWO_FOR_ONE,
  },
  {
    count: 3,
    discount: 0.05,
    productCode: ProductCode.SHIRT,
    discountType: DiscountType.BULK_DISCOUNT,
  },
];

const checkout = new Checkout(PRICING_RULES);

/**
 * Styled Components
 */

const Main = styled.main`
  background-color: ${({ theme }) => theme.Colors.white};
  border-radius: 4px;
  display: flex;
  height: calc(100% - 64px);
  left: 50%;
  max-height: 648px;
  max-width: 1088px;
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 64px);
`;

/**
 * ShoppingCart
 */

export const ShoppingCart: FunctionComponent = () => {
  const {
    handleProductQuantityButtonClick,
    productsDiscounts,
    productsQuantity,
    summaryItems,
    totalPrice,
  } = useProducts(checkout);

  return (
    <Main>
      <ShoppingCartDetail
        onProductQuantityButtonClick={handleProductQuantityButtonClick}
        productsQuantity={productsQuantity}
      />
      <OrderSummary
        productsDiscounts={productsDiscounts}
        summaryItems={summaryItems}
        totalPrice={totalPrice}
      />
    </Main>
  );
};
