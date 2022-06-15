import { useEffect, useState } from 'react';
import { Checkout } from '../checkout';
import { ButtonType, ProductCode } from '../components/product/types';
import { ProductsDiscounts, ProductsQuantity, SummaryItems } from '../types';

/**
 * Types
 */

interface ProductsHookResponse {
  handleProductQuantityButtonClick: (
    type: ButtonType,
    productCode: ProductCode,
  ) => void;
  productsDiscounts: ProductsDiscounts;
  productsQuantity: ProductsQuantity;
  summaryItems: SummaryItems;
  totalPrice: number;
}

/**
 * useProducts custom hook
 */

export const useProducts = (checkout: Checkout): ProductsHookResponse => {
  const { getProductDiscounts, getSummaryItems, remove, scan, total } =
    checkout;

  const [productsQuantity, setProductsQuantity] = useState<ProductsQuantity>({
    [ProductCode.CAP]: 0,
    [ProductCode.MUG]: 0,
    [ProductCode.SHIRT]: 0,
  });
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [summaryItems, setSummaryItems] = useState<SummaryItems>({
    totalQuantity: 0,
    totalCost: 0,
  });
  const [productsDiscounts, setProductsDiscounts] = useState<ProductsDiscounts>(
    {
      [ProductCode.CAP]: 0,
      [ProductCode.MUG]: 0,
      [ProductCode.SHIRT]: 0,
    },
  );

  /** In the first render, set state variables to reflect localStorage saved values */
  useEffect(() => {
    setProductsQuantity({
      [ProductCode.CAP]:
        JSON.parse(localStorage.getItem(ProductCode.CAP) as string) || 0,
      [ProductCode.MUG]:
        JSON.parse(localStorage.getItem(ProductCode.MUG) as string) || 0,
      [ProductCode.SHIRT]:
        JSON.parse(localStorage.getItem(ProductCode.SHIRT) as string) || 0,
    });
    setTotalPrice(total());
    setSummaryItems(getSummaryItems());
    setProductsDiscounts(getProductDiscounts());
  }, []);

  const handleProductQuantityButtonClick = (
    type: ButtonType,
    productCode: ProductCode,
  ): void => {
    if (type === ButtonType.ADD) {
      scan(productCode);
      setProductsQuantity({
        ...productsQuantity,
        [productCode]: productsQuantity[productCode] + 1,
      });
    } else if (productsQuantity[productCode] !== 0) {
      remove(productCode);
      setProductsQuantity({
        ...productsQuantity,
        [productCode]: productsQuantity[productCode] - 1,
      });
    }
    setTotalPrice(total());
    setSummaryItems(getSummaryItems());
    setProductsDiscounts(getProductDiscounts());
  };

  return {
    handleProductQuantityButtonClick,
    productsDiscounts,
    productsQuantity,
    summaryItems,
    totalPrice,
  };
};
