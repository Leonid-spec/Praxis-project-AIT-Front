import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { DropdownArrow, DropdownContainer, DropdownHeader, DropdownList, DropdownListItem } from "./styles";
import { ServiceData } from "../../../store/types/serviceTypes";

interface ServiceDropdownProps {
  services: ServiceData[];
  selectedService: ServiceData | null;
  onSelect: (service: ServiceData) => void;
}

const ServiceDropdown: React.FC<ServiceDropdownProps> = ({ services, selectedService, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { i18n, t } = useTranslation();

  const getLocalizedName = (service: ServiceData) => {
    switch (i18n.language) {
      case "de":
        return service.titleDe;
      case "en":
        return service.titleEn;
      case "ru":
        return service.titleRu;
      default:
        return service.titleDe;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleSelect = (service: ServiceData) => {
    onSelect(service);
    setIsOpen(false);
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownHeader onClick={handleToggle}>
        {selectedService ? getLocalizedName(selectedService) : t("message.other.makeAppointment.placeholders.service")}
        <DropdownArrow>{isOpen ? "▲" : "▼"}</DropdownArrow>
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {services.map((service) => (
            <DropdownListItem key={service.id} onClick={() => handleSelect(service)}>
              {getLocalizedName(service)}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default ServiceDropdown;

// import React, { useState, useEffect, useRef } from "react";
// import { useTranslation } from "react-i18next";
// import { DropdownArrow, DropdownContainer, DropdownHeader, DropdownList, DropdownListItem } from "./styles";

// export interface Service {
//   [x: string]: any;
//   titleEn: any;
//   topImage: string;
//   id: number;
//   name: string;
// }

// interface ServiceDropdownProps {
//   services: Service[];
//   selectedService: Service | null;
//   onSelect: (service: Service) => void;
// }

// const ServiceDropdown: React.FC<ServiceDropdownProps> = ({ services, selectedService, onSelect }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const { t } = useTranslation();
  

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleToggle = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleSelect = (service: Service) => {
//     onSelect(service);
//     setIsOpen(false);
//   };

//   return (
//     <DropdownContainer ref={dropdownRef}>
//       <DropdownHeader onClick={handleToggle}>
//         {selectedService ? selectedService.name : t("message.other.makeAppointment.placeholders.service")}
//         <DropdownArrow>{isOpen ? "▲" : "▼"}</DropdownArrow>
//       </DropdownHeader>
//       {isOpen && (
//         <DropdownList>
//           {services.map((service) => (
//             <DropdownListItem key={service.id} onClick={() => handleSelect(service)}>
//               {service.name}
//             </DropdownListItem>
//           ))}
//         </DropdownList>
//       )}
//     </DropdownContainer>
//   );
// };


