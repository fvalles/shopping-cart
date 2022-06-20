import { ProductCode } from './components/product/types';
import {
  getStorageProductQuantity,
  isDiscountApplicable,
  PRODUCTS,
  setStorageProductQuantity,
} from './helpers';
import {
  DiscountType,
  PricingRules,
  ProductsDiscounts,
  SummaryItems,
} from './types';

export class Checkout {
  pricingRules: PricingRules[];

  constructor(pricingRules: PricingRules[]) {
    this.pricingRules = pricingRules;
  }

  /**
   * Scans a product adding it to the current cart.
   * @param code The product identifier
   * @returns itself to allow function chaining
   */
  scan(code: ProductCode): this {
    const productQuantity = getStorageProductQuantity(code);
    setStorageProductQuantity(code, productQuantity, 'ADD');
    return this;
  }

  /**
   * Remove a product from the current cart.
   * @param code The product identifier
   * @returns itself to allow function chaining
   */
  remove(code: ProductCode): this {
    const productQuantity = getStorageProductQuantity(code);
    setStorageProductQuantity(code, productQuantity, 'REMOVE');
    return this;
  }

  /**
   * Returns the value of all cart products with the discounts applied.
   */
  total = (): number => {
    const totalPrice = PRODUCTS.reduce((total, { price, productCode }) => {
      const productQuantity = getStorageProductQuantity(productCode);

      const productPricingRules: PricingRules | undefined =
        this.pricingRules.find(
          pricingRule => pricingRule.productCode === productCode,
        );

      if (
        productPricingRules &&
        isDiscountApplicable(
          DiscountType.TWO_FOR_ONE,
          productQuantity,
          productPricingRules,
        )
      ) {
        const twoForOneDiscount =
          Math.floor(productQuantity * productPricingRules.discount) * price;
        return total + productQuantity * price - twoForOneDiscount;
      }

      if (
        productPricingRules &&
        isDiscountApplicable(
          DiscountType.BULK_DISCOUNT,
          productQuantity,
          productPricingRules,
        )
      ) {
        const bulkDiscount =
          productQuantity * price * productPricingRules.discount;
        return total + productQuantity * price - bulkDiscount;
      }

      return total + productQuantity * price;
    }, 0);

    return totalPrice;
  };

  /**
   * Returns the discounts being applied to the shopping cart.
   */
  getProductDiscounts = (): ProductsDiscounts =>
    PRODUCTS.reduce(
      (total, { price, productCode }) => {
        const productQuantity = getStorageProductQuantity(productCode);

        const productPricingRules: PricingRules | undefined =
          this.pricingRules.find(
            pricingRule => pricingRule.productCode === productCode,
          );

        if (
          productPricingRules &&
          isDiscountApplicable(
            DiscountType.TWO_FOR_ONE,
            productQuantity,
            productPricingRules,
          )
        ) {
          const twoForOneDiscount =
            Math.floor(productQuantity * productPricingRules.discount) * price;
          return {
            ...total,
            [productCode]: twoForOneDiscount,
          };
        }

        if (
          productPricingRules &&
          isDiscountApplicable(
            DiscountType.BULK_DISCOUNT,
            productQuantity,
            productPricingRules,
          )
        ) {
          const bulkDiscount = price * productPricingRules.discount;
          return {
            ...total,
            [productCode]: bulkDiscount * productQuantity,
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

  /**
   * Returns the total quantity and cost of items added to the shopping cart.
   */
  getSummaryItems(): SummaryItems {
    return PRODUCTS.reduce(
      (total, { price, productCode }) => {
        const productQuantity = getStorageProductQuantity(productCode);

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
