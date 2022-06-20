import React, { fireEvent, render, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@core/theme/theme-provider';
import * as Snackbar from 'react-simple-snackbar';
import { ShoppingCart } from '../shopping-cart';
import { PRODUCTS } from '../helpers';
import { CURRENCY } from '../components/order-summary/order-summary';

const productName = PRODUCTS[0].name;
const productPrice = PRODUCTS[0].price;

describe('shopping cart screen', () => {
  it('should not render a snackbar when checkout button is clicked and there is cero products added to the cart', () => {
    const openSnackbarMock = jest.fn();
    const closeSnackbarMock = jest.fn();
    jest
      .spyOn(Snackbar, 'useSnackbar')
      .mockImplementation(() => [openSnackbarMock, closeSnackbarMock]);

    const result = render(
      <ThemeProvider>
        <ShoppingCart />
      </ThemeProvider>,
    );

    const checkoutButton = result.getByTestId('order-summary-checkout-button');

    fireEvent.click(checkoutButton);

    expect(openSnackbarMock).toHaveBeenCalledTimes(0);
  });

  it('should render a snackbar when checkout button is clicked and there is more than one product added to the cart', () => {
    const openSnackbarMock = jest.fn();
    const closeSnackbarMock = jest.fn();
    jest
      .spyOn(Snackbar, 'useSnackbar')
      .mockImplementation(() => [openSnackbarMock, closeSnackbarMock]);

    const result = render(
      <ThemeProvider>
        <ShoppingCart />
      </ThemeProvider>,
    );

    const addButton = result.getByTestId(`${productName}-add-button`);

    fireEvent.click(addButton);

    const checkoutButton = result.getByTestId('order-summary-checkout-button');

    fireEvent.click(checkoutButton);

    waitFor(() => {
      expect(openSnackbarMock).toHaveBeenCalled();
      expect(openSnackbarMock).toHaveBeenCalledTimes(1);
      expect(openSnackbarMock).toHaveBeenCalledWith(
        `Your 1 selected item with a total cost of ${productPrice}${CURRENCY} is ready to be purchased!`,
      );
    });
  });

  it('should render a modal when a product image is clicked', () => {
    const openSnackbarMock = jest.fn();
    const closeSnackbarMock = jest.fn();
    jest
      .spyOn(Snackbar, 'useSnackbar')
      .mockImplementation(() => [openSnackbarMock, closeSnackbarMock]);

    const modalTestId = `shopping-cart-${productName}-details-modal`;

    const result = render(
      <ThemeProvider>
        <ShoppingCart />
      </ThemeProvider>,
    );

    const productImageButton = result.getByTestId(
      `${productName}-product-detail-image-button`,
    );

    expect(result.queryByTestId(modalTestId)).toBeNull();

    fireEvent.click(productImageButton);

    waitFor(() => {
      expect(result.queryByTestId(modalTestId)).toBeDefined();
    });
  });

  it('should render a snackbar when a product is added from modal screen', () => {
    const openSnackbarMock = jest.fn();
    const closeSnackbarMock = jest.fn();
    jest
      .spyOn(Snackbar, 'useSnackbar')
      .mockImplementation(() => [openSnackbarMock, closeSnackbarMock]);

    const modalTestId = `shopping-cart-${productName}-details-modal`;

    const result = render(
      <ThemeProvider>
        <ShoppingCart />
      </ThemeProvider>,
    );

    const productImageButton = result.getByTestId(
      `${productName}-product-detail-image-button`,
    );

    fireEvent.click(productImageButton);

    waitFor(() => {
      expect(result.queryByTestId(modalTestId)).toBeDefined();
    });

    const modalButton = result.getByTestId(
      `shopping-cart-${productName}-details-modal-add-button`,
    );

    fireEvent.click(modalButton);

    expect(openSnackbarMock).toHaveBeenCalled();
    expect(openSnackbarMock).toHaveBeenCalledTimes(1);
    expect(openSnackbarMock).toHaveBeenCalledWith(
      `One ${productName} product was added to the cart!`,
    );
  });

  it('should close modal when close icon button is clicked', () => {
    const openSnackbarMock = jest.fn();
    const closeSnackbarMock = jest.fn();
    jest
      .spyOn(Snackbar, 'useSnackbar')
      .mockImplementation(() => [openSnackbarMock, closeSnackbarMock]);

    const modalTestId = `shopping-cart-${productName}-details-modal`;

    const result = render(
      <ThemeProvider>
        <ShoppingCart />
      </ThemeProvider>,
    );

    const productImageButton = result.getByTestId(
      `${productName}-product-detail-image-button`,
    );

    expect(result.queryByTestId(modalTestId)).toBeNull();

    fireEvent.click(productImageButton);

    waitFor(() => {
      expect(result.queryByTestId(modalTestId)).toBeDefined();
    });

    const modalCloseIconButton = result.getByTestId('modal-close-icon-button');

    fireEvent.click(modalCloseIconButton);

    waitFor(() => {
      expect(result.queryByTestId(modalTestId)).toBeNull();
    });
  });
});
