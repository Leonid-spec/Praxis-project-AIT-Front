import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const lang = localStorage.getItem("i18nextLng") || navigator.language.split("-")[0];

    const supportedLanguages = ["de", "ru", "en"] as const;
    type SupportedLang = typeof supportedLanguages[number];

    const isSupported = (l: string): l is SupportedLang =>
      supportedLanguages.includes(l as SupportedLang);

    const selectedLanguage: SupportedLang = isSupported(lang) ? lang : "de";

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const messages: Record<SupportedLang, string> = {
      de: "Hallo! Wie kann ich Ihnen helfen?",
      ru: "Здравствуйте! Чем могу помочь?",
      en: "Hello! How can I help you?",
    };

    const phoneNumber = "+79913101669";
    const url = isMobile
      ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
          messages[selectedLanguage]
        )}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
          messages[selectedLanguage]
        )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const WhatsAppButtonBow = styled.div`
    background-color: #25d366;
    color: white;
    border-radius: 50%;
    padding: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #1ebe5d;
    }
  `;

  return (
    <div
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        color: "white",
        fontSize: "18px",
        cursor: "pointer",
        zIndex: 9999,
      }}
    >
      <WhatsAppButtonBow>
        <FaWhatsapp size={24} />
      </WhatsAppButtonBow>
    </div>
  );
};

export default WhatsAppButton;
