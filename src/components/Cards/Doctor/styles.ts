import styled from "styled-components";

export const Card = styled.div`
  margin-top: 50px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  }
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

export const FullName = styled.h3`
  font-size: 20px;
  color: #475bce;

  margin-bottom: 8px;
  font-weight: bold;
`;

export const Specialization = styled.p`
  font-size: 16px;
  color: #4A5568;
  margin-bottom: 16px;
`;

export const DetailsButton = styled.button`
  background-color: #9dd7ef; 
  /* background-color: #9ceef1;  */
  /* background-color: #9ceef196;  */
  /* background-color: #28c3c8f5;  */
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 400;
  border: none;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #3549a5;
    /* background-color: #9dd7ef; */
  }
`;
