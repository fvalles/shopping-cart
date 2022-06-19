import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Span } from '../span';

describe('span component', () => {
  it('should render with default css properties', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Span>Lorem ipsum</Span>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#000000');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Regular,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '16px');
    expect(result).toHaveStyleRule('line-height', '1');
    expect(result).toMatchSnapshot();
  });

  it('should render with custom white color and 20px margin', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Span color="white" margin="20px">
            Lorem ipsum
          </Span>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#FFFFFF');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Regular,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '16px');
    expect(result).toHaveStyleRule('line-height', '1');
    expect(result).toHaveStyleRule('margin', '20px');
    expect(result).toMatchSnapshot();
  });
});
