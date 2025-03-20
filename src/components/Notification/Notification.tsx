import React, { useEffect } from "react";
import styled from "styled-components";

interface NotificationProps {
  message: string; 
  type: "error" | "success"; 
  onClose: () => void; 
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <NotificationContainer type={type}>
      {message}
    </NotificationContainer>
  );
};

export default Notification;

const NotificationContainer = styled.div<{ type: "error" | "success" }>`
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
