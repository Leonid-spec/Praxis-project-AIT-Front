import styled from 'styled-components';

export const ModalStyles = {
  overlay: {
    zIndex: 3, 
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
  content: {
    zIndex: 4,
    position: 'absolute' as const,
    top: '20px',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translateX(-50%)',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '600px',
    width: '90%',
    maxHeight: '90vh', 
    boxSizing: 'border-box' as const,
  },
};

export const ModalContentContainer = styled.div`
  overflow-y: auto; 
  padding-right: 10px; 

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 8px;
    border: 2px solid #f1f1f1;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #bbb;
  }

  scrollbar-width: thin;
  scrollbar-color: #ccc #f1f1f1;
`;

export const ButtonCloseContainer = styled.div`
position: sticky;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
`;
