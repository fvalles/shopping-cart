import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { H3 } from '../h3';

describe('h3 component', () => {
  it('should render with default css properties', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <H3>Lorem ipsum</H3>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#A6A7B3');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Light,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '10px');
    expect(result).toHaveStyleRule('letter-spacing', '1px');
    expect(result).toHaveStyleRule('line-height', '16px');
    expect(result).toMatchSnapshot();
  });

  it('should render with custom white color', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <H3 color="white">Lorem ipsum</H3>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#FFFFFF');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Light,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '10px');
    expect(result).toHaveStyleRule('letter-spacing', '1px');
    expect(result).toHaveStyleRule('line-height', '16px');
    expect(result).toMatchSnapshot();
  });
});
