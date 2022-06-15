import { Div } from '@components/div';
import { Money, TypographyType } from '@components/money';
import React, { FunctionComponent } from 'react';

import { getElementWidth } from '../../helpers';
import { ProductDetails } from '../product-details';
import { Quantity } from '../quantity';
import { ButtonType, ProductProps } from './types';

/**
 * Product
 */

export const Product: FunctionComponent<ProductProps> = ({
  imageSource,
  name,
  onQuantityButtonClick,
  quantity,
  price,
  productCode,
}) => {
  const handleQuantityButtonClick = (type: ButtonType): void => {
    onQuantityButtonClick(type, productCode);
  };

  return (
    <>
      <ProductDetails
        imageSource={imageSource}
        name={name}
        productCode={productCode}
      />
      <Quantity quantity={quantity} onClick={handleQuantityButtonClick} />
      <Div display="flex" width={getElementWidth(2)} justifyContent="center">
        <Money amount={price} typographyType={TypographyType.SPAN} />
      </Div>
      <Div display="flex" width={getElementWidth(3)} justifyContent="center">
        <Money amount={price * quantity} typographyType={TypographyType.SPAN} />
      </Div>
    </>
  );
};
