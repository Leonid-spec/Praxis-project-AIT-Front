import React, { createContext, useState, useContext, useEffect } from "react";

// Интерфейс для врача
interface Doctor {
  id: number;
  name: string;
  surname: string;
  position: string;
  biography: string;
  photo: string;
  active: boolean;
  fullname?: string;
  NameDe?: string;
  NameEn?: string;
  NameRu?: string;
  SpecialisationDe?: string;
  SpecialisationEn?: string;
  SpecialisationRu?: string;
  specialisation?: string;
  BiographyDe?: string;
  BiographyEn?: string;
  BiographyRu?: string;
}

// Тип контекста врачей
interface DoctorsContextType {
  doctors: Doctor[];
  setDoctors: React.Dispatch<React.SetStateAction<Doctor[]>>;
}

// Создаём контекст
const DoctorsContext = createContext<DoctorsContextType | undefined>(undefined);

// Провайдер контекста
export const DoctorsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  // Загружаем данные из LocalStorage при монтировании
  useEffect(() => {
    const storedDoctors = localStorage.getItem("doctors");
    if (storedDoctors) {
      try {
        setDoctors(JSON.parse(storedDoctors));
      } catch (error) {
        console.error("Ошибка загрузки данных из LocalStorage:", error);
      }
    }
  }, []);

  // Сохраняем данные в LocalStorage при изменении списка врачей
  useEffect(() => {
    localStorage.setItem("doctors", JSON.stringify(doctors));
  }, [doctors]);

  return (
    <DoctorsContext.Provider value={{ doctors, setDoctors }}>
      {children}
    </DoctorsContext.Provider>
  );
};

// Хук для доступа к контексту
export const useDoctors = () => {
  const context = useContext(DoctorsContext);
  if (!context) {
    throw new Error("useDoctors должен использоваться внутри DoctorsProvider");
  }
  return context;
};