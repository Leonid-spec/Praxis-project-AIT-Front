import styled from "styled-components";

export const Card = styled.div`
  margin: 20px 10px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  max-width: 400px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.18);
  }
`;

export const PhotoContainer = styled.div`
  width: 100%;
  height: 180px;
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

export const Title = styled.h3`
  font-size: 20px;
  color: #2e3a59;
  margin-bottom: 12px;
  font-weight: 700;
`;

export const DetailsButton = styled.button`
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
    background-color: #5c0d2a;
;
  }
`;

export const InactiveText = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 5px;
  font-weight: 600;
  z-index: 1;
`;

export const InactiveOverlay = styled.div`
  position: relative;
  top: 10px;
  right: 10px;
  background-color: rgba(179, 36, 36, 0.7);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 5px;
  font-weight: 600;
  z-index: 1;
`;