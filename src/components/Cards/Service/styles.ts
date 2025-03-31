import styled from "styled-components";

export const Card = styled.div`
  margin-top: 50px;
  background-color: #f9f9f9; 
  border-radius: 8px; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

export const PhotoContainer = styled.div`
  width: 100%;
  height: 250px;
  background-color: lightblue;
`;

export const Photo = styled.img`
   width: 100%;
  /* max-height: 400px; */
  max-height: 200px;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 22px;
  color: #2e3a59; 
  margin-bottom: 8px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #6a6a6a; 
  margin-bottom: 16px;
  line-height: 1.5; 
`;

export const DetailsButton = styled.button`
  background-color: #a0eef2; 
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 600; 
  border: none;
  cursor: pointer;
  font-size: 18px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s;
  &:hover {
    background-color: #89d4e3;   }
`;
