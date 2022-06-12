import React, { Fragment, FunctionComponent } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/button';
import { ProductTitle } from './components/product-title';
import { Separator } from '../../components/separator';
import { Spacer } from '../../components/spacer';
import { H1 } from '../../components/typography';
import capImage from '../../assets/images/products/cap.png';
import mugImage from '../../assets/images/products/mug.png';
import shirtImage from '../../assets/images/products/shirt.png';
import { Product, ProductProps as ProductType } from './components/product';

/**
 * Constants
 */

const PRODUCT_TITLES = ['Product Details', 'Quantity', 'Price', 'Total'];

const PRODUCTS: ProductType[] = [
  {
    imageSource: shirtImage,
    name: 'Shirt',
    price: 20,
    productCode: 'X7R2OPX',
  },
  {
    imageSource: mugImage,
    name: 'Mug',
    price: 5,
    productCode: 'X2G2OPZ',
  },
  {
    imageSource: capImage,
    name: 'Cap',
    price: 10,
    productCode: 'X3W2OPY',
  },
];

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

const LiRow = styled.li`
  display: flex;
  flex-flow: row nowrap;
`;

/**
 * ShoppingCart
 */

export const ShoppingCart: FunctionComponent = () => (
  <Main>
    <Section>
      <H1>Shopping cart</H1>
      <Spacer size={16} />
      <Separator />
      <Spacer size={32} />
      <ul>
        <LiRow>
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
              <LiRow>
                <Product
                  imageSource={imageSource}
                  name={name}
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
      <Button onClick={() => {}} title="Checkout" />
    </Aside>
  </Main>
);
