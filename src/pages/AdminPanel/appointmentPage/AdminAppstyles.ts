const commonStyles = {
  textAlign: "center" as const,
  borderRadius: "18px",
  padding: "10px",
  transition: "background-color 0.3s ease",
};

const buttonStyles = {
  ...commonStyles,
  border: "1px solid #ccc",
  cursor: "pointer",
  backgroundColor: "#f9f9f9",
};

const activeButtonStyles = {
  ...commonStyles,
  backgroundColor: "#20B1B7",
  color: "#fff",
  opacity: "0.9",
};

const circleStyles = {
  width: "15px",
  height: "15px",
  borderRadius: commonStyles.borderRadius, // Используем общие стили
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
    ...buttonStyles, // Унификация кнопок
  },
  filterButtonActive: {
    ...activeButtonStyles, // Унификация активных кнопок
  },
  marker: {
    flex: "0 0 50px",
  },
  markerCircleNew: {
    ...circleStyles, // Унифицированные круги
    backgroundColor: "#ff4d4d",
  },
  markerCircleCompleted: {
    ...circleStyles, // Унифицированные круги
    backgroundColor: "#28a745",
  },
  appointmentRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: commonStyles.borderRadius, // Используем общие стили
    marginBottom: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    transition: commonStyles.transition, // Используем общие стили
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
    ...buttonStyles, // Унификация кнопок
    marginLeft: "20px",
    backgroundColor: "#20B1B7",
    color: "#fff",
    border: "none",
  },
};

export default styles;
