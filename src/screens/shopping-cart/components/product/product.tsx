import React, { FunctionComponent, useState } from 'react';
import { Div } from '../../../../components/div';
import { Money } from '../../../../components/money';
import { TypographyType } from '../../../../components/money/money';
import { getElementWidth } from '../../helpers';
import { ProductDetails } from '../product-details';
import { Quantity } from '../quantity';

/**
 * Types
 */

export enum ButtonType {
  ADD = 'ADD',
  SUBTRACT = 'SUBTRACT',
}

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
  price,
  productCode,
}) => {
  const [quantity, setQuantity] = useState<number>(0);

  const handleQuantityButtonClick = (type: ButtonType): void => {
    if (type === ButtonType.ADD) {
      setQuantity(quantity + 1);
    } else if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
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
