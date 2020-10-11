import React, { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.css';

const Modal = ({ children, isOpen = false, close, elementId = 'root' }) => {
  if (isOpen === false) {
    return null;
  }
  return createPortal(
    <div className={styles.wrapperStyle}>
      <div className={styles.maskStyle} onClick={close} />
      <div className={styles.containerStyle}>{children}</div>
    </div>,
    document.getElementById(elementId)
  );
};

const useModal = (elementId = 'root', options = {}) => {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => {
    setOpen(true);
  }, [setOpen]);
  const close = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const ModalWrapper = useCallback(({ children }) => {
    return (
      <Modal isOpen={isOpen} close={close} elementId={elementId}>
        {children}
      </Modal>
    )
  }, [isOpen, close, elementId]);

  return [ModalWrapper, open, close, isOpen];
};

export default useModal;
