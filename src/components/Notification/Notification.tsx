import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { NotificationContainer } from "./styles";

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

  return createPortal(
    <NotificationContainer type={type}>
      {message}
    </NotificationContainer>,
    document.getElementById("notification-root") || document.body
  );
};

export default Notification;
