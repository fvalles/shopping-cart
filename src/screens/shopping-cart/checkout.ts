import { ProductCode } from './components/product/types';
import { PRODUCTS } from './helpers';
import { ProductsDiscounts, SummaryItems } from './types';

export class Checkout {
  /**
   * Scans a product adding it to the current cart.
   * @param code The product identifier
   * @returns itself to allow function chaining
   */
  scan(code: ProductCode): this {
    const productQuantity =
      JSON.parse(localStorage.getItem(code) as string) || 0;
    localStorage.setItem(code, JSON.stringify(productQuantity + 1));
    return this;
  }

  /**
   * Remove a product from the current cart.
   * @param code The product identifier
   * @returns itself to allow function chaining
   */
  remove(code: ProductCode): this {
    const productQuantity =
      JSON.parse(localStorage.getItem(code) as string) || 0;
    localStorage.setItem(code, JSON.stringify(productQuantity - 1));
    return this;
  }

  /**
   * Returns the value of all cart products with the discounts applied.
   */
  total(): number {
    const totalPrice = PRODUCTS.reduce((total, { price, productCode }) => {
      const productQuantity =
        JSON.parse(localStorage.getItem(productCode) as string) || 0;

      if (productCode === ProductCode.MUG && productQuantity >= 2) {
        const mugDiscount = Math.floor(productQuantity / 2) * price;
        return total + productQuantity * price - mugDiscount;
      }

      if (productCode === ProductCode.SHIRT && productQuantity >= 3) {
        const shirtDiscount = productQuantity * price * 0.05;
        return total + productQuantity * price - shirtDiscount;
      }

      return total + productQuantity * price;
    }, 0);

    return totalPrice;
  }

  /**
   * Returns the discounts being applied to the shopping cart.
   */
  getProductDiscounts(): ProductsDiscounts {
    return PRODUCTS.reduce(
      (total, { price, productCode }) => {
        const productQuantity =
          JSON.parse(localStorage.getItem(productCode) as string) || 0;

        if (productCode === ProductCode.MUG && productQuantity >= 2) {
          const mugDiscount = Math.floor(productQuantity / 2) * price;
          return {
            ...total,
            [ProductCode.MUG]: mugDiscount,
          };
        }

        if (productCode === ProductCode.SHIRT && productQuantity >= 3) {
          const shirtDiscount = price * 0.05;
          return {
            ...total,
            [ProductCode.SHIRT]: shirtDiscount * productQuantity,
          };
        }

        return {
          ...total,
        };
      },
      {
        [ProductCode.CAP]: 0,
        [ProductCode.MUG]: 0,
        [ProductCode.SHIRT]: 0,
      },
    );
  }

  /**
   * Returns the total quantity and cost of items added to the shopping cart.
   */
  getSummaryItems(): SummaryItems {
    return PRODUCTS.reduce(
      (total, { price, productCode }) => {
        const productQuantity =
          JSON.parse(localStorage.getItem(productCode) as string) || 0;

        return {
          totalQuantity: total.totalQuantity + productQuantity,
          totalCost: total.totalCost + productQuantity * price,
        };
      },
      {
        totalQuantity: 0,
        totalCost: 0,
      },
    );
  }
}
