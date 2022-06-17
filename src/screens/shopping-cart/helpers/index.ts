import { ProductCode } from '../components/product/types';
import { Discounts, ProductType } from '../types';
import capImagePng from '../../../assets/images/products/cap.png';
import capImageWebp from '../../../assets/images/products/cap.webp';
import capModalImagePng from '../../../assets/images/products/cap-for-modal.png';
import capModalImageWebp from '../../../assets/images/products/cap-for-modal.webp';
import mugImagePng from '../../../assets/images/products/mug.png';
import mugImageWebp from '../../../assets/images/products/mug.webp';
import mugModalImagePng from '../../../assets/images/products/mug-for-modal.png';
import mugModalImageWebp from '../../../assets/images/products/mug-for-modal.webp';
import shirtImagePng from '../../../assets/images/products/shirt.png';
import shirtImageWebp from '../../../assets/images/products/shirt.webp';
import shirtModalImagePng from '../../../assets/images/products/shirt-for-modal.png';
import shirtModalImageWebp from '../../../assets/images/products/shirt-for-modal.webp';

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
    modalImageSourcePng: capModalImagePng,
    modalImageSourceWebp: capModalImageWebp,
    name: 'Cap',
    price: 10,
    productCode: ProductCode.CAP,
  },
  {
    imageSourcePng: mugImagePng,
    imageSourceWebp: mugImageWebp,
    modalImageSourcePng: mugModalImagePng,
    modalImageSourceWebp: mugModalImageWebp,
    name: 'Mug',
    price: 5,
    productCode: ProductCode.MUG,
  },
  {
    imageSourcePng: shirtImagePng,
    imageSourceWebp: shirtImageWebp,
    modalImageSourcePng: shirtModalImagePng,
    modalImageSourceWebp: shirtModalImageWebp,
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
