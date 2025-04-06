import styled from "styled-components";

export const ScrollContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding: 0 30px 0 20px;
`;

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
  height: 100vh;
  padding: 0 40px;
`;

export const HeaderBox = styled.ul`
  padding: 20px;
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
  padding: 0 20px;
  margin: 0;
  height: 60vh;
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
