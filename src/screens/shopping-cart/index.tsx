import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/button';
import { ProductTitle } from './components/product-title';
import { Separator } from '../../components/separator';
import { Spacer } from '../../components/spacer';
import { H1, H2, ListItemSmall } from '../../components/typography';
import capImage from '../../assets/images/products/cap.png';
import mugImage from '../../assets/images/products/mug.png';
import shirtImage from '../../assets/images/products/shirt.png';
import { LiRow } from '../../components/li-row';
import { Money } from '../../components/money';
import { TypographyType } from '../../components/money/money';
import { Div } from '../../components/div';
import {
  ButtonType,
  ProductCode,
  ProductProps,
} from './components/product/types';
import { Product } from './components/product';

/**
 * Types
 */

interface Discounts {
  name: string;
  productCode?: ProductCode;
}

interface ProductType
  extends Omit<ProductProps, 'onQuantityButtonClick' | 'quantity'> {}

export type ProductsQuantity = Record<ProductCode, number>;

type ProductsDiscounts = ProductsQuantity;

interface SummaryItems {
  totalQuantity: number;
  totalCost: number;
}

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

const PRODUCTS: ProductType[] = [
  {
    imageSource: capImage,
    name: 'Cap',
    price: 10,
    productCode: ProductCode.CAP,
  },
  {
    imageSource: mugImage,
    name: 'Mug',
    price: 5,
    productCode: ProductCode.MUG,
  },
  {
    imageSource: shirtImage,
    name: 'Shirt',
    price: 20,
    productCode: ProductCode.SHIRT,
  },
];

const PRODUCT_TITLES = ['Product Details', 'Quantity', 'Price', 'Total'];

/**
 * Classes
 */

class Checkout {
  /**
   * Scans a product adding it to the current cart.
   * @param code The product identifier
   * @returns itself to allow function chaining
   */
  scan(code: ProductCode): this {
    const productQuantity =
      JSON.parse(localStorage.getItem(code) as string) || 0;
    localStorage.setItem(code, JSON.stringify(productQuantity + 1));
    return this;
  }

  /**
   * Remove a product from the current cart.
   * @param code The product identifier
   * @returns itself to allow function chaining
   */
  remove(code: ProductCode): this {
    const productQuantity =
      JSON.parse(localStorage.getItem(code) as string) || 0;
    localStorage.setItem(code, JSON.stringify(productQuantity - 1));
    return this;
  }

  /**
   * Returns the value of all cart products with the discounts applied.
   */
  total(): number {
    const totalPrice = PRODUCTS.reduce((total, { price, productCode }) => {
      const productQuantity =
        JSON.parse(localStorage.getItem(productCode) as string) || 0;

      if (productCode === ProductCode.MUG && productQuantity >= 2) {
        const mugDiscount = Math.floor(productQuantity / 2) * price;
        return total + productQuantity * price - mugDiscount;
      }

      if (productCode === ProductCode.SHIRT && productQuantity >= 3) {
        const shirtDiscount = productQuantity * price * 0.05;
        return total + productQuantity * price - shirtDiscount;
      }

      return total + productQuantity * price;
    }, 0);

    return totalPrice;
  }

  /**
   * Returns the discounts being applied to the shopping cart.
   */
  getProductDiscounts(): ProductsDiscounts {
    return PRODUCTS.reduce(
      (total, { price, productCode }) => {
        const productQuantity =
          JSON.parse(localStorage.getItem(productCode) as string) || 0;

        if (productCode === ProductCode.MUG && productQuantity >= 2) {
          const mugDiscount = Math.floor(productQuantity / 2) * price;
          return {
            ...total,
            [ProductCode.MUG]: mugDiscount,
          };
        }

        if (productCode === ProductCode.SHIRT && productQuantity >= 3) {
          const shirtDiscount = price * 0.05;
          return {
            ...total,
            [ProductCode.SHIRT]: shirtDiscount * productQuantity,
          };
        }

        return {
          ...total,
        };
      },
      {
        [ProductCode.CAP]: 0,
        [ProductCode.MUG]: 0,
        [ProductCode.SHIRT]: 0,
      },
    );
  }

  /**
   * Returns the total quantity and cost of items added to the shopping cart.
   */
  getSummaryItems(): SummaryItems {
    return PRODUCTS.reduce(
      (total, { price, productCode }) => {
        const productQuantity =
          JSON.parse(localStorage.getItem(productCode) as string) || 0;

        return {
          totalQuantity: total.totalQuantity + productQuantity,
          totalCost: total.totalCost + productQuantity * price,
        };
      },
      {
        totalQuantity: 0,
        totalCost: 0,
      },
    );
  }
}

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

const Section = styled.section`
  flex: 1;
  padding: 40px 32px 40px 56px;
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
      <Section>
        <H1>Shopping cart</H1>
        <Spacer size={16} />
        <Separator />
        <Spacer size={32} />
        <ul>
          <LiRow flexFlow="row nowrap">
            {PRODUCT_TITLES.map((productTitle, productTitleIndex) => (
              <ProductTitle
                index={productTitleIndex}
                key={productTitle}
                title={productTitle}
                toUpperCase
              />
            ))}
          </LiRow>
        </ul>
        <Spacer size={32} />
        <ul>
          {PRODUCTS.map(
            ({ imageSource, name, price, productCode }, productIndex) => (
              <Fragment key={name}>
                {productIndex !== 0 && <Spacer size={32} />}
                <LiRow flexFlow="row nowrap">
                  <Product
                    imageSource={imageSource}
                    name={name}
                    onQuantityButtonClick={handleQuantityButtonClick}
                    quantity={productsQuantity[productCode]}
                    price={price}
                    productCode={productCode}
                  />
                </LiRow>
              </Fragment>
            ),
          )}
        </ul>
      </Section>
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
