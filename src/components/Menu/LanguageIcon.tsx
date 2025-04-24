import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import {
  Divider,
  IconStyle,
  IconWrapper,
  LanguageIconWrapper,
  LanguageLink,
  LanguagePanel,
  Overlay,
} from "./LanguageIconStyles";
import { useTranslation } from "react-i18next";

const LanguageIcon: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);

    setIsMenuOpen(false); 
  };

  return (
    <>
      <LanguageIconWrapper>
        <IconWrapper>
          <IconStyle onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaGlobe />
          </IconStyle>
        </IconWrapper>

        {isMenuOpen && (
          <>
            <Overlay onClick={() => setIsMenuOpen(false)} />

            <LanguagePanel>
              {["de", "en", "ru"].map((lang, index) => (
                <React.Fragment key={lang}>
                  <LanguageLink
                    onClick={(e) => {
                      e.preventDefault();
                      handleLanguageChange(lang);
                    }}
                  >
                    {lang.toUpperCase()}
                  </LanguageLink>
                  {index < 2 && <Divider>|</Divider>}
                </React.Fragment>
              ))}
            </LanguagePanel>
          </>
        )}
      </LanguageIconWrapper>
    </>
  );
};

export default LanguageIcon;
