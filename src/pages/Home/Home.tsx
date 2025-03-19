import { useNavigate } from 'react-router-dom';
import { HomeContainer, LeftContainer, RightContainer, WelcomeText, HighlightedSpan } from './styles';
import MakeAppointmentBtn from '../../components/Button/MakeAppointmentBtn/MakeAppointmentBtn';
import SmileImage from '../../assets/Smile-1.jpg'; // Импортируем изображение

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/appointment'); // Перенаправление на форму
  };

  return (
    <HomeContainer>
      <LeftContainer>
        <div>
          <WelcomeText>
            WIR <HighlightedSpan>SCHENKEN</HighlightedSpan> IHNEN IHR <HighlightedSpan>SCHÖNSTES LÄCHELN</HighlightedSpan>
          </WelcomeText>
          <MakeAppointmentBtn text="Termin buchen" onClick={handleButtonClick} /> {/* Добавляем обработчик */}
        </div>
      </LeftContainer>
      <RightContainer>
        <img src={SmileImage} alt="Smile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> {/* Картинка */}
      </RightContainer>
    </HomeContainer>
  );
};

export default Home;
