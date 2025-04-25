import React from "react";
import { WhatsAppButtonContainer, WhatsAppIcon } from "./styles";

const WhatsAppButton: React.FC = () => {
  
  const phoneNumber = "+79913101669";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
  )}`;

  return (
    <WhatsAppButtonContainer href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <WhatsAppIcon src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
    </WhatsAppButtonContainer>
  );
};

export default WhatsAppButton;