import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { getElementWidth, getJustifyContent } from '../../helpers';
import { Div } from '../../../../components/div';
import { Image } from '../../../../components/image';
import { Title, Subtitle } from '../../../../components/typography';
import { ProductProps } from '../product';

/**
 * Types
 */

export interface ProductDetailsProps extends Omit<ProductProps, 'price'> {}

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
  imageSource,
  name,
  productCode,
}) => (
  <Div
    display="flex"
    justifyContent={getJustifyContent(0)}
    width={getElementWidth(0)}>
    <Figure>
      <Image alt={name} height={72} src={imageSource} width={72} />
      <Div>
        <Title>{name}</Title>
        <Subtitle>{`Product code ${productCode}`}</Subtitle>
      </Div>
    </Figure>
  </Div>
);
