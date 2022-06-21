import { ProductCode } from '@screens/shopping-cart/components/product/types';
import { DiscountType, PricingRules } from '@screens/shopping-cart/types';
import { getElementWidth, getJustifyContent, isDiscountApplicable } from '..';

describe('isDiscountApplicable helper function', () => {
  const mockedPricingRules: PricingRules = {
    count: 2,
    discount: 0.5,
    productCode: ProductCode.MUG,
    discountType: DiscountType.TWO_FOR_ONE,
  };

  it('should return false if productPricingRules param is undefined', () => {
    const productQuantity = 1;
    const result = isDiscountApplicable(
      DiscountType.TWO_FOR_ONE,
      productQuantity,
    );
    expect(result).toBeFalsy();
  });

  it('should return false if productPricingRules discount type does not match', () => {
    const productQuantity = 1;
    const result = isDiscountApplicable(
      DiscountType.BULK_DISCOUNT,
      productQuantity,
      mockedPricingRules,
    );
    expect(result).toBeFalsy();
  });

  it('should return false if productPricingRules count is greater than product quantity', () => {
    const productQuantity = 1;
    const result = isDiscountApplicable(
      DiscountType.TWO_FOR_ONE,
      productQuantity,
      mockedPricingRules,
    );
    expect(result).toBeFalsy();
  });

  it('should return true if productPricingRules para mis defined, count is not greater than product quantity and discount type match', () => {
    const productQuantity = 5;
    const result = isDiscountApplicable(
      DiscountType.TWO_FOR_ONE,
      productQuantity,
      mockedPricingRules,
    );
    expect(result).toBeTruthy();
  });
});

describe('getElementWidth helper function', () => {
  it('should return 45% when index param is 0', () => {
    const width = getElementWidth(0);
    expect(width).toBe('45%');
  });

  it('should return 15% when index param is 3', () => {
    const width = getElementWidth(3);
    expect(width).toBe('15%');
  });

  it('should return 20% when index param is 1 or 2', () => {
    const widthOne = getElementWidth(1);
    expect(widthOne).toBe('20%');

    const widthTwo = getElementWidth(2);
    expect(widthTwo).toBe('20%');
  });
});

describe('getJustifyContent helper function', () => {
  it('should return undefined when index param is 0', () => {
    const justifyContent = getJustifyContent(0);
    expect(justifyContent).toBeUndefined();
  });

  it('should return "center" when index param is different from 0', () => {
    const justifyContentOne = getJustifyContent(1);
    expect(justifyContentOne).toBe('center');

    const justifyContentTwo = getJustifyContent(2);
    expect(justifyContentTwo).toBe('center');
  });
});
