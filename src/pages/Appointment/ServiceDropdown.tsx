import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export interface Service {
  [x: string]: any;
  titleEn: any;
  topImage: string;
  id: number;
  name: string;
}

interface ServiceDropdownProps {
  services: Service[];
  selectedService: Service | null;
  onSelect: (service: Service) => void;
}

const ServiceDropdown: React.FC<ServiceDropdownProps> = ({ services, selectedService, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (service: Service) => {
    onSelect(service);
    setIsOpen(false);
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownHeader onClick={handleToggle}>
        {selectedService ? selectedService.name : t("message.other.makeAppointment.placeholders.service")}
        <DropdownArrow>{isOpen ? "▲" : "▼"}</DropdownArrow>
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {services.map((service) => (
            <DropdownListItem key={service.id} onClick={() => handleSelect(service)}>
              {service.name}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default ServiceDropdown;

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const DropdownHeader = styled.div`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: #333;
`;

const DropdownArrow = styled.span`
  margin-left: 10px;
  font-size: 12px;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 0 0 6px 6px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const DropdownListItem = styled.li`
  padding: 10px 12px;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  &:hover {
    background-color: #f2f2f2;
  }
`;
