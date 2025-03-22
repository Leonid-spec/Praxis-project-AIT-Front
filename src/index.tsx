
import './utils/i18n';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
// import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <>
    <App />
  </>
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { store } from './store/store'; // Імпортуємо ваше сховище
// import App from './App';

// ReactDOM.render(
//   <Provider store={store}> {/* Обгортаємо в Provider */}
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );


