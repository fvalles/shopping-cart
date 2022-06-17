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
  /** Product Png image path */
  imageSourcePng: string;
  /** Product WebP image path */
  imageSourceWebp: string;
  /** Product Png image path for modal */
  modalImageSourcePng: string;
  /** Product WebP image path for modal */
  modalImageSourceWebp: string;
  /** Product name to be displayed */
  name: string;
  /** Function that will add or remove one product element from the shopping cart when the quantity button is clicked */
  onQuantityButtonClick: (type: ButtonType, productCode: ProductCode) => void;
  /** Product quantity */
  quantity: number;
  /** Product price */
  price: number;
  /** Product code */
  productCode: ProductCode;
}
