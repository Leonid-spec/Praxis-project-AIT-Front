import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.tsx';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </StrictMode>
  </Provider>
);