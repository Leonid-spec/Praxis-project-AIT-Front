import styled from "styled-components";

export const ContactsContainerMainPhoto = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 50px auto;
  align-items: center;

  @media (max-width: 910px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const WelcomeTextSubtitle = styled.p`
  color: #555555;
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  line-height: 1.5;

  span {
    color: #77c0eb;
    font-weight: bold;
  }
  

  @media (max-width: 768px) {
    font-size: clamp(1.2rem, 4vw, 1.4rem);
  }
`;

export const WelcomeTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const MainPhotosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  gap: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const MainPhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  padding: 20px;
  max-width: 600px;

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const MainPhoto = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  display: block;
`;

export const HighlightedSpan = styled.span`
  color: #77c0eb;
  font-weight: bold;
`;

const styles = {
  contactsPage: {
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
    display: "flex" as "flex",
    fontSize: "20px",
    flexDirection: "column"  as "column",
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
    flexDirection: "column"  as "column",
    flex: "1", // Гибкая высота, чтобы совпадала с leftInnerContainer
  },
  sprechzeiten: {
    display: "flex" as "flex",
    flexDirection: "column" as "column",
    gap: "20px",
    padding: "40p20px",
    backgroundColor:" #f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    flex: "1", // Гибкая высота
  },
  daysOfWeek: {
    padding: "0 0 0 5%",
    color: "#333",
    fontSize: "20px",
    lineHeight: "1.5",
  },
  mapContainer: {
    display: "flex" as "flex",
    flexDirection: "column" as "column",
    gap: "20px",
    marginTop: "30px",
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center" as const,
    maxWidth: "1200px",
    margin: "0 auto 50px",
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
    display: "flex" as "flex",
    alignItems: "center",
    marginTop: "10px",
  },
  iconCircle: {
    width: "50px",
    height: "50px",
    backgroundColor: "#A0EEF2",
    borderRadius: "50%",
    display: "flex" as "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    color: "#ffffff",
    marginRight: "10px",
  },
  arrowContainer: {
    marginTop: "20px",
    display: "flex" as "flex",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex" as "flex",
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
  }
};

export default styles;
