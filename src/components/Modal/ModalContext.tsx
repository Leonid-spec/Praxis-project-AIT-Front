import { createContext, useState, ReactNode } from 'react';

interface ModalContextProps {
  isModalOpen: boolean;
  openModal: (content?: ReactNode, serviceId?: number) => void;
  closeModal: () => void;
  modalContent?: ReactNode;
  selectedServiceId: number | null;
}

export const ModalContext = createContext<ModalContextProps>({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  modalContent: null,
  selectedServiceId: null,
});

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);

  const openModal = (content?: ReactNode, serviceId?: number) => {
    setModalContent(content || null);
    setSelectedServiceId(serviceId ?? null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    setSelectedServiceId(null);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, modalContent, selectedServiceId }}>
      {children}
    </ModalContext.Provider>
  );
};
