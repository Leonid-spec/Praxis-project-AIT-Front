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
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      textAlign: "center" as const, // Явное указание литерального типа
      border: "1px solid #ddd",
      maxWidth: "150px",
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
