// #1 work
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { RootState } from "../../../store/store";

// const DoctorDetails: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const doctors = useSelector((state: RootState) => state.doctor.doctors);

//   const [doctor, setDoctor] = useState(() =>
//     doctors.find((doc) => doc.id === Number(id))
//   );

//   useEffect(() => {
//     if (!doctor) {
//       const fetchDoctor = async () => {
//         const response = await fetch(`http://localhost:5000/doctors/${id}`);
//         const data = await response.json();
//         setDoctor(data);
//       };

//       fetchDoctor();
//     }
//   }, [doctor, id]);

//   if (!doctor) {
//     return <p>Loading doctor details...</p>;
//   }

//   return (
//     <div style={{ padding: "20px", textAlign: "center" }}>
//       <img
//         src={doctor.topimage || "https://via.placeholder.com/300"}
//         alt={`Photo of ${doctor.full_name}`}
//         style={{ width: "300px", borderRadius: "12px" }}
//       />
//       <h1>{doctor.full_name}</h1>
//       <p>{doctor[`description_de`] || "Lebenslauf nicht verfügbar"}</p>
//     </div>
//   );
// };

// export default DoctorDetails;


// #4 check 1 worked
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const DoctorDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const doctors = useSelector((state: RootState) => state.doctor.doctors);

  const [doctor, setDoctor] = useState(() =>
    doctors.find((doc) => doc.id === Number(id))
  );

  useEffect(() => {
    if (!doctor) {
      const fetchDoctor = async () => {
        try {
          const response = await fetch(`http://localhost:5000/doctors/${id}`);
          const data = await response.json();
          console.log("Full list of objects:", data); 
          setDoctor(data);
        } catch (error) {
          console.error("Failed to fetch doctor details:", error);
        }
      };

      fetchDoctor();
    } else {
      console.log("Full list from Redux state:", doctors);
    }
  }, [doctor, id, doctors]);

  if (!doctor) {
    return <p>Loading doctor details...</p>;
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <img
        src={doctor.topimage || "https://via.placeholder.com/300"}
        alt={`Photo of ${doctor.full_name}`}
        style={{ width: "300px", borderRadius: "12px" }}
      />
      <h1>{doctor.full_name}</h1>
      <p>{doctor[`description_de`] || "Lebenslauf nicht verfügbar"}</p>
      <p>{doctor.description_de}</p>
    </div>
  );
};

export default DoctorDetails;

