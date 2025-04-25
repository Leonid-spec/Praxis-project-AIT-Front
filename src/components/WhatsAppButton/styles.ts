import styled from "styled-components";

export const WhatsAppButtonContainer = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25D366;
  color: white;
  padding: 10px 15px;
  border-radius: 50%;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 9999;

  &:hover {
    background-color: #1ebe5d;
  }
`;

export const WhatsAppIcon = styled.img`
  width: 24px;
  height: 24px;
`;