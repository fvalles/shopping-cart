import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Separator } from '../separator';

describe('separator component', () => {
  it('should render with default height and border-bottom', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Separator />
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('height', '1px');
    expect(result).toHaveStyleRule('border-bottom', '1px solid #21224029');
    expect(result).toMatchSnapshot();
  });

  it('should render with 2px height and default border-bottom', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Separator height={2} />
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('height', '2px');
    expect(result).toHaveStyleRule('border-bottom', '2px solid #21224029');
    expect(result).toMatchSnapshot();
  });
});