// # 2 don`t
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import {
//   Container,
//   MainPhoto,
//   Section,
//   FieldLabel,
//   FieldValue,
//   AdditionalPhotos,
// } from "./styles";
// import { Doctor } from "../../../store/types/doctorTypes";

// const DoctorDetails: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const { t, i18n } = useTranslation();
//   const [doctor, setDoctor] = useState<Doctor | null>(null);

//   useEffect(() => {
//     const fetchDoctor = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/doctors/${id}`);
//         const data = await response.json();
//         setDoctor(data);
//       } catch (error) {
//         console.error("Failed to fetch doctor details:", error);
//       }
//     };

//     fetchDoctor();
//   }, [id]);

//   if (!doctor) {
//     return <p>{t("loadingDoctorDetails")}</p>;
//   }

// //   const getLocalizedText = (field: "title" | "biogrphy" | "specialisation"): string => {
// //     return doctor[`${field}_${i18n.language}` as keyof Doctor] || t("noInformation");
// //   };

// const getLocalizedText = (
//     doctor: Doctor | null,
//     fieldPrefix: "title" | "biogrphy" | "specialisation"
//   ): string => {
//     if (!doctor) return t("noInformation"); // Перевірка на null

//     const fieldKey = `${fieldPrefix}_${i18n.language}` as keyof Doctor;
//     const value = doctor[fieldKey];

//     if (typeof value === "string" && value.trim() !== "") {
//       return value;
//     }

//     return t("noInformation"); // Якщо значення пусте або неправильного типу
//   };

//   return (
//     <Container>
//       <MainPhoto
//         src={doctor.topimage || "https://via.placeholder.com/300"}
//         alt={`Photo of ${doctor.full_name}`}
//       />
//       <Section>
//         <FieldLabel>{t("doctorName")}:</FieldLabel>
//         <FieldValue>{doctor.full_name}</FieldValue>
//       </Section>
//       <Section>
//         <FieldLabel>{t("doctorTitle")}:</FieldLabel>
//         <FieldValue>{getLocalizedText("title")}</FieldValue>
//       </Section>
//       <Section>
//         <FieldLabel>{t("doctorBiography")}:</FieldLabel>
//         <FieldValue>{getLocalizedText("biogrphy")}</FieldValue>
//       </Section>
//       <Section>
//         <FieldLabel>{t("doctorSpecialisation")}:</FieldLabel>
//         <FieldValue>{getLocalizedText("specialisation")}</FieldValue>
//       </Section>
//       <Section>
//         <FieldLabel>{t("doctorStatus")}:</FieldLabel>
//         <FieldValue>{doctor.isActive ? t("active") : t("inactive")}</FieldValue>
//       </Section>

//       {doctor.images && doctor.images.length > 0 && (
//         <Section>
//           <FieldLabel>{t("additionalPhotos")}:</FieldLabel>
//           <AdditionalPhotos>
//             {doctor.images.map((image) => (
//               <img
//                 key={image.id}
//                 src={image.path.replace(/\\/g, "/")}
//                 alt={`Additional photo of ${doctor.full_name}`}
//               />
//             ))}
//           </AdditionalPhotos>
//         </Section>
//       )}
//     </Container>
//   );
// };

// export default DoctorDetails;

// #3
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import {
//   Container,
//   MainPhoto,
//   Section,
//   FieldLabel,
//   FieldValue,
//   AdditionalPhotos,
// } from "./styles";
// import { Doctor } from "../../../store/types/doctorTypes";

// const DoctorDetails: React.FC = () => {
//   const { id } = useParams<{ id?: string }>();
//   const { t, i18n } = useTranslation();
//   const [doctor, setDoctor] = useState<Doctor | null>(null);

//   useEffect(() => {
//     const fetchDoctor = async () => {
//         if (!id) {
//           console.error("No ID provided in URL");
//           return;
//         }
//         try {
//           const response = await fetch(`http://localhost:5000/doctors/${id}`);
//           if (!response.ok) {
//             throw new Error(`Doctor not found: ${response.status}`);
//           }
//           const data = await response.json();
//           setDoctor({ ...data, images: data.images || [] });
//         } catch (error) {
//           console.error("Failed to fetch doctor details:", error);
//         }
//       };
      
//     fetchDoctor();
//   }, [id]);

//   if (!doctor) {
//     return <p>{t("loadingDoctorDetails")}</p>;
//   }

//   const getLocalizedText = (
//     doctor: Doctor | null,
//     fieldPrefix: "title" | "biogrphy" | "specialisation"
//   ): string => {
//     if (!doctor) return t("noInformation");
//     const fieldKey = `${fieldPrefix}_${i18n.language}` as keyof Doctor;
//     const value = doctor[fieldKey];
//     return typeof value === "string" && value.trim() !== ""
//       ? value
//       : t("noInformation");
//   };

//   return (
//     <Container>
//       <MainPhoto
//         src={doctor.topimage || "https://via.placeholder.com/300"}
//         alt={`Photo of ${doctor.full_name}`}
//       />
//       <Section>
//         <FieldLabel>{t("doctorName")}:</FieldLabel>
//         <FieldValue>{doctor.full_name}</FieldValue>
//       </Section>
//       <Section>
//         <FieldLabel>{t("doctorTitle")}:</FieldLabel>
//         <FieldValue>{getLocalizedText(doctor, "title")}</FieldValue>
//       </Section>
//       <Section>
//         <FieldLabel>{t("doctorBiography")}:</FieldLabel>
//         <FieldValue>{getLocalizedText(doctor, "biogrphy")}</FieldValue>
//       </Section>
//       <Section>
//         <FieldLabel>{t("doctorSpecialisation")}:</FieldLabel>
//         <FieldValue>{getLocalizedText(doctor, "specialisation")}</FieldValue>
//       </Section>
//       <Section>
//         <FieldLabel>{t("doctorStatus")}:</FieldLabel>
//         <FieldValue>
//           {doctor?.isActive ? t("active") : t("inactive")}
//         </FieldValue>
//       </Section>

//       {(doctor.images ?? []).length > 0 && (
//         <Section>
//           <FieldLabel>{t("additionalPhotos")}:</FieldLabel>
//           <AdditionalPhotos>
//             {doctor.images?.map((image) => (
//               <img
//                 key={image.id}
//                 src={image.path.replace(/\\/g, "/")}
//                 alt={`Additional photo of ${doctor.full_name}`}
//               />
//             ))}
//           </AdditionalPhotos>
//         </Section>
//       )}
//     </Container>
//   );
// };

// export default DoctorDetails;
