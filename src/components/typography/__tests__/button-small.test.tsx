import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ButtonSmall } from '../button-small';

describe('button small component', () => {
  it('should render with default css properties', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <ButtonSmall>Lorem ipsum</ButtonSmall>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#FFFFFF');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Regular,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '16px');
    expect(result).toHaveStyleRule('font-weight', 'bold');
    expect(result).toHaveStyleRule('line-height', '14px');
    expect(result).toMatchSnapshot();
  });

  it('should render with custom summaryText color', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <ButtonSmall color="summaryText">Lorem ipsum</ButtonSmall>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#212240');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Regular,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '16px');
    expect(result).toHaveStyleRule('font-weight', 'bold');
    expect(result).toHaveStyleRule('line-height', '14px');
    expect(result).toMatchSnapshot();
  });
});
