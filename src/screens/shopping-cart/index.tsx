import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/button';
import { Separator } from '../../components/separator';
import { Spacer } from '../../components/spacer';
import { H1, H2, ListItemSmall } from '../../components/typography';
import { LiRow } from '../../components/li-row';
import { Money } from '../../components/money';
import { TypographyType } from '../../components/money/money';
import { Div } from '../../components/div';
import { ButtonType, ProductCode } from './components/product/types';
import { ProductsDiscounts, ProductsQuantity, SummaryItems } from './types';
import { Checkout } from './checkout';
import { DISCOUNTS } from './helpers';
import { ShoppingCartDetail } from './components/shopping-cart-detail';

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

const Aside = styled.aside`
  background-color: ${({ theme }) => theme.Colors.summaryBackground};
  color: ${({ theme }) => theme.Colors.summaryText};
  display: flex;
  flex-flow: column wrap;
  padding: 40px 32px;
  width: 312px;
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
      <Aside>
        <H1>Order Summary</H1>
        <Spacer size={16} />
        <Separator />
        <Spacer size={32} />
        <ul>
          <LiRow justifyContent="space-between">
            <ListItemSmall>{summaryItems.totalQuantity} items</ListItemSmall>
            <Money
              amount={summaryItems.totalCost}
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
        <Button onClick={() => {}} title="Checkout" />
      </Aside>
    </Main>
  );
};
