import styled from "styled-components";

export const Card = styled.div`
  margin: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  max-width: 350px;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.18);
  }
`;

export const PhotoContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f0f0f0;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  background-color: #20b1b7;
  color: white;
  padding: 10px 18px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1a8e92;
  }
`;

export const InactiveOverlay = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 5px;
  font-weight: 600;
  z-index: 10;
`;