import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Body } from '../body';

describe('body component', () => {
  it('should render with default css properties', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Body>Lorem ipsum</Body>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#1A1A38');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Regular,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '13px');
    expect(result).toHaveStyleRule('font-weight', '400');
    expect(result).toHaveStyleRule('letter-spacing', '-0.01em');
    expect(result).toHaveStyleRule('line-height', '18px');
    expect(result).toMatchSnapshot();
  });

  it('should render with custom primary color', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Body color="primary">Lorem ipsum</Body>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#7350FF');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Regular,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '13px');
    expect(result).toHaveStyleRule('font-weight', '400');
    expect(result).toHaveStyleRule('letter-spacing', '-0.01em');
    expect(result).toHaveStyleRule('line-height', '18px');
    expect(result).toMatchSnapshot();
  });
});
