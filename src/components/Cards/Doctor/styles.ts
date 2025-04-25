import styled from "styled-components";

export const Card = styled.div`
  margin-top: 50px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.18);
  }
`;

export const PhotoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 133.33%;
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
  padding: 20px;
  text-align: center;
`;

export const FullName = styled.h3`
  font-size: 20px;
  color:  #9ceef1;
  color: #2e3a59; 

  margin-bottom: 8px;
  font-weight: bold;
`;

export const Specialization = styled.p`
  font-size: 16px;
  color: #4A5568;
  /* margin-bottom: 16px; */
`;

export const DetailsButton = styled.button`
  background-color:  #9ceef1;
  /* background-color: #28c3c8f5;  */
  background-color: #7a2141;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  font-size: 18px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  transition: background-color 0.3s;

  &:hover {
    background-color: #9dd7ef;
    background-color: #3b7f83;
    background-color: #641230;
  }
`;
