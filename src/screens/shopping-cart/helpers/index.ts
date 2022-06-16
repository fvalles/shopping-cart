import { ProductCode } from '../components/product/types';
import { Discounts, ProductType } from '../types';
import capImagePng from '../../../assets/images/products/cap.png';
import mugImagePng from '../../../assets/images/products/mug.png';
import shirtImagePng from '../../../assets/images/products/shirt.png';
import capImageWebp from '../../../assets/images/products/cap.webp';
import mugImageWebp from '../../../assets/images/products/mug.webp';
import shirtImageWebp from '../../../assets/images/products/shirt.webp';

export const DISCOUNTS: Discounts[] = [
  {
    name: '2x1 Mug offer',
    productCode: ProductCode.MUG,
  },
  {
    name: 'x3 Shirt offer',
    productCode: ProductCode.SHIRT,
  },
  {
    name: 'Promo code',
  },
];

export const PRODUCTS: ProductType[] = [
  {
    imageSourcePng: capImagePng,
    imageSourceWebp: capImageWebp,
    name: 'Cap',
    price: 10,
    productCode: ProductCode.CAP,
  },
  {
    imageSourcePng: mugImagePng,
    imageSourceWebp: mugImageWebp,
    name: 'Mug',
    price: 5,
    productCode: ProductCode.MUG,
  },
  {
    imageSourcePng: shirtImagePng,
    imageSourceWebp: shirtImageWebp,
    name: 'Shirt',
    price: 20,
    productCode: ProductCode.SHIRT,
  },
];

export const PRODUCT_TITLES = ['Product Details', 'Quantity', 'Price', 'Total'];

export const getElementWidth = (index: number): string => {
  if (index === 0) {
    return '45%';
  }
  if (index === 3) {
    return '15%';
  }
  return '20%';
};

export const getJustifyContent = (index: number): string | undefined =>
  index === 0 ? undefined : 'center';
