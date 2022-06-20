import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Checkout } from './checkout';
import { ShoppingCartDetail } from './components/shopping-cart-detail';
import { OrderSummary } from './components/order-summary';
import { useProducts } from './hooks/use-products';
import { PRICING_RULES } from './helpers';

/**
 * Constants
 */

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
