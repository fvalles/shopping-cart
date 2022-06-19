import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Money, TypographyType } from '../money';

describe('money component', () => {
  it('should render amount and currency inside span component', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Money amount={200} />
        </ThemeProvider>,
      )
      .toJSON();

    const amountComponent = result[0];
    expect(amountComponent).toHaveStyleRule('color', '#000000');
    expect(amountComponent.type).toBe('span');
    expect(amountComponent.children[0]).toBe('200');
    const currencyComponent = result[1];
    expect(currencyComponent).toHaveStyleRule('color', '#000000');
    expect(currencyComponent).toHaveStyleRule('margin', '0px 0px 0px 4px');
    expect(currencyComponent.children[0]).toBe('€');
    expect(result).toMatchSnapshot();
  });

  it('should render amount and currency inside list item big component with custom currency', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Money
            amount={400}
            currency="$"
            typographyType={TypographyType.LIST_ITEM_BIG}
          />
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#212240');
    expect(result).toHaveStyleRule('font-weight', 'bold');
    expect(result).toHaveStyleRule('font-size', '20px');
    expect(result.type).toBe('span');
    expect(result.children[0]).toBe('400');
    const currencyComponent = result.children[1];
    expect(currencyComponent).toHaveStyleRule('margin', '0');
    expect(currencyComponent.children[0]).toBe('$');
  });

  it('should render amount and currency inside list item medium component with custom currency', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Money
            amount={400}
            currency="$"
            typographyType={TypographyType.LIST_ITEM_MEDIUM}
          />
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#212240');
    expect(result).toHaveStyleRule('font-weight', 'bold');
    expect(result).toHaveStyleRule('font-size', '16px');
    expect(result.type).toBe('span');
    expect(result.children[0]).toBe('400');
    const currencyComponent = result.children[1];
    expect(currencyComponent).toHaveStyleRule('margin', '0px 0px 0px 4px');
    expect(currencyComponent.children[0]).toBe('$');
  });

  it('should render amount and currency inside list item small component with custom currency', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Money
            amount={600}
            currency="$"
            typographyType={TypographyType.LIST_ITEM_SMALL}
          />
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#212240');
    expect(result).toHaveStyleRule('font-weight', 'bold');
    expect(result).toHaveStyleRule('font-size', '14px');
    expect(result.type).toBe('span');
    expect(result.children[0]).toBe('600');
    const currencyComponent = result.children[1];
    expect(currencyComponent).toHaveStyleRule('margin', '0px 0px 0px 2px');
    expect(currencyComponent.children[0]).toBe('$');
  });
});
