import { HomeContainer, LeftContainer, RightContainer, WelcomeText, HighlightedSpan } from './styles';
import MakeAppointmentBtn from '../../components/Button/MakeAppointmentBtn/MakeAppointmentBtn'; // Импортируем кнопку

const Home = () => {
  return (
    <HomeContainer>
      <LeftContainer>
        <div>
          <WelcomeText>
            WIR <HighlightedSpan>SCHENKEN</HighlightedSpan> IHNEN IHR <HighlightedSpan>SCHÖNSTES LÄCHELN</HighlightedSpan>
          </WelcomeText>
          <MakeAppointmentBtn text="Termin buchen" /> {/* Используем кнопку */}
        </div>
      </LeftContainer>
      <RightContainer />
    </HomeContainer>
  );
};

export default Home;
