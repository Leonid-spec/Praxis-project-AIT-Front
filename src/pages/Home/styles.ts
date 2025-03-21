import styled from 'styled-components';



export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px;
  height: 100vh;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fefefe;
`;

export const RightContainer = styled.div`
  background-color: #a5a0b9;
  width: 100%;
  height: 100%;
  /* background-image: url('../../assets/Smile-1.jpg'); Указываем путь до изображения */
  /* background-size: cover; Масштабируем картинку */
  /* background-position: center; Центрируем картинку */
  /* background-repeat: no-repeat;/* Запрещаем повтор*/ 
`;


export const WelcomeText = styled.h1`
  color: #414141;
  font-size: 2rem;
  line-height: 1.5;

  span {
    color: #9dd7ef;
  }
`;

export const HighlightedSpan = styled.span`
  color: #9dd7ef;
`;

export const PlaceholderButton = styled.button`
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #357abf;
  }
`;
export const ModalStyles = {
  content: {
    position: 'fixed',
    top: '10%', // Смещение вниз
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '90%', // Ширина модального окна
    maxWidth: '600px', // Максимальная ширина
    height: 'auto', // Высота подстраивается под содержимое
    padding: '20px',
    borderRadius: '8px',
    boxSizing: 'border-box', // Учитываем padding в ширине
    boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.25)',
    overflowY: 'auto', // Вертикальная прокрутка, если форма слишком высокая
    overflowX: 'hidden', // Убираем горизонтальную прокрутку
    background: '#ffffff', // Прозрачный фон
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Затемнение фона
  },
} as const;


