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
    justifyContent: "center",
    gap: "15px",
    marginTop: "20px",
  },
  backButton: {
    width: "150px", // Устанавливаем ширину
    padding: "10px", // Одинаковый padding для обеих кнопок
    fontSize: "16px", // Единый размер шрифта
    borderRadius: "50px", // Увеличен радиус углов
    cursor: "pointer",
    textAlign: "center" as const,
    backgroundColor: "#f4f4f4",
    border: "1px solid #ddd",
    transition: "background-color 0.3s ease",
},
completeButton: {
    width: "150px", // Устанавливаем ширину, как у backButton
    padding: "10px", // Одинаковый padding
    fontSize: "16px", // Единый размер шрифта
    borderRadius: "50px", // Увеличен радиус углов
    cursor: "pointer",
    textAlign: "center" as const,
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    transition: "background-color 0.3s ease",
},
    
    loading: {
      textAlign: "center" as const, // Явное указание литерального типа
      fontSize: "18px",
      color: "#888",
    },
    error: {
      textAlign: "center" as const, // Явное указание литерального типа
      fontSize: "18px",
      color: "red",
    },
    heading: {
      textAlign: "center" as const, // Явное указание литерального типа
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#333",
    },
  };
  


export default appointmentDetailsStyles;
