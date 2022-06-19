import {
  ButtonType,
  ProductCode,
} from '@screens/shopping-cart/components/product/types';
import { PRODUCTS } from '@screens/shopping-cart/helpers';
import { act, renderHook } from '@testing-library/react';
import { Checkout } from '../../checkout';
import { useProducts } from '../use-products';

describe('useProducts hook', () => {
  it('should be able to add and subtract products from cart', () => {
    const checkout = new Checkout();

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

  it('should be able to calculate total cost and quantity', () => {
    const checkout = new Checkout();
    const { result } = renderHook(() => useProducts(checkout));

    const mockedCapPrice = 5;
    const mockedMugPrice = 8;
    const mockedShirtPrice = 10;

    PRODUCTS.forEach((product, index) => {
      if (product.productCode === ProductCode.CAP) {
        PRODUCTS[index].price = mockedCapPrice;
      }
      if (product.productCode === ProductCode.MUG) {
        PRODUCTS[index].price = mockedMugPrice;
      }
      if (product.productCode === ProductCode.SHIRT) {
        PRODUCTS[index].price = mockedShirtPrice;
      }
    });

    act(() => {
      result.current.handleProductQuantityButtonClick(
        ButtonType.ADD,
        ProductCode.CAP,
      );
      result.current.handleProductQuantityButtonClick(
        ButtonType.ADD,
        ProductCode.MUG,
      );
      result.current.handleProductQuantityButtonClick(
        ButtonType.ADD,
        ProductCode.SHIRT,
      );
    });

    expect(result.current.summaryItems.totalQuantity).toBe(3);
    expect(result.current.summaryItems.totalCost).toBe(
      mockedCapPrice + mockedMugPrice + mockedShirtPrice,
    );
  });
});
