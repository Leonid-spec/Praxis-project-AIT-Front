import styled from 'styled-components';

export const AdminMenuWrapper = styled.div`
  margin-top: 8px;
  
  position: relative;
`;

export const AdminIconWrapper = styled.div`
  cursor: pointer;
`;

// export const AdminIcon = styled.img`
//   width: 40px;
//   height: 40px;
//   object-fit: cover;
//   border-radius: 50%;
// `;

export const AdminIcon = styled.div`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  overflow: hidden;
  z-index: 10;
`;

export const DropdownItem = styled.div`
  font-size: 1.2rem;
  display: grid;
  min-width: 200px;
  grid-template-columns: 30% 70%;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #e6dcdc;
  }
  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
`;