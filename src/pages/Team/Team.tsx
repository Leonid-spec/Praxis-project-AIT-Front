import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "../../store/store";
import {
  fetchActiveDoctorsFailure,
  fetchActiveDoctorsStart,
  fetchActiveDoctorsSuccess,
} from "../../store/slices/doctorSlice";
import DoctorCard from "../../components/Cards/Doctor/DoctorCard";
import {
  TeamContainer,
  HighlightText,
  TeamTextBox,
  TeamText,
  DoctorsGrid,
  LeftContainer,
  WelcomeTextSubtitle,
  HighlightedSpan,
  RightContainer,
  RightContainerPhoto,
  TeamContainerMainPhoto,
} from "./styles";
import { useTranslation } from "react-i18next";
import { Doctor } from "../../store/types/doctorTypes";
import MakeAppointmentBtn from "../../components/Button/MakeAppointmentBtn/MakeAppointmentBtn";

type Language = "En" | "De" | "Ru";

const Team: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { doctors, loading, error } = useSelector(
    (state: RootState) => state.doctor
  );
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;

  useEffect(() => {
    const fetchActiveDoctors = async () => {
      dispatch(fetchActiveDoctorsStart());
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8100/api/doctors/active", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
    
        if (!response.ok) {
          const errorText = await response.text(); 
          throw new Error(`HTTP ${response.status}: ${errorText}`);
        }
    
        const data = await response.json();
        console.log("Doctors data:", data);
        dispatch(fetchActiveDoctorsSuccess(data));
      } catch (err: any) {
        console.error("Failed to fetch active doctors:", err);
        dispatch(fetchActiveDoctorsFailure(err.message || t("errorFetchingActiveDoctors")));
      }
    };
  
    fetchActiveDoctors();
  }, [dispatch]);
  
  
  // useEffect(() => {
  //   dispatch(getActiveDoctors()); 
  // }, [dispatch]);

  const handleDetailsClick = (id: number) => {
    navigate(`/doctor/${id}`);
  };

  const parseSubtitle = (text: string) => {
    return text
      .split(/<HighlightedSpan>|<\/HighlightedSpan>/)
      .map((part, index) =>
        index % 2 === 1 ? (
          <HighlightedSpan key={index}>{part}</HighlightedSpan>
        ) : (
          part
        )
      );
  };

  return (
    <TeamContainer>

      <TeamContainerMainPhoto>

        <LeftContainer>
          <WelcomeTextSubtitle>
            {parseSubtitle(t("message.main.team_page.subtitle"))}
          </WelcomeTextSubtitle>
          <MakeAppointmentBtn text={t("message.main.use_oft.button.title")} />
        </LeftContainer>

        <RightContainer>
          <RightContainerPhoto
            src="https://www.zahnaerzte-siermann.de/wp-content/uploads/2022/12/Fotowand_Team.jpg"
            alt="Team"
          />
        </RightContainer>

      </TeamContainerMainPhoto>

      <TeamTextBox>
        <TeamText>
          Unser <HighlightText>Ärzteteam</HighlightText> |
        </TeamText>
      </TeamTextBox>

      <DoctorsGrid>
        {loading ? (
          <p>{t("loadingDoctors")}</p>
        ) : error ? (
          <p>{t("errorFetchingActiveDoctors")}</p>
        ) : doctors.length > 0 ? (
          doctors.map((doctor) => {
            // console.log("Doctor object:", doctor);
            const specializationKey =
              `specialisation${currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)}` as keyof Pick<
                Doctor,
                "specialisationDe" | "specialisationEn" | "specialisationRu"
              >;

              // console.log("Specialization key:", specializationKey);
              // console.log("Specialization value:", doctor[specializationKey]);

            const specialization =
              (doctor[specializationKey] as string) || t("noSpecialization");

            return (
              <DoctorCard
                key={doctor.id}
                id={doctor.id}
                photo={
                  doctor.topImage
                    ? doctor.topImage.replace(/\\/g, "/")
                    : "https://via.placeholder.com/150"
                }
                fullName={doctor.fullName}
                specialization={specialization || t("noSpecialization")}
                onDetailsClick={() => handleDetailsClick(doctor.id)}
              />
            );
          })
        ) : (
          <p>{t("noDoctorsAvailable")}</p>
        )}
      </DoctorsGrid>
    </TeamContainer>
  );
};

export default Team;