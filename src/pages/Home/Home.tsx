import { 
  HomeContainer, 
  LeftContainer, 
  RightContainer, 
  WelcomeTextSubtitle,
  HighlightedSpan,
  RightContainerPhoto,
  MakeAppointmentBtnBox,
} from './styles';
import { useTranslation } from 'react-i18next';
import MakeAppointmentBtn from '../../components/Button/MakeAppointmentBtn/MakeAppointmentBtn'; 

const Home = () => {
  const { t } = useTranslation();


  const parseSubtitle = (text: string) => {
    return text.split(/<HighlightedSpan>|<\/HighlightedSpan>/).map((part, index) =>
      index % 2 === 1 ? (
        <HighlightedSpan key={index}>{part}</HighlightedSpan>
      ) : (
        part
      )
    );
  };

  return (
    <HomeContainer>
      <LeftContainer>
          <WelcomeTextSubtitle>
            {parseSubtitle(t('message.main.home_page.subtitle1'))}
          </WelcomeTextSubtitle>
          <WelcomeTextSubtitle>
            {parseSubtitle(t('message.main.home_page.subtitle2'))}
          </WelcomeTextSubtitle>
          <MakeAppointmentBtnBox>
            <MakeAppointmentBtn 
              text={t('message.main.use_oft.button.title')}
            />
          </MakeAppointmentBtnBox>
      </LeftContainer>
      <RightContainer>
        <RightContainerPhoto 
          // src='https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/302cbddc2538f009366ee1c813a8dd8cf6cbd409/images/2576164.png' 
          src='src\public\photo_5461023519723876539_x.jpg' 
        />
      </RightContainer>

    </HomeContainer>
  );
};

export default Home;
