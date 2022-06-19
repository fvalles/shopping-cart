import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { H1 } from '@components/typography';
import { LiRow } from '../li-row';

describe('li row component', () => {
  it('should render with default css properties', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <LiRow>
            <H1>Some text</H1>
            <H1>Some other text</H1>
          </LiRow>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('display', 'flex');
    expect(result).toMatchSnapshot();
  });

  it('should render with custom justify-content and flex-flow css properties', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <LiRow justifyContent="center" flexFlow="row nowrap">
            <H1>Some text</H1>
            <H1>Some other text</H1>
          </LiRow>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('display', 'flex');
    expect(result).toHaveStyleRule('flex-flow', 'row nowrap');
    expect(result).toHaveStyleRule('justify-content', 'center');
    expect(result).toMatchSnapshot();
  });
});
