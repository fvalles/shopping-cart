import { ProductCode, ProductProps } from './components/product/types';

export interface Discounts {
  name: string;
  productCode?: ProductCode;
}

export interface ProductType
  extends Omit<ProductProps, 'onQuantityButtonClick' | 'quantity'> {}

export type ProductsQuantity = Record<ProductCode, number>;

export type ProductsDiscounts = ProductsQuantity;

export interface SummaryItems {
  totalQuantity: number;
  totalCost: number;
}
