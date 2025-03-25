import React from "react";

const MiniFooter: React.FC = () => {
  return (
    <footer style={{ padding: "10px", textAlign: "center", backgroundColor: "#B0F1F4" }}>
      <p>Montag-Freitag: 08:00 - 12:00, 13:00 - 18:00 Uhr</p>
      <p>Samstag, Sonntag: geschlossen</p>
    </footer>
  );
};

export default MiniFooter;