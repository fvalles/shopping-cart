import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { H2 } from '../h2';

describe('h2 component', () => {
  it('should render with default css properties', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <H2>Lorem ipsum</H2>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#717285');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Regular,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '12px');
    expect(result).toHaveStyleRule('font-weight', '300');
    expect(result).toHaveStyleRule('letter-spacing', '0px');
    expect(result).toHaveStyleRule('line-height', '16px');
    expect(result).toMatchSnapshot();
  });

  it('should render with custom primary color', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <H2 color="primary">Lorem ipsum</H2>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#7350FF');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Regular,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '12px');
    expect(result).toHaveStyleRule('font-weight', '300');
    expect(result).toHaveStyleRule('letter-spacing', '0px');
    expect(result).toHaveStyleRule('line-height', '16px');
    expect(result).toMatchSnapshot();
  });
});
