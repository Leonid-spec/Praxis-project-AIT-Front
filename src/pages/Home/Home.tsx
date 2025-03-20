import { HomeContainer, 
    LeftContainer, 
    RightContainer, 
    WelcomeText, 
    HighlightedSpan,
    RightContainerPhoto,
    LeftContainerPosition,
 } from './styles';
import MakeAppointmentBtn from '../../components/Button/MakeAppointmentBtn/MakeAppointmentBtn'; 
const Home = () => {
  return (
    <HomeContainer>
      <LeftContainer>
        <LeftContainerPosition>
          <WelcomeText>
            WIR <HighlightedSpan>SCHENKEN</HighlightedSpan> IHNEN IHR SCHÖNSTES <HighlightedSpan>LÄCHELN</HighlightedSpan>
          </WelcomeText>
          <MakeAppointmentBtn text="Termin buchen" /> 
        </LeftContainerPosition>
      </LeftContainer>
      <RightContainer>
        <RightContainerPhoto src='https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/302cbddc2538f009366ee1c813a8dd8cf6cbd409/images/2576164.png' />
      </RightContainer>
    </HomeContainer>
  );
};

export default Home;