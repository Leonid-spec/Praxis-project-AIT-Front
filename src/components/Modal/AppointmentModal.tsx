import React, { useContext } from 'react';
import Modal from 'react-modal';
import { ModalContext } from './ModalContext';
import { ButtonCloseContainer, ModalStyles } from './styles';
import AppointmentForm from '../../pages/Appointment/AppointmentForm';
import ButtonClose from '../Button/ButtonClose/ButtonClose';

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
      <AppointmentForm />
     
    </Modal>
  );
};

export default AppointmentModal;
