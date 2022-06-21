import { ProductCode } from '../components/product/types';
import { DiscountType, PricingRules, ProductType } from '../types';
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

/**
 * Constants
 */

export const PRICING_RULES: PricingRules[] = [
  {
    count: 2,
    discount: 0.5,
    productCode: ProductCode.MUG,
    discountType: DiscountType.TWO_FOR_ONE,
  },
  {
    count: 3,
    discount: 0.05,
    productCode: ProductCode.SHIRT,
    discountType: DiscountType.BULK_DISCOUNT,
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

/**
 * Functions
 */

export const isDiscountApplicable = (
  discountType: DiscountType,
  productQuantity: number,
  productPricingRules?: PricingRules,
): boolean =>
  productPricingRules?.discountType === discountType &&
  productQuantity >= productPricingRules.count;

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

export const getStorageProductQuantity = (productCode: ProductCode): number =>
  (JSON.parse(localStorage.getItem(productCode) as string) as number) || 0;

export const setStorageProductQuantity = (
  productCode: ProductCode,
  productQuantity: number,
  operation: string,
): void => {
  if (operation === 'ADD') {
    localStorage.setItem(productCode, JSON.stringify(productQuantity + 1));
  } else if (operation === 'REMOVE') {
    localStorage.setItem(productCode, JSON.stringify(productQuantity - 1));
  }
};
