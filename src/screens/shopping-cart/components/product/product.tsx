import React, { FunctionComponent } from 'react';
import { ProductDetails } from '../product-details';

/**
 * Types
 */

export interface ProductProps {
  /** Product image path */
  imageSource: string;
  /** Product name to be displayed */
  name: string;
  /** Product price */
  price: number;
  /** Product code */
  productCode: string;
}

/**
 * Product
 */

export const Product: FunctionComponent<ProductProps> = ({
  imageSource,
  name,
  productCode,
}) => (
  <ProductDetails
    imageSource={imageSource}
    name={name}
    productCode={productCode}
  />
);
