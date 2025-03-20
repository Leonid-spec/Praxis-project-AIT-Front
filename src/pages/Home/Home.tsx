import { useNavigate } from 'react-router-dom';
import { HomeContainer, LeftContainer, RightContainer, WelcomeText, HighlightedSpan } from './styles';
import MakeAppointmentBtn from '../../components/Button/MakeAppointmentBtn/MakeAppointmentBtn';
import SmileImage from '../../assets/Smile-1.jpg'; // Картинка

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log('Redirecting to appointment form...');
    navigate('/appointment'); // Переход на страницу записи на прием
  };

  return (
    <HomeContainer>
      <LeftContainer>
        <div>
          <WelcomeText>
            WIR <HighlightedSpan>SCHENKEN</HighlightedSpan> IHNEN IHR <HighlightedSpan>SCHÖNSTES LÄCHELN</HighlightedSpan>
          </WelcomeText>
          <MakeAppointmentBtn text="Termin buchen" onClick={handleButtonClick} /> {/* Обработчик кнопки */}
        </div>
      </LeftContainer>
      <RightContainer>
        <img src={SmileImage} alt="Smile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> {/* Картинка */}
      </RightContainer>
    </HomeContainer>
  );
};

export default Home;
