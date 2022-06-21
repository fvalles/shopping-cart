import {
  ButtonType,
  ProductCode,
} from '@screens/shopping-cart/components/product/types';
import { PRODUCTS } from '@screens/shopping-cart/helpers';
import { DiscountType, PricingRules } from '@screens/shopping-cart/types';
import { act, renderHook } from '@testing-library/react';
import { Checkout } from '../../checkout';
import { useProducts } from '../use-products';

const mockedPricingRules: PricingRules[] = [
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

describe('useProducts hook', () => {
  it('should be able to add and subtract products from cart', () => {
    const checkout = new Checkout(mockedPricingRules);

    const { result } = renderHook(() => useProducts(checkout));
    expect(result.current.productsQuantity[ProductCode.CAP]).toBe(0);

    act(() =>
      result.current.handleProductQuantityButtonClick(
        ButtonType.ADD,
        ProductCode.CAP,
      ),
    );
    expect(result.current.productsQuantity[ProductCode.CAP]).toBe(1);

    act(() =>
      result.current.handleProductQuantityButtonClick(
        ButtonType.SUBTRACT,
        ProductCode.CAP,
      ),
    );
    expect(result.current.productsQuantity[ProductCode.CAP]).toBe(0);
  });

  it('should be able to calculate total cost and quantity, apply products discounts and calculate total price', () => {
    const checkout = new Checkout(mockedPricingRules);
    const { result } = renderHook(() => useProducts(checkout));

    const mockedMugPrice = 8;
    const mockedShirtPrice = 10;

    PRODUCTS.forEach((product, index) => {
      if (product.productCode === ProductCode.MUG) {
        PRODUCTS[index].price = mockedMugPrice;
      }
      if (product.productCode === ProductCode.SHIRT) {
        PRODUCTS[index].price = mockedShirtPrice;
      }
    });

    act(() => {
      // eslint-disable-next-line no-plusplus
      for (let count = 0; count < 5; count++) {
        if (count === 0 || count === 1) {
          result.current.handleProductQuantityButtonClick(
            ButtonType.ADD,
            ProductCode.MUG,
          );
        } else {
          result.current.handleProductQuantityButtonClick(
            ButtonType.ADD,
            ProductCode.SHIRT,
          );
        }
      }
    });

    expect(result.current.summaryItems.totalQuantity).toBe(5);
    expect(result.current.summaryItems.totalCost).toBe(
      mockedMugPrice * 2 + mockedShirtPrice * 3,
    );

    expect(result.current.productsDiscounts[ProductCode.MUG]).toBe(8);
    expect(result.current.productsDiscounts[ProductCode.SHIRT]).toBe(1.5);
    expect(result.current.totalPrice).toBe(
      result.current.summaryItems.totalCost - 8 - 1.5,
    );
  });
});
