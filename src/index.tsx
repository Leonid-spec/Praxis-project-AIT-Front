import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Импорт Redux Provider
import { StrictMode } from 'react'; // Строгий режим
import App from './App'; // Ваш корневой компонент приложения
import store from './store/store'; // Подключение Redux store

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode> {/* Оборачиваем приложение в StrictMode */}
    <Provider store={store}> {/* Оборачиваем приложение в Provider */}
      <App />
    </Provider>
  </StrictMode>
);
