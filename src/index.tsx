import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store'; 
import App from './App';
import { ModalProvider } from './components/Modal/ModalContext';

console.log('Store passed to Provider:', store);

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found in HTML.');
}

const root = ReactDOM.createRoot(rootElement!);
root.render(
  <Provider store={store}>
     <ModalProvider>
      <App />
    </ModalProvider>
  </Provider>
);
