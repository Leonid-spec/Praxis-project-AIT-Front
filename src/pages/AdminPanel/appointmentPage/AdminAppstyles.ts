const commonStyles = {
  textAlign: "center" as const,
  borderRadius: "18px",
  padding: "10px",
  transition: "background-color 0.3s ease",
  buttonCommonStyles: {
    border: "1px solid #ccc",
    cursor: "pointer",
    padding: "10px 15px",
    borderRadius: "18px",
    backgroundColor: "#20B1B7", // Общий цвет кнопок
    color: "#fff",
    transition: "background-color 0.3s ease",
    ":hover": {
      backgroundColor: "#9CEEF1", // Цвет на ховере
    },
  },
};

const circleStyles = {
  width: "15px",
  height: "15px",
  borderRadius: commonStyles.borderRadius,
  marginRight: "15px",
};

const styles = {
  container: {
    ...commonStyles,
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  heading: {
    ...commonStyles,
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  loading: {
    ...commonStyles,
    fontSize: "16px",
    color: "#888",
  },
  error: {
    ...commonStyles,
    fontSize: "16px",
    color: "red",
  },
  emptyMessage: {
    ...commonStyles,
    fontSize: "18px",
    color: "#777",
    marginTop: "20px",
  },
  filterContainer: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "20px",
  },
  filterButton: {
    ...commonStyles.buttonCommonStyles, // Унификация кнопок
  },
  filterButtonActive: {
    ...commonStyles.buttonCommonStyles,
    opacity: "0.9", // Активная кнопка
  },
  marker: {
    flex: "0 0 50px",
  },
  markerCircleNew: {
    ...circleStyles,
    backgroundColor: "#ff4d4d",
  },
  markerCircleCompleted: {
    ...circleStyles,
    backgroundColor: "#28a745",
  },
  appointmentRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: commonStyles.borderRadius,
    marginBottom: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    transition: commonStyles.transition,
  },
  clientName: {
    flex: "1",
    fontWeight: "bold",
  },
  service: {
    flex: "1",
  },
  date: {
    flex: "0 0 160px",
    textAlign: "right" as const,
  },
  moreInfoButton: {
    ...commonStyles.buttonCommonStyles, // Унификация кнопок
    marginLeft: "20px",
  },
};

export default styles;
