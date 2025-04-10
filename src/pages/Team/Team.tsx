import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "../../store/store";
import {
  fetchDoctorsStart,
  fetchDoctorsSuccess,
  fetchDoctorsFailure,
} from "../../store/slices/doctorSlice";
import DoctorCard from "../../components/Cards/Doctor/DoctorCard";
import {
  TeamContainer,
  WelcomeSection,
  TeamHeaderText,
  HighlightText,
  TeamPhoto,
  HeaderTextBox,
  TeamText,
  DoctorsGrid,
} from "./styles";
import { useTranslation } from "react-i18next";
import { Doctor } from "../../store/types/doctorTypes";

type Language = "en" | "de" | "ru";

const Team: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { doctors, loading, error } = useSelector(
    (state: RootState) => state.doctor
  );
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;

  useEffect(() => {
    const fetchDoctors = async () => {
      dispatch(fetchDoctorsStart());
      try {
        const response = await fetch("http://localhost:5000/doctors");
        const data = await response.json();
        dispatch(fetchDoctorsSuccess(data));
      } catch (err: any) {
        dispatch(fetchDoctorsFailure(err.message || t("errorFetchingDoctors")));
      }
    };

    fetchDoctors();
  }, [dispatch]);

  const handleDetailsClick = (id: number) => {
    navigate(`/doctor/${id}`);
  };

  return (
    <TeamContainer>
      <WelcomeSection>
        <TeamHeaderText>
          {t("message.main.team_page.welcome")}{" "}
          <HighlightText>Abramian Dental</HighlightText>
        </TeamHeaderText>
      </WelcomeSection>

      <TeamPhoto
        src="https://www.zahnaerzte-siermann.de/wp-content/uploads/2022/12/Fotowand_Team.jpg"
        alt="Team"
      />

      <HeaderTextBox>
        <TeamText>
          Unser <HighlightText>Ärzteteam</HighlightText> |
        </TeamText>
      </HeaderTextBox>

      <DoctorsGrid>
        {loading ? (
          <p>{t("loadingDoctors")}</p>
        ) : error ? (
          <p>{t("errorFetchingDoctors")}</p>
        ) : doctors.length > 0 ? (
          doctors.map((doctor) => {
            const specializationKey =
              `specialisation_${currentLanguage}` as keyof Pick<
                Doctor,
                "specialisation_de" | "specialisation_en" | "specialisation_ru"
              >;

            const specialization =
              (doctor[specializationKey] as string) || t("noSpecialization");

            return (
              <DoctorCard
                key={doctor.id}
                id={doctor.id}
                photo={
                  doctor.topimage
                    ? doctor.topimage.replace(/\\/g, "/")
                    : "https://via.placeholder.com/150"
                }
                fullName={doctor.full_name}
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