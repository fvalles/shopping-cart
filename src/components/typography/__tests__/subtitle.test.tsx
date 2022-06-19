import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Subtitle } from '../subtitle';

describe('subtitle component', () => {
  it('should render with default css properties', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Subtitle>Lorem ipsum</Subtitle>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#A6A7B3');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Regular,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '12px');
    expect(result).toHaveStyleRule('font-weight', '400');
    expect(result).toHaveStyleRule('letter-spacing', '0.13px');
    expect(result).toHaveStyleRule('line-height', '16px');
    expect(result).toMatchSnapshot();
  });

  it('should render with custom primary color', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Subtitle color="primary">Lorem ipsum</Subtitle>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#7350FF');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Regular,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '12px');
    expect(result).toHaveStyleRule('font-weight', '400');
    expect(result).toHaveStyleRule('letter-spacing', '0.13px');
    expect(result).toHaveStyleRule('line-height', '16px');
    expect(result).toMatchSnapshot();
  });
});
