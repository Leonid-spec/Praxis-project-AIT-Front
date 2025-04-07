import styled from "styled-components";

export const NotificationContainer = styled.div<{ type: "error" | "success" }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: ${({ type }) => (type === "success" ? "#4CAF50" : "#F44336")};
  color: #fff;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const NotificationMessage = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
