import { useState, useEffect, useCallback } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom"; 
import { useTranslation } from "react-i18next"; 
import { getAllDoctors } from "../../../../api/doctorAPI";
import AddNewDoctorBtn from "../Buttons/AddNewDoctorBtn";
import { FindDoctorContainer } from "../Other/FindDoctorContainer";
import DoctorCard from "../DoctorCard/DoctorCard";
import { FaSyncAlt } from "react-icons/fa";
import { Doctor } from "../../../../store/types/doctorTypes"; // унифицированный импорт
import {
  DoctorsPageAllContainer,
  ScrollContainer,
  HeaderMainBtnsContainer,
  DoctorCardsMainContainer,
  RefreshIconBox,
} from "./styles";

export const DoctorsPageAll = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLanguage = i18n.language.charAt(0).toUpperCase() + i18n.language.slice(1);
  const specializationKey = `specialisation${currentLanguage}` as keyof Doctor;

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const token = localStorage.getItem("token");

  const fetchDoctors = useCallback(async () => {
    if (!token) {
      setError("Access token is missing");
      return;
    }
    try {
      const data = await getAllDoctors(token);
      setDoctors(data);
      setFilteredDoctors(data);
      setError(null);
    } catch (err: any) {
      setError(err.message || "Error loading doctors");
    }
  }, [token]);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredDoctors(doctors);
      return;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = doctors.filter((doctor) =>
      doctor.fullName?.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredDoctors(filtered);
  }, [searchTerm, doctors]);

  const handleAddDoctorClick = () => {
    navigate("add-new-doctor");
  };

  const handleEditClick = (id?: number) => {
    if (id) {
      navigate(`/admin-panel/edit-doctor/${id}`);
    }
  };

  const handleRefreshBtn = () => {
    fetchDoctors();
  };

  return (
    <DoctorsPageAllContainer>
      {location.pathname === "/admin-panel/doctors" && (
        <HeaderMainBtnsContainer>
          <AddNewDoctorBtn onAddDoctor={handleAddDoctorClick} />
          <RefreshIconBox onClick={handleRefreshBtn}>
            <FaSyncAlt size={24} color="#20b1b7" />
          </RefreshIconBox>
          <FindDoctorContainer searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </HeaderMainBtnsContainer>
      )}

      <Outlet />
      <ScrollContainer>
        <DoctorCardsMainContainer>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {!error &&
            filteredDoctors.map((doctor) => {
              const specializationValue = doctor[specializationKey];

              const formattedSpecialization = Array.isArray(specializationValue)
                ? specializationValue.map(item => item.path).join(", ")
                : typeof specializationValue === "string"
                ? specializationValue
                : String(specializationValue);

              return (
                <DoctorCard
                  key={doctor.id}
                  id={doctor.id ?? 0} // Защита от undefined
                  fullName={doctor.fullName}
                  topImage={doctor.topImage}
                  specialization={formattedSpecialization}
                  isActive={doctor.isActive}
                  onActionClick={() => handleEditClick(doctor.id)}
                  isAdminPanel={true}
                  buttonLabel={t("message.adminPanel.appointments.doctors.edit")} // перевод кнопки
                />
              );
            })}
        </DoctorCardsMainContainer>
      </ScrollContainer>
    </DoctorsPageAllContainer>
  );
};
