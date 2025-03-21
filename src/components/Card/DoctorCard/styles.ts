const styles: { [key: string]: React.CSSProperties } = {
    card: {
      background: '#fff',
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      textAlign: 'center', // Значение соответствует допустимому типу TextAlign
      boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.25)',
    },
    photo: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px 8px 0 0',
    },
    info: {
      marginTop: '10px',
    },
    degree: {
      fontSize: '1.1rem',
      color: '#333',
    },
    name: {
      fontSize: '1.3rem',
      color: '#000',
    },
    specialization: {
      fontSize: '1rem',
      color: '#555',
    },
    button: {
      marginTop: '10px',
      padding: '10px 15px',
      color: '#fff',
      backgroundColor: '#4a90e2',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
  };
  
  export default styles;
  