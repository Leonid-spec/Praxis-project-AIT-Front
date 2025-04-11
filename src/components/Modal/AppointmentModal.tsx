import React, { useContext } from 'react';
import Modal from 'react-modal';
import { ModalContext } from './ModalContext';
import { ButtonCloseContainer, ModalStyles } from './styles';
import ButtonClose from '../Button/ButtonClose/ButtonClose';
import AppointmentForm from '../Appointment/AppointmentForm';

const AppointmentModal: React.FC = () => {
  const { isModalOpen, closeModal } = useContext(ModalContext);

  return (
    <Modal 
        isOpen={isModalOpen} 
        onRequestClose={closeModal} 
        shouldCloseOnOverlayClick={false}
        style={ModalStyles} 
    >
     <ButtonCloseContainer> 
      <ButtonClose onClick={closeModal} />
      </ButtonCloseContainer>
      <AppointmentForm onSuccess={closeModal} />
     
    </Modal>
  );
};

export default AppointmentModal;
