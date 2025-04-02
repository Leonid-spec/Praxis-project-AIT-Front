const buttonCommonStyles = {
  width: "150px", // Единая ширина для всех кнопок
  padding: "10px", // Единый отступ
  fontSize: "16px", // Единый размер шрифта
  borderRadius: "30px", // Единый радиус углов
  color: "#fff", // Цвет текста
  cursor: "pointer",
  textAlign: "center" as const,
  transition: "background-color 0.3s ease", // Единый переход
  backgroundColor: "#20B1B7", // Общий цвет кнопок
  border: "1px solid #ddd", // Общая граница кнопок
  ":hover": {
    backgroundColor: "#c5e785", // Цвет при наведении
  },
};

const commonStyles = {
  backgroundColor: "#FAFAFA",
  borderRadius: "8px",
  padding: "15px",
  boxShadow: "none",
};

const appointmentDetailsStyles = {
  container: {
    ...commonStyles,
    padding: "20px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
    border: "none",
  },
  topContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    marginBottom: "20px",
    flexWrap: "wrap" as const,
  },
  leftContainer: {
    flex: 1,
    ...commonStyles,
    border: "none",
    minWidth: "300px",
  },
  rightContainer: {
    flex: 1,
    ...commonStyles,
    border: "none",
    minWidth: "300px",
  },
  bottomContainer: {
    ...commonStyles,
    border: "none",
  },
  field: {
    padding: "10px",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #CCCCCC",
    marginBottom: "10px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
    marginTop: "20px",
    width: "100%",
  },
  backButton: {
    ...buttonCommonStyles, // Используем общие стили для кнопок
  },
  completeButton: {
    ...buttonCommonStyles, // Используем общие стили для кнопок
  },
  loading: {
    textAlign: "center" as const,
    fontSize: "18px",
    color: "#888",
  },
  error: {
    textAlign: "center" as const,
    fontSize: "18px",
    color: "red",
  },
  heading: {
    textAlign: "center" as const,
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
};

export default appointmentDetailsStyles;
