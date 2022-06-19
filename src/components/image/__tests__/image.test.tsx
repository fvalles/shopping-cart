import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Image } from '../image';

describe('image component', () => {
  it('should render with default css properties', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Image alt="some image" height={72} src="imageSrc" width={72} />
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('border', '1px solid');
    expect(result).toHaveStyleRule('border-color', '#CACAD1');
    expect(result).toHaveStyleRule('border-radius', '4');
    expect(result).toHaveStyleRule('height', '72');
    expect(result).toHaveStyleRule('margin', '0px 16px 0px 0px');
    expect(result).toHaveStyleRule('width', '72');
    expect(result).toMatchSnapshot();
  });

  it('should render with custom css properties', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Image
            alt="some image"
            border="1px dashed"
            borderColor="primary"
            borderRadius={8}
            height={72}
            margin="20px"
            src="imageSrc"
            width={72}
          />
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('border', '1px dashed');
    expect(result).toHaveStyleRule('border-color', '#7350FF');
    expect(result).toHaveStyleRule('border-radius', '8');
    expect(result).toHaveStyleRule('height', '72');
    expect(result).toHaveStyleRule('margin', '20px');
    expect(result).toHaveStyleRule('width', '72');
    expect(result).toMatchSnapshot();
  });
});
