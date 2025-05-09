import styled from "styled-components";

export const Card = styled.div`
  margin: 20px 10px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  /* max-width: 500px; */
  /* min-height: auto; */
  /* min-width: 350px; */
  /* padding: 30px; */
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.18);
  }
`;

// export const PhotoContainer = styled.div`
//   background-color: #f0f0f0;
//   position: relative;
//   width: 100%;
//   height: 200px;
//   overflow: hidden;
// `;

// export const Photo = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

export const PhotoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 75%;
  background-color: #f0f0f0;
  overflow: hidden;
`;

export const Photo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;


export const Info = styled.div`
  padding: 16px;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 20px;
  color: #2e3a59;
  margin-bottom: 12px;
  font-weight: 700;
`;

export const DetailsButton = styled.button`
  background-color: #7a2141;
  color: white;
  padding: 10px 18px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5c0d2a;
  }
`;

export const InactiveText = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  /* background-color: rgba(18, 71, 162, 0.7); */
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 5px;
  font-weight: 600;
  z-index: 1;
`;

export const InactiveOverlay = styled.div`
  all: unset;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 2;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  z-index: 1;
  border-radius: 10px;
  margin: 0 !important;
  padding: 0;
`;
