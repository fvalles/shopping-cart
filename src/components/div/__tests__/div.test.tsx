import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { H1 } from '@components/typography';
import { Div } from '../div';

describe('div component', () => {
  it('should render with default css properties', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Div>
            <H1>Some text</H1>
          </Div>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('width', '100%');
    expect(result).toMatchSnapshot();
  });

  it('should render with custom css properties', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Div
            alignItems="center"
            display="flex"
            justifyContent="center"
            margin="16px">
            <H1>Some text</H1>
          </Div>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('align-items', 'center');
    expect(result).toHaveStyleRule('display', 'flex');
    expect(result).toHaveStyleRule('justify-content', 'center');
    expect(result).toHaveStyleRule('margin', '16px');
    expect(result).toHaveStyleRule('width', '100%');
    expect(result).toMatchSnapshot();
  });
});
