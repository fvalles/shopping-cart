import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ButtonBig } from '../button-big';

describe('button big component', () => {
  it('should render with default css properties', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <ButtonBig>Lorem ipsum</ButtonBig>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#7350FF');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Regular,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '20px');
    expect(result).toHaveStyleRule('font-weight', 'bold');
    expect(result).toHaveStyleRule('line-height', '25px');
    expect(result).toMatchSnapshot();
  });

  it('should render with custom summaryText color', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <ButtonBig color="summaryText">Lorem ipsum</ButtonBig>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#212240');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Regular,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '20px');
    expect(result).toHaveStyleRule('font-weight', 'bold');
    expect(result).toHaveStyleRule('line-height', '25px');
    expect(result).toMatchSnapshot();
  });
});
