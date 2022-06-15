import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ButtonType, ProductCode } from './components/product/types';
import { ProductsDiscounts, ProductsQuantity, SummaryItems } from './types';
import { Checkout } from './checkout';
import { ShoppingCartDetail } from './components/shopping-cart-detail';
import { OrderSummary } from './components/order-summary';

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

const { getProductDiscounts, getSummaryItems, remove, scan, total } =
  new Checkout();

export const ShoppingCart: FunctionComponent = () => {
  const [productsQuantity, setProductsQuantity] = useState<ProductsQuantity>({
    [ProductCode.CAP]: 0,
    [ProductCode.MUG]: 0,
    [ProductCode.SHIRT]: 0,
  });
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [summaryItems, setSummaryItems] = useState<SummaryItems>({
    totalQuantity: 0,
    totalCost: 0,
  });
  const [productsDiscounts, setProductsDiscounts] = useState<ProductsDiscounts>(
    {
      [ProductCode.CAP]: 0,
      [ProductCode.MUG]: 0,
      [ProductCode.SHIRT]: 0,
    },
  );

  useEffect(() => {
    setProductsQuantity({
      [ProductCode.CAP]:
        JSON.parse(localStorage.getItem(ProductCode.CAP) as string) || 0,
      [ProductCode.MUG]:
        JSON.parse(localStorage.getItem(ProductCode.MUG) as string) || 0,
      [ProductCode.SHIRT]:
        JSON.parse(localStorage.getItem(ProductCode.SHIRT) as string) || 0,
    });
    setTotalPrice(total());
    setSummaryItems(getSummaryItems());
    setProductsDiscounts(getProductDiscounts());
  }, []);

  const handleQuantityButtonClick = (
    type: ButtonType,
    productCode: ProductCode,
  ): void => {
    if (type === ButtonType.ADD) {
      scan(productCode);
      setProductsQuantity({
        ...productsQuantity,
        [productCode]: productsQuantity[productCode] + 1,
      });
    } else if (productsQuantity[productCode] !== 0) {
      remove(productCode);
      setProductsQuantity({
        ...productsQuantity,
        [productCode]: productsQuantity[productCode] - 1,
      });
    }
    setTotalPrice(total());
    setSummaryItems(getSummaryItems());
    setProductsDiscounts(getProductDiscounts());
  };

  return (
    <Main>
      <ShoppingCartDetail
        onQuantityButtonClick={handleQuantityButtonClick}
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
