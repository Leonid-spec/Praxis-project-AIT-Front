import React, { useState } from 'react';
import { HomeContainer, LeftContainer, RightContainer, WelcomeText, HighlightedSpan } from './styles';
import { ModalStyles } from './styles'; // Импортируем стили модального окна
import MakeAppointmentBtn from '../../components/Button/MakeAppointmentBtn/MakeAppointmentBtn';
import SmileImage from '../../assets/Smile-1.jpg';
import Modal from 'react-modal';
import AppointmentForm from '../../pages/Appointment/AppointmentForm';

// Установка корневого элемента для модального окна
Modal.setAppElement('#root');

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Управление состоянием модального окна

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <HomeContainer>
      {/* Левая часть с текстом и кнопкой */}
      <LeftContainer>
        <div>
          <WelcomeText>
            WIR <HighlightedSpan>SCHENKEN</HighlightedSpan> IHNEN IHR <HighlightedSpan>SCHÖNSTES LÄCHELN</HighlightedSpan>
          </WelcomeText>
          <MakeAppointmentBtn text="Termin buchen" onClick={openModal} /> {/* Открытие модального окна */}
        </div>
      </LeftContainer>

      {/* Правая часть с изображением */}
      <RightContainer>
        <img
          src={SmileImage}
          alt="Smile"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </RightContainer>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={ModalStyles} // Применяем стили из styles.ts
      >
        <button
          onClick={closeModal}
          style={{
            float: 'right',
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
          }}
        >
          ✖
        </button>
        <AppointmentForm /> {/* Вставляем компонент формы */}
      </Modal>
    </HomeContainer>
  );
};

export default Home;
