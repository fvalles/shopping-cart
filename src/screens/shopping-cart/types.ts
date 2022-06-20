import { ProductCode, ProductProps } from './components/product/types';

export interface Discounts {
  name: string;
  productCode?: ProductCode;
}

export enum DiscountType {
  TWO_FOR_ONE = 'TWO_FOR_ONE',
  BULK_DISCOUNT = 'BULK_DISCOUNT',
}

export interface PricingRules {
  count: number;
  discount: number;
  productCode: ProductCode;
  discountType: DiscountType;
}

export interface ProductType
  extends Omit<ProductProps, 'onQuantityButtonClick' | 'quantity'> {}

export type ProductsQuantity = Record<ProductCode, number>;

export type ProductsDiscounts = ProductsQuantity;

export interface SummaryItems {
  totalQuantity: number;
  totalCost: number;
}
