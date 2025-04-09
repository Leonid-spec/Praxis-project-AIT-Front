import React from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  PhotoContainer,
  Photo,
  Info,
  Title,
  DetailsButton,
} from "./styles";

interface ServiceCardProps {
  id: number;
  title: string;
  topImage?: string;
  onEditClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, topImage, onEditClick }) => {
  const { t } = useTranslation(); 
  return (
    <Card>
      <PhotoContainer>
        <Photo
          src={topImage}
          alt="Service preview"
        />
      </PhotoContainer>
      <Info>
        <Title>{title}</Title>
        <DetailsButton onClick={onEditClick}> {t("message.adminPanel.appointments.buttons.edit")} </DetailsButton>
      </Info>
    </Card>
  );
};

export default ServiceCard;


// import React from "react";
// import {
//   Card,
//   PhotoContainer,
//   Photo,
//   Info,
//   Title,
//   DetailsButton,
//   InactiveText,
// } from "./styles";

// interface ServiceCardProps {
//   id: number;
//   title: string;
//   topImage?: string;
//   onEditClick: () => void;
//   isActive: boolean;
// }

// const ServiceCard: React.FC<ServiceCardProps> = ({ title, topImage, onEditClick, isActive }) => {
//   return (
//    <>
//       <Card style={{ opacity: isActive ? 1 : 0.5 }}>
//         {isActive && (
//           <InactiveText>Card is unvisible for others</InactiveText>
//         )}
//         <PhotoContainer>
//           <Photo
//             src={topImage || "https://via.placeholder.com/150"}
//             alt="Service preview"
//           />
//         </PhotoContainer>
//         <Info>
//           <Title>{title}</Title>
//           <DetailsButton onClick={onEditClick}>Edit</DetailsButton>
//         </Info>
//       </Card>
//    </>
//   );
// };

// export default ServiceCard;
