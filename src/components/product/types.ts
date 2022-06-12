export interface ProductDetails {
  /** Product image path */
  imageSource: string;
  /** Product name to be displayed */
  name: string;
  /** Product price */
  price: number;
  /** Product code */
  productCode: string;
}

export interface ProductProps extends Omit<ProductDetails, 'price'> {}
