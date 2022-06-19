import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import renderer from 'react-test-renderer';
import { Spacer } from '..';
import 'jest-styled-components';

describe('spacer component', () => {
  it('should render with default height', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Spacer />
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('height', '16px');
    expect(result).toMatchSnapshot();
  });

  it('should render with custom height of 32px', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Spacer size={32} />
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('height', '32px');
    expect(result).toMatchSnapshot();
  });
});
