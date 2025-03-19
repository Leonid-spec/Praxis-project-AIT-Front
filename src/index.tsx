//import React from 'react';
//import './GlobalStyles.css';
import ReactDOM from 'react-dom/client'; // Используем 'react-dom/client' вместо 'react-dom'
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './styles/GlobalStyles.css';


const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // Создаём root
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}