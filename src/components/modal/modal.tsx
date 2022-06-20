import React, { FunctionComponent, ReactElement } from 'react';
import ModalWrapper from 'react-modal';

/**
 * Types
 */

interface ModalProps {
  /** Modal content components */
  children: ReactElement;
  /** Boolean describing if the modal should be shown or not. */
  isOpen: boolean;
  /** String indicating how the content container should be announced to screenreaders */
  label: string;
  /** String testId that renders a data-testid attribute in the DOM, used for testing. */
  testId: string;
}

/**
 * Constants
 */

const MODAL_STYLES = {
  content: {
    borderRadius: 4,
    display: 'flex',
    height: 'calc(100% - 64px)',
    left: '50%',
    maxHeight: 648,
    maxWidth: 1088,
    padding: 0,
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'calc(100% - 64px)',
  },
};

/**
 * Modal
 */

export const Modal: FunctionComponent<ModalProps> = ({
  children,
  isOpen,
  label,
  testId,
}) => (
  <ModalWrapper
    ariaHideApp={false}
    contentLabel={label}
    isOpen={isOpen}
    shouldCloseOnOverlayClick={false}
    shouldCloseOnEsc={false}
    style={MODAL_STYLES}
    testId={testId}>
    {children}
  </ModalWrapper>
);
