import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "../../store/store";
import { fetchActiveDoctorsFailure, fetchActiveDoctorsStart, fetchActiveDoctorsSuccess } from "../../store/slices/doctorSlice";
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
  TeamContainerMainPhoto 
} from "./styles";
import { useTranslation } from "react-i18next";
import { Doctor } from "../../store/types/doctorTypes";
import MakeAppointmentBtn from "../../components/Button/MakeAppointmentBtn/MakeAppointmentBtn";

type Language = "En" | "De" | "Ru";

const Team: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { doctors, loading, error } = useSelector((state: RootState) => state.doctor);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;

  const fetchActiveDoctors = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(fetchActiveDoctorsFailure(t("errorFetchingActiveDoctors")));
      return;
    }

    try {
      dispatch(fetchActiveDoctorsStart());
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8080/api/doctors/active", {
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

      const data: Doctor[] = await response.json();
      console.log("Doctors received:", data); // ✅ Проверяем полученные данные
      dispatch(fetchActiveDoctorsSuccess(data.filter((doctor) => doctor.isActive))); // ✅ Фильтруем активных врачей
    } catch (err: any) {
      console.error("Failed to fetch active doctors:", err);
      dispatch(fetchActiveDoctorsFailure(err.message || t("errorFetchingActiveDoctors")));
    }
  }, [dispatch, t]);

  useEffect(() => {
    fetchActiveDoctors();
  }, [fetchActiveDoctors]);

  const handleDetailsClick = (id: number) => {
    navigate(`/doctor/${id}`);
  };

  const parseSubtitle = (text: string) => {
    return text.split(/<HighlightedSpan>|<\/HighlightedSpan>/).map((part, index) =>
      index % 2 === 1 ? <HighlightedSpan key={index}>{part}</HighlightedSpan> : part
    );
  };

  return (
    <TeamContainer>
      <TeamContainerMainPhoto>
        <LeftContainer>
          <WelcomeTextSubtitle>{parseSubtitle(t("message.main.team_page.subtitle"))}</WelcomeTextSubtitle>
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
          {parseSubtitle(t("message.main.team_page.servicesIntrot"))}{" "}
          <HighlightText>{parseSubtitle(t("message.header.menu.team"))}</HighlightText> |
        </TeamText>
      </TeamTextBox>

      <DoctorsGrid>
        {loading ? (
          <p>{t("loadingDoctors")}</p>
        ) : error ? (
          <p>{t("errorFetchingActiveDoctors")}</p>
        ) : doctors.length > 0 ? (
          doctors.map((doctor) => {
            const specializationKey = `specialisation${currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)}` as keyof Doctor;
            const specialization = doctor[specializationKey] || t("noSpecialization");

            return (
              <DoctorCard
                key={doctor.id}
                id={doctor.id}
                photo={doctor.topImage ? doctor.topImage.replace(/\\/g, "/") : "https://via.placeholder.com/150"}
                fullName={doctor.fullName}
                specialization={specialization || t("noSpecialization")}
                isActive={doctor.isActive}
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