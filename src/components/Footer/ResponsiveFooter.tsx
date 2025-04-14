import React, { useState, useEffect } from "react";
import Footer from "./Footer"; // Путь внутри той же папки, где находится ResponsiveFooter.tsx
import MiniFooter from "../../pages/Contacts/MiniFooter"; // Указан путь до miniFooter, согласно вашему дереву

const ResponsiveFooter: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{isMobile ? <MiniFooter /> : <Footer />}</>;
};

export default ResponsiveFooter;