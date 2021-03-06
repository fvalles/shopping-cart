import React, { FunctionComponent, useEffect, useState } from 'react';
import { Div } from '@components/div';
import { Modal } from '@components/modal';
import { Money } from '@components/money';
import { Colors } from '@core/theme';
import { useSnackbar } from 'react-simple-snackbar';
import { getElementWidth } from '../../helpers';
import { ModalContent } from '../modal-content';
import { ProductDetails } from '../product-details';
import { Quantity } from '../quantity';
import { ButtonType, ProductProps } from './types';

/**
 * Constants
 */

const SNACKBAR_DURATION = 4000;

const SNACKBAR_OPTIONS = {
  style: {
    backgroundColor: Colors.majesticPurple,
  },
};

/**
 * Product
 */

export const Product: FunctionComponent<ProductProps> = ({
  imageSourcePng,
  imageSourceWebp,
  modalImageSourcePng,
  modalImageSourceWebp,
  name,
  onQuantityButtonClick,
  quantity,
  price,
  productCode,
}) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [openSnackbar, closeSnackbar] = useSnackbar(SNACKBAR_OPTIONS);

  const handleQuantityButtonClick = (type: ButtonType): void => {
    onQuantityButtonClick(type, productCode);
  };

  const openProductDetailsModal = (): void => {
    setIsOpen(true);
  };

  const closeProductDetailsModal = (): void => {
    setIsOpen(false);
  };

  useEffect(() => {
    const snackbarTimeout = setTimeout(() => {
      closeSnackbar();
    }, SNACKBAR_DURATION);

    return () => {
      clearTimeout(snackbarTimeout);
    };
  }, [openSnackbar]);

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        label={`${name} product details`}
        testId={`shopping-cart-${name}-details-modal`}>
        <ModalContent
          modalImageSourcePng={modalImageSourcePng}
          modalImageSourceWebp={modalImageSourceWebp}
          name={name}
          onQuantityButtonClick={handleQuantityButtonClick}
          onRequestClose={closeProductDetailsModal}
          openSnackbar={openSnackbar}
          price={price}
          productCode={productCode}
        />
      </Modal>
      <ProductDetails
        imageSourcePng={imageSourcePng}
        imageSourceWebp={imageSourceWebp}
        name={name}
        onProductDetailsClick={openProductDetailsModal}
        productCode={productCode}
      />
      <Quantity
        onClick={handleQuantityButtonClick}
        quantity={quantity}
        testId={name}
      />
      <Div
        alignItems="center"
        display="flex"
        width={getElementWidth(2)}
        justifyContent="center">
        <Money amount={price} />
      </Div>
      <Div
        alignItems="center"
        display="flex"
        width={getElementWidth(3)}
        justifyContent="center">
        <Money amount={price * quantity} />
      </Div>
    </>
  );
};
