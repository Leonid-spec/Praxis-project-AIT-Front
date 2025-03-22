import styled from 'styled-components';

export const NotificationContainer = styled.div<{ type: "error" | "success" }>`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 15px 20px;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  background-color: ${({ type }) =>
    type === "error" ? "#ff4d4d" : "#4caf50"}; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;
