import styled from "styled-components";

export const Card = styled.div`
  margin-top: 20px;
  margin: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  /* max-width: 400px; */
  /* position: relative; */

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.18);
  }
`;

export const DoctorCardStyled = styled.div<{ isActive: boolean, id?: number; topImage?: string }>`
min-width: 350px;

&:hover {
  cursor: pointer;
}
`;

export const PhotoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 133.33%; 
  background-color: #f0f0f0;
  overflow: hidden;
`;

export const Photo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const Info = styled.div`
  padding: 16px;
  text-align: center;
`;

export const FullName = styled.h3`
  font-size: 20px;
  color: #2e3a59;
  margin-bottom: 12px;
  font-weight: 700;
`;

export const Specialization = styled.p`
  font-size: 16px;
  color: #777;
  margin-bottom: 12px;
`;

// ✅ Новый универсальный стиль для кнопок "Edit" и "Details"
export const ActionButton = styled.button`
  background-color: #7a2141;
  color: white;
  padding: 10px 18px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #57142d;
  }
`;

export const InactiveOverlay = styled.div`
  all: unset;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 2;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  z-index: 1;
  border-radius: 10px;
  margin: 0 !important;
  padding: 0;
`;
