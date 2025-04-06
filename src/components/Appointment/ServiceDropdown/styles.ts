import styled from 'styled-components';

export const DropdownContainer = styled.div`
position: relative;
width: 100%;
`;

export const FormTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #333333;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const DropdownArrow = styled.span`
margin-left: 10px;
font-size: 12px;
`;

export const DropdownList = styled.ul`
position: absolute;
top: 100%;
left: 0;
right: 0;
background: #fff;
border: 1px solid #ddd;
border-top: none;
border-radius: 0 0 6px 6px;
max-height: 200px;
overflow-y: auto;
z-index: 10;
list-style: none;
margin: 0;
padding: 0;
`;

export const DropdownListItem = styled.li`
padding: 10px 12px;
cursor: pointer;
font-size: 16px;
color: #333;
&:hover {
  background-color: #f2f2f2;
}
`;

export const DropdownHeader = styled.div`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: #333;
`;
