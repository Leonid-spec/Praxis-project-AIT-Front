import styled from "styled-components";

const buttonCommonStyles = `
  border: 1px solid #ccc;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 18px;
  background-color: #20B1B7;
  color: #fff;
  transition: background-color 0.3s ease;
  width: auto; 
  white-space: nowrap;
`;

const commonStyles = `
  text-align: center;
  border-radius: 18px;
  padding: 10px;
  transition: background-color 0.3s ease;
`;

const circleStyles = `
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Container = styled.div`
  ${commonStyles}
  margin: 0 auto;
  height: 70vh;
`;

export const HeaderBox = styled.ul`
  padding: 0;
`;

export const RefreshIconBox = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const Heading = styled.h1`
  ${commonStyles}
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

export const Loading = styled.div`
  ${commonStyles}
  font-size: 16px;
  color: #888;
`;

export const Error = styled.div`
  ${commonStyles}
  font-size: 16px;
  color: red;
`;

export const EmptyMessage = styled.div`
  ${commonStyles}
  font-size: 18px;
  color: #777;
  margin-top: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button<{ isActive: boolean }>`
  ${buttonCommonStyles}
  opacity: ${(props) => (props.isActive ? "0.9" : "1")};
`;

export const AppointmentList = styled.ul`
  list-style-type: none;
  /* padding: 0 20px; */
  margin: 0;
  /* height: 60vh; */
`;

export const AppointmentRow = styled.li<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  align-items: center;
  justify-content: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 12px;
  margin-bottom: 10px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const MainInfoContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ClientName = styled.div`
  flex: 1 1 auto;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Service = styled.div`
  flex: 1 1 auto;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Date = styled.div`
  flex: 1 1 auto;
  text-align: center;
  color: #555;
  font-size: 14px;
`;

export const MoreInfoButton = styled.button`
  ${buttonCommonStyles}
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
`;

export const Marker = styled.div`
  flex: 0 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MarkerCircleNew = styled.div`
  ${circleStyles}
  background-color: #28a745;
`;

export const MarkerCircleCompleted = styled.div`
  ${circleStyles}
  background-color: #ff4d4d;
`;

export const TrashIconBox = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding-left: 30px;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

// styles.js

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background-color: white;
  padding: 20px 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const ModalContent = styled.div`
  font-size: 24px;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

export const ModalActionsBtn = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #20b1b7;
  border-radius: 30px;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #18a8a0;
  }
`;
export const BtnBox = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: flex-start; /* Выравнивание кнопок по началу */
  margin-top: 10px; /* Отступ сверху для пространства */
`;
