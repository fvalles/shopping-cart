import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Title } from '../title';

describe('title component', () => {
  it('should render with default css properties', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Title>Lorem ipsum</Title>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#7350FF');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Medium,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '16px');
    expect(result).toHaveStyleRule('font-weight', 'bold');
    expect(result).toHaveStyleRule('letter-spacing', '-0.18px');
    expect(result).toHaveStyleRule('line-height', '24px');
    expect(result).toMatchSnapshot();
  });

  it('should render with custom summaryHeading color', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Title color="summaryHeading">Lorem ipsum</Title>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#717285');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Medium,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '16px');
    expect(result).toHaveStyleRule('font-weight', 'bold');
    expect(result).toHaveStyleRule('letter-spacing', '-0.18px');
    expect(result).toHaveStyleRule('line-height', '24px');
    expect(result).toMatchSnapshot();
  });
});
