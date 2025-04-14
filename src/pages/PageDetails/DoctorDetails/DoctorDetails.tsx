import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {
  Biography,
  BiographyWrapper,
  Container,
  ContentWrapper,
  FullName,
  GalleryImage,
  GalleryTitle,
  GalleryWrapper,
  ImagesGrid,
  ImageWrapper,
  InfoWrapper,
  LabelWrapper,
  MainImage,
  Specialization,
  SpecializationWrapper,
  Title,
  TitleWrapper,
} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store";
import {fetchActiveDoctorsStart, fetchDoctorsFailure, fetchDoctorsSuccess} from "../../../store/slices/doctorSlice";

type Language = "De" | "En" | "Ru";

const DoctorDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;
  const dispatch: AppDispatch = useDispatch();

  const { doctors, loading, error } = useSelector((state: RootState) => state.doctor);
  const doctor = doctors.find((doc) => doc.id === Number(id));

  useEffect(() => {
    if (doctors.length === 0) {
      dispatch(fetchActiveDoctorsStart());
      const fetchDoctors = async () => {
        try {
          const response = await fetch("/api/doctors/active");
          if (!response.ok) {
            throw new Error("Failed to fetch doctors");
          }
          const data = await response.json();
          dispatch(fetchDoctorsSuccess(data));
        } catch (err: any) {
          dispatch(fetchDoctorsFailure(err.message || t("errorFetchingDoctors")));
        }
      };

      fetchDoctors();
    }
  }, [dispatch, doctors.length, t]); 

  if (loading) return <p>{t("loadingDoctors")}</p>;
  if (error) return <p>{t("errorFetchingDoctors")}</p>;

  if (!doctor) {
    return (
      <Container>
        <p>{t("doctorNotFound")}</p>
      </Container>
    );
  }

  const titleKey = `title${
    currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)
  }` as keyof typeof doctor;
  const title =
    typeof doctor[titleKey] === "string"
      ? doctor[titleKey]
      : t("noTitle");

  const specializationKey = `specialisation${
    currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)
  }` as keyof typeof doctor;
  const specialization =
    typeof doctor[specializationKey] === "string"
      ? doctor[specializationKey]
      : t("noSpecialization");

  const biographyKey = `biography${currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)}` as keyof typeof doctor;
  const biography =
    typeof doctor[biographyKey] === "string"
      ? doctor[biographyKey]
      : t("noBiography");

  return (
    <Container>
      <ContentWrapper>
        <ImageWrapper>
          <MainImage
            src={doctor.topImage}
            alt={doctor.fullName}
          />
        </ImageWrapper>
        <InfoWrapper>
          <FullName>{doctor.fullName}</FullName>
          <TitleWrapper>
            <LabelWrapper>{t("message.main.team_page.doctorDetails.title")} </LabelWrapper>
            <Title>{title}</Title>
          </TitleWrapper>
          <SpecializationWrapper>
            <LabelWrapper>{t("message.main.team_page.doctorDetails.specialization")}</LabelWrapper>
            <Specialization>{specialization}</Specialization>
          </SpecializationWrapper>
          <BiographyWrapper>
            <LabelWrapper>{t("message.main.team_page.doctorDetails.biography")}</LabelWrapper>
            <Biography>{biography}</Biography>
          </BiographyWrapper>
        </InfoWrapper>
      </ContentWrapper>

      <GalleryWrapper>
        <GalleryTitle>{t("Gallery")}</GalleryTitle>
        <ImagesGrid>
          {doctor.images && doctor.images.length > 0 ? (
            doctor.images.map((img) => (
              <GalleryImage 
                key={img.id} 
                src={
                  img.path.startsWith("https://")
                    ? img.path
                    : `https://${img.path}`
                }
                alt="Doctor's work" 
              />
            ))
          ) : (
            <p>{t("noImages")}</p>
          )}
        </ImagesGrid>
      </GalleryWrapper>
    </Container>
  );
};

export default DoctorDetails;
