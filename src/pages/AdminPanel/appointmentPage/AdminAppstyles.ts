const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto", // Центрирование контейнера
    textAlign: "center" as "center", // Центрирование текста
  },
  heading: {
    textAlign: "center" as "center", // Центровка заголовка
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  loading: {
    textAlign: "center" as "center", // Уточнение типа
    fontSize: "16px",
    color: "#888",
    padding: "20px",
  },
  error: {
    textAlign: "center" as "center", // Аналогично
    fontSize: "16px",
    color: "red",
    padding: "20px",
  },
  filterContainer: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "20px",
  },
  filterButton: {
    padding: "10px 15px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  filterButtonAll: {
    backgroundColor: "#007bff", // Синий цвет для кнопки "Все"
    color: "#fff",
    borderRadius: "10px",
  },
  filterButtonNew: {
    backgroundColor: "#ff4d4d", // Красный цвет
    color: "#fff",
    borderRadius: "10px",
  },
  filterButtonInProgress: {
    backgroundColor: "#ffc107", // Желтый цвет
    color: "#fff",
    borderRadius: "10px",
  },
  filterButtonCompleted: {
    backgroundColor: "#28a745", // Зеленый цвет
    color: "#fff",
    borderRadius: "10px",
  },
  filterButtonActive: {
    opacity: "0.8", // Акцент на активной кнопке
  },
  markerCircleNew: {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "#ff4d4d", // Красный круг
    marginRight: "15px",
  },
  markerCircleInProgress: {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "#ffc107", // Желтый круг
    marginRight: "15px",
  },
  markerCircleCompleted: {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "#28a745", // Зеленый круг
    marginRight: "15px",
  },
  appointmentRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginBottom: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
  },
  appointmentRowHover: {
    backgroundColor: "#f9f9f9", // Ховер-эффект
  },
  marker: {
    flex: "0 0 50px", // Фиксированная ширина для кружочков
  },
  clientName: {
    flex: "1", // Имя клиента занимает доступное пространство
    fontWeight: "bold",
  },
  service: {
    flex: "1", // Услуга
  },
  date: {
    flex: "0 0 160px", // Дата фиксированной ширины
    textAlign: "right" as "right", // Текст по правому краю
  },
  moreInfoButton: {
    marginLeft: "20px",
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "10px", // Закругленные углы
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default styles;
