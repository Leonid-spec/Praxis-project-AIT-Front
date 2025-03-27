import styled from "styled-components";

export const container = {
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
  boxSizing: "border-box",
};

export const header = {
  padding: "20px",
  marginBottom: "10px",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "24px",
};

export const carouselContainer = {
  position: "relative",
  overflow: "hidden",
  padding: "20px 0",
};

export const grid = {
  display: "grid",
  gridTemplateColumns: "10% 80% 10%",
  gap: "30px",
  alignItems: "center",
  marginTop: "30px",
};

export const emptySpace = {
  width: "100%",
  height: "100%",
};

export const slickContainer = {
  position: "relative",
  overflow: "hidden",
};

export const swiper = {
  width: "100%",
  height: "100%",
};

export const slide = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "15px",
  overflow: "hidden",
  transition: "transform 0.3s ease",
};

export const image = {
  width: "100%",
  height: "100%",
  objectFit: "cover" as "cover",
  borderRadius: "15px",
  cursor: "pointer",
  transition: "transform 0.3s ease",
};

export const arrowLeft = {
  position: "absolute",
  left: "-50px",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 10,
  cursor: "pointer",
  fontSize: "24px",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  color: "#fff",
  borderRadius: "50%",
  padding: "10px",
};

export const arrowRight = {
  position: "absolute",
  right: "-50px",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 10,
  cursor: "pointer",
  fontSize: "24px",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  color: "#fff",
  borderRadius: "50%",
  padding: "10px",
};
