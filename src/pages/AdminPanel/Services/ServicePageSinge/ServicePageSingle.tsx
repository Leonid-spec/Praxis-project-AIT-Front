import {
  AddNewServicePageContainer,
  DescriptionSection,
  EditTopImage,
  HeaderBox,
  InputContainer,
  MainBox,
  ServicePageSingleContainer,
  TitleBoxText,
  TitlesBox,
  TitleSection,
} from "./style";

interface ServicePageSingleProps {
  onReturnBack: () => void;
}

export const ServicePageSingle: React.FC<ServicePageSingleProps> = ({
  onReturnBack,
}) => {
  return (
    <ServicePageSingleContainer>
      <HeaderBox>
        <div>
          <button onClick={onReturnBack}>← Return back</button>
        </div>
        <div>Make card unvisible</div>
        <button>Save all</button>
      </HeaderBox>
      <AddNewServicePageContainer>
        <MainBox>
          <div>
            <EditTopImage>
              <TitlesBox>Edit Top Image</TitlesBox>
              <input type="text" placeholder="Enter image URL" />
            </EditTopImage>

            <TitleSection>
              <TitlesBox>Titles:</TitlesBox>
              <InputContainer>
                <TitleBoxText>De</TitleBoxText>
                <input type="text" placeholder="Enter title (De)" />
              </InputContainer>
              <InputContainer>
                <TitleBoxText>En</TitleBoxText>
                <input type="text" placeholder="Enter title (En)" />
              </InputContainer>
              <InputContainer>
                <TitleBoxText>Ru</TitleBoxText>
                <input type="text" placeholder="Enter title (Ru)" />
              </InputContainer>
            </TitleSection>
          </div>
          <div>
            <img
              src=""
              alt="Top service preview"
              style={{ width: "100%", borderRadius: "10px", objectFit: "cover" }}
            />
          </div>
        </MainBox>

        <DescriptionSection>
          <TitlesBox>Descriptions:</TitlesBox>
          <InputContainer>
            <TitleBoxText>De</TitleBoxText>
            <textarea placeholder="Enter description (De)" rows={5}></textarea>
          </InputContainer>
          <InputContainer>
            <TitleBoxText>En</TitleBoxText>
            <textarea placeholder="Enter description (En)" rows={5}></textarea>
          </InputContainer>
          <InputContainer>
            <TitleBoxText>Ru</TitleBoxText>
            <textarea placeholder="Enter description (Ru)" rows={5}></textarea>
          </InputContainer>
        </DescriptionSection>
      </AddNewServicePageContainer>
    </ServicePageSingleContainer>
  );
};
