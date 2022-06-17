import { LiRow } from '@components/li-row';
import { Separator } from '@components/separator';
import { Spacer } from '@components/spacer';
import { H1 } from '@components/typography';
import React, { Fragment, FunctionComponent } from 'react';
import styled from 'styled-components';
import { PRODUCTS, PRODUCT_TITLES } from '../../helpers';
import { ProductsQuantity } from '../../types';
import { Product } from '../product';
import { ProductTitle } from '../product-title';
import { ButtonType, ProductCode } from '../product/types';

/**
 * Types
 */

interface ShoppingCartDetailProps {
  onProductQuantityButtonClick: (
    type: ButtonType,
    productCode: ProductCode,
  ) => void;
  productsQuantity: ProductsQuantity;
}

/**
 * Styled Components
 */

const Section = styled.section`
  flex: 1;
  padding: 40px 32px 40px 56px;
`;

/**
 * Shopping Cart Detail
 */

export const ShoppingCartDetail: FunctionComponent<ShoppingCartDetailProps> = ({
  onProductQuantityButtonClick,
  productsQuantity,
}) => (
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
        (
          {
            imageSourcePng,
            imageSourceWebp,
            modalImageSourcePng,
            modalImageSourceWebp,
            name,
            price,
            productCode,
          },
          productIndex,
        ) => (
          <Fragment key={name}>
            {productIndex !== 0 && <Spacer size={32} />}
            <LiRow flexFlow="row nowrap">
              <Product
                imageSourcePng={imageSourcePng}
                imageSourceWebp={imageSourceWebp}
                modalImageSourcePng={modalImageSourcePng}
                modalImageSourceWebp={modalImageSourceWebp}
                name={name}
                onQuantityButtonClick={onProductQuantityButtonClick}
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
);
