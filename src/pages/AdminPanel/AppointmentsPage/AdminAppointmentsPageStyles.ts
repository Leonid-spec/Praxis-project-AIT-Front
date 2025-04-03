import { CSSProperties } from "react";

// Стили кнопок
const buttonCommonStyles: CSSProperties = {
  border: "1px solid #ccc",
  cursor: "pointer",
  padding: "10px 15px",
  borderRadius: "18px",
  backgroundColor: "#20B1B7",
  color: "#fff",
  transition: "background-color 0.3s ease",
  width: "auto", // Ширина кнопки зависит от содержимого
  whiteSpace: "nowrap", // Запрещаем перенос текста
};

// Общие стили
const commonStyles: CSSProperties = {
  textAlign: "center",
  borderRadius: "18px",
  padding: "10px",
  transition: "background-color 0.3s ease",
};

// Стили для маркеров
const circleStyles: CSSProperties = {
  width: "15px",
  height: "15px",
  borderRadius: "50%", // Круглый маркер
  marginRight: "10px",
};

const styles = {
  container: {
    ...commonStyles,
    padding: "20px",
    maxWidth: "1200px", // Централизованный, шире по экрану
    margin: "0 auto",
  } as CSSProperties,
  heading: {
    ...commonStyles,
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  } as CSSProperties,
  loading: {
    ...commonStyles,
    fontSize: "16px",
    color: "#888",
  } as CSSProperties,
  error: {
    ...commonStyles,
    fontSize: "16px",
    color: "red",
  } as CSSProperties,
  emptyMessage: {
    ...commonStyles,
    fontSize: "18px",
    color: "#777",
    marginTop: "20px",
  } as CSSProperties,
  filterContainer: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "20px",
  } as CSSProperties,
  filterButton: {
    ...buttonCommonStyles,
  } as CSSProperties,
  filterButtonActive: {
    ...buttonCommonStyles,
    opacity: "0.9",
  } as CSSProperties,
  appointmentList: {
    listStyleType: "none",
    padding: "0",
    margin: "0",
  } as CSSProperties,
  appointmentRow: (isMobile: boolean): CSSProperties => ({
    display: "flex",
    flexDirection: isMobile ? "column" : "row", // Компоновка горизонтально/вертикально
    alignItems: "center",
    justifyContent: "center",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    marginBottom: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  }),
  mainInfoContainer: (isMobile: boolean): CSSProperties => ({
    display: "flex",
    flexDirection: isMobile ? "column" : "row", // TODO  Адаптация под экраны
    gap: "10px",
    alignItems: "center", 
    justifyContent: "center",
    width: "100%",
  }),
  clientName: {
    flex: "1 1 auto",
    fontWeight: "bold",
    textAlign: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  } as CSSProperties,
  service: {
    flex: "1 1 auto",
    textAlign: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  } as CSSProperties,
  date: {
    flex: "1 1 auto",
    textAlign: "center",
    color: "#555",
    fontSize: "14px",
  } as CSSProperties,
  moreInfoButton: {
    ...buttonCommonStyles,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",

    marginLeft: "auto",
  } as CSSProperties,
  marker: {
    flex: "0 0 40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  } as CSSProperties,
  markerCircleNew: {
    ...circleStyles,
    backgroundColor: "#ff4d4d", // Красный для новых
  } as CSSProperties,
  markerCircleCompleted: {
    ...circleStyles,
    backgroundColor: "#28a745", // Зелёный для завершённых
  } as CSSProperties,
};

export default styles;
