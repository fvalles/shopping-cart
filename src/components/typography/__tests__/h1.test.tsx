import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { H1 } from '../h1';

describe('h1 component', () => {
  it('should render with default css properties', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <H1>Lorem ipsum</H1>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#212240');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Medium,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '18px');
    expect(result).toHaveStyleRule('letter-spacing', '-0.18px');
    expect(result).toHaveStyleRule('line-height', '24px');
    expect(result).toMatchSnapshot();
  });

  it('should render with custom color white', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <H1 color="white">Lorem ipsum</H1>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#FFFFFF');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Medium,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '18px');
    expect(result).toHaveStyleRule('letter-spacing', '-0.18px');
    expect(result).toHaveStyleRule('line-height', '24px');
    expect(result).toMatchSnapshot();
  });
});
