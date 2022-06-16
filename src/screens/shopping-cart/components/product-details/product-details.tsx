import { Div } from '@components/div';
import { Image } from '@components/image';
import { Subtitle, Title } from '@components/typography';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { getElementWidth, getJustifyContent } from '../../helpers';
import { ProductProps } from '../product/types';

/**
 * Types
 */

export interface ProductDetailsProps
  extends Omit<ProductProps, 'price' | 'onQuantityButtonClick' | 'quantity'> {}

/**
 * Styled Components
 */

const Figure = styled.figure`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
`;

/**
 * Product
 */

export const ProductDetails: FunctionComponent<ProductDetailsProps> = ({
  imageSourcePng,
  imageSourceWebp,
  name,
  productCode,
}) => (
  <Div
    display="flex"
    justifyContent={getJustifyContent(0)}
    width={getElementWidth(0)}>
    <Figure>
      {/** Wrap Image component with <picture> html tag to show WebP images if browser supports them.
       * This is better for SEO/SEM and to use lighter image files */}
      <picture>
        <source srcSet={imageSourceWebp} type="image/webp" />
        <Image alt={name} height={72} src={imageSourcePng} width={72} />
      </picture>
      <Div>
        <Title>{name}</Title>
        <Subtitle>{`Product code ${productCode}`}</Subtitle>
      </Div>
    </Figure>
  </Div>
);
