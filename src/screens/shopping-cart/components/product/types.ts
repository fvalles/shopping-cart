export enum ButtonType {
  ADD = 'ADD',
  SUBTRACT = 'SUBTRACT',
}

export enum ProductCode {
  CAP = 'X3W2OPY',
  MUG = 'X2G2OPZ',
  SHIRT = 'X7R2OPX',
}

export interface ProductProps {
  /** Product image path */
  imageSource: string;
  /** Product name to be displayed */
  name: string;
  /**  */
  onQuantityButtonClick: (type: ButtonType, productCode: ProductCode) => void;
  /** Product quantity */
  quantity: number;
  /** Product price */
  price: number;
  /** Product code */
  productCode: ProductCode;
}
