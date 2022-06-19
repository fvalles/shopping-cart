import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { H1 } from '@components/typography';
import { Modal } from '../modal';

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  createPortal: (node: any) => node,
}));

describe('modal component', () => {
  it('should not render if isOpen property is false', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Modal isOpen={false} label="some label">
            <H1>Lorem ipsum</H1>
          </Modal>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toBe(null);
    expect(result).toMatchSnapshot();
  });

  it('should render if isOpen property is true', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <section>
            <Modal isOpen label="some label">
              <H1>Lorem ipsum</H1>
            </Modal>
          </section>
        </ThemeProvider>,
      )
      .toJSON();

    const container = result.children[0];
    const modal = container.children[0];
    const modalLabel = modal.props['aria-label'];
    expect(modalLabel).toBe('some label');

    const modalTextContent = modal.children[0];
    expect(modalTextContent.type).toBe('h1');
    expect(modalTextContent.children[0]).toBe('Lorem ipsum');
    expect(result).toMatchSnapshot();
  });
});
