import styled from "styled-components";

export const LanguageIconWrapper = styled.div`
  position: relative;
  margin-top: 10px;

  @media (max-width: 768px) {
    margin-top: 6px;
  }

  @media (max-width: 340px) {
    margin-top: 2px;
  }
`;

export const IconStyle = styled.div`
  color: #7a2141;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 340px) {
    font-size: 1rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  /* justify-content: space-around; */
  /* align-content: center; */
  /* align-items: center; */
  /* text-align: center; */
`;

export const LanguagePanel = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px 10px 20px 10px;
  width: 200px;
  z-index: 10;

  @media (max-width: 1980px) {
    padding: 20px 20px 30px 10px;
  }

  @media (max-width: 1024px) {
    padding: 10px 10px 20px 10px;
  }

  @media (max-width: 430px) {
    left: -60px;
  }

  @media (max-width: 340px) {
    left: -80px;
  }
`;

export const LanguageLink = styled.a`
  color: #7a2141;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;

  /* &:hover {
    text-decoration: underline;
  } */

  @media (max-width: 1980px) {
    padding: 20px 20px 30px 10px;
  }

  @media (max-width: 1024px) {
    padding: 10px 10px 20px 10px;
  }

  @media (max-width: 300px) {
    left: -20px;
  }
`;

export const Divider = styled.span`
  margin: 0 5px;
  color: #7a2141;
  font-size: 18px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Напівпрозорий чорний фон */
  z-index: 5;
`;
