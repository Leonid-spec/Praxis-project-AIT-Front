import React, { createContext, useState, ReactNode } from 'react';

interface ModalContextProps {
  isModalOpen: boolean;
  openModal: (content?: ReactNode) => void;
  closeModal: () => void;
  modalContent?: ReactNode;
}

export const ModalContext = createContext<ModalContextProps>({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  modalContent: null,
});

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const openModal = (content?: ReactNode) => {
    setModalContent(content || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, modalContent }}>
      {children}
    </ModalContext.Provider>
  );
};
