import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import ToggleColorMode from './utils/ToggleColorMode';
import App from './components/App';
import store from './app/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToggleColorMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ToggleColorMode>
    </Provider>
  </React.StrictMode>,
);
