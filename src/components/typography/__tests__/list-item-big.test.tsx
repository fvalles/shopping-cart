import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ListItemBig } from '../list-item-big';

describe('list item big component', () => {
  it('should render with default css properties', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <ListItemBig>Lorem ipsum</ListItemBig>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#212240');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Light,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '20px');
    expect(result).toHaveStyleRule('font-weight', 'normal');
    expect(result).toHaveStyleRule('line-height', '25px');
    expect(result).toHaveStyleRule('margin', '0');
    expect(result).toMatchSnapshot();
  });

  it('should render with custom white color, 16px margin and font-weight bold', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <ListItemBig color="white" fontWeight="bold" margin="16px">
            Lorem ipsum
          </ListItemBig>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#FFFFFF');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Light,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '20px');
    expect(result).toHaveStyleRule('font-weight', 'bold');
    expect(result).toHaveStyleRule('line-height', '25px');
    expect(result).toHaveStyleRule('margin', '16px');
    expect(result).toMatchSnapshot();
  });
});
