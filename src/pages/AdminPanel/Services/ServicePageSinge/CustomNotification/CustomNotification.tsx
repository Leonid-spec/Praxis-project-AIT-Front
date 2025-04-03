import React, { useState } from "react";
import {
  NotificationContainer,
  NotificationMessage,
} from "./styles";

interface NotificationProps {
  message: string;
  type: "error" | "success";
  duration?: number; 
}

const CustomNotification: React.FC<NotificationProps> = ({ message, type, duration = 1000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <NotificationContainer type={type}>
      <NotificationMessage>{message}</NotificationMessage>
    </NotificationContainer>
  );
};

export default CustomNotification;
