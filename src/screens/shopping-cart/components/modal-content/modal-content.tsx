import { ListItemMedium } from '@components/typography';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Div } from '@components/div';
import { Spacer } from '@components/spacer';
import { Separator } from '@components/separator';
import { Money, TypographyType } from '@components/money';
import { Body } from '@components/typography/body';
import { Button } from '@components/button';
import { useWebPSupportCheck } from 'react-use-webp-support-check';
import { ButtonType, ProductProps } from '../product/types';
import cancelIcon from '../../../../assets/images/icons/cancel.png';

/**
 * Types
 */

interface ModalContentProps
  extends Pick<
    ProductProps,
    | 'modalImageSourcePng'
    | 'modalImageSourceWebp'
    | 'name'
    | 'price'
    | 'productCode'
  > {
  /** Function that will be run when the modal is requested to be closed */
  onRequestClose: () => void;
  /** Function that will add one product element to the shopping cart when the modal button is clicked */
  onQuantityButtonClick: (type: ButtonType) => void;
}

interface ModalImageProps
  extends Pick<
    ModalContentProps,
    'modalImageSourcePng' | 'modalImageSourceWebp'
  > {
  /** boolean to check if the browser supports webp images. This is better for SEO/SEM and to use lighter image files */
  supportsWebP: boolean;
}

/**
 * Constants
 */

const MODAL_PRODUCT_DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales semper elit sit amet interdum. Praesent volutpat sed elit vel consectetur. Nulla tempus tincidunt ex, sit amet semper ipsum imperdiet varius. In rutrum aliquam nisl, sagittis faucibus felis bibendum id.';

/**
 * Styled Components
 */

const ModalImage = styled.div<ModalImageProps>`
  background-image: ${({
    modalImageSourcePng,
    modalImageSourceWebp,
    supportsWebP,
  }) =>
    supportsWebP
      ? `url(${modalImageSourceWebp})`
      : `url(${modalImageSourcePng})`};
  background-position: top left;
  background-size: cover;
  height: 649px;
  width: 827px;
`;

const ModalWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const CloseIconButton = styled.button`
  background-color: ${({ theme }) => theme.Colors.white};
`;

const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0px 32px;
  width: 312px;
`;

const ProductTitles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

/**
 * ModalContent
 */

export const ModalContent: FunctionComponent<ModalContentProps> = ({
  modalImageSourcePng,
  modalImageSourceWebp,
  name,
  onQuantityButtonClick,
  onRequestClose,
  price,
  productCode,
}) => {
  const supportsWebP = useWebPSupportCheck();

  return (
    <ModalWrapper>
      <ModalImage
        modalImageSourcePng={modalImageSourcePng}
        modalImageSourceWebp={modalImageSourceWebp}
        supportsWebP={supportsWebP}
      />
      <ProductInfoWrapper>
        <Spacer size={33} />
        <Div display="flex" justifyContent="flex-end" margin="0px 33px 0px 0px">
          <CloseIconButton onClick={onRequestClose}>
            <img alt="cancel icon" src={cancelIcon} />
          </CloseIconButton>
        </Div>
        <Spacer size={97} />
        <ProductTitles>
          {/** To standardise typography components, in the following two components I used the ListItemMedium component although its properties are
           * not exactly the same as the ones provided in the Figma design */}
          <ListItemMedium fontWeight="bold">{name}</ListItemMedium>
          <Money
            amount={price}
            typographyType={TypographyType.LIST_ITEM_MEDIUM}
          />
        </ProductTitles>
        <Spacer />
        <Separator />
        <Spacer size={24} />
        <Body>{MODAL_PRODUCT_DESCRIPTION}</Body>
        <Spacer size={48} />
        <Separator />
        <Spacer />
        <Body color="majesticPurple">Product code {productCode}</Body>
        <Spacer size={40} />
        <Button
          onClick={() => {
            onQuantityButtonClick(ButtonType.ADD);
            onRequestClose();
          }}
          title="Add to cart"
        />
      </ProductInfoWrapper>
    </ModalWrapper>
  );
};
