const styles = {
  contactsPage: {
    padding: "50px 5%",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: "32px",
    textAlign: "center" as const,
    marginBottom: "40px",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Адаптивное распределение колонок
    gap: "20px",
    margin: "40px auto",
    maxWidth: "1200px",
  },
  leftContainer: {
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    color: "#333",
    display: "flex",
    flexDirection: "column" as const,
    gap: "15px",
  },
  leftInnerContainer: {
    display: "flex",
    flexDirection: "column" as const,
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    gap: "10px",
    flex: "1", // Гибкая высота
  },
  rightContainer1: {
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column" as const,
    flex: "1", // Гибкая высота, чтобы совпадала с leftInnerContainer
  },
  sprechzeiten: {
    padding: "20px",
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    flex: "1", // Гибкая высота
    display: "flex",
    flexDirection: "column" as const,
  },
  daysOfWeek: {
    color: "#333",
    fontSize: "16px",
    lineHeight: "1.5",
  },
  mapContainer: {
    marginTop: "40px",
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center" as const,
    maxWidth: "1200px",
    margin: "0 auto",
  },
  link: {
    color: "#333",
    textDecoration: "none",
    fontWeight: "bold",
  },
  copyButton: {
    marginLeft: "10px",
    padding: "5px 15px",
    backgroundColor: "#A0EEF2",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  contactIcons: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  },
  iconCircle: {
    width: "50px",
    height: "50px",
    backgroundColor: "#A0EEF2",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    color: "#ffffff",
    marginRight: "10px",
  },
  arrowContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
  },
  arrow: {
    width: "30px",
    height: "30px",
    backgroundColor: "#A0EEF2",
    clipPath: "polygon(100% 50%, 0 0, 0 100%)",
    animation: "float 2s infinite ease-in-out",
  },
  "@keyframes float": {
    "0%, 100%": {
      transform: "translateX(0)",
    },
    "50%": {
      transform: "translateX(-10px)",
    },
  },
};

export default styles;
