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
  extends Pick<
    ProductProps,
    'imageSourcePng' | 'imageSourceWebp' | 'name' | 'productCode'
  > {
  onProductDetailsClick: () => void;
}

/**
 * Styled Components
 */

const Button = styled.button`
  background-color: ${({ theme }) => theme.Colors.white};
`;

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
  onProductDetailsClick,
  productCode,
}) => (
  <Div
    display="flex"
    justifyContent={getJustifyContent(0)}
    width={getElementWidth(0)}>
    <Figure>
      <Button onClick={onProductDetailsClick} type="button">
        {/** I wrap Image component with <picture> html tag to show WebP images if browser supports them.
         * This is better for SEO/SEM and to use lighter image files */}
        <picture>
          <source srcSet={imageSourceWebp} type="image/webp" />
          <Image alt={name} height={72} src={imageSourcePng} width={72} />
        </picture>
      </Button>
      <Div>
        <Title>{name}</Title>
        <Subtitle>{`Product code ${productCode}`}</Subtitle>
      </Div>
    </Figure>
  </Div>
);
