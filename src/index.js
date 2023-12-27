import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeContextProvider } from './context/themeContext';
import {ThemeModeContextProvider} from './context/themeModeContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ThemeModeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </ThemeModeContextProvider>
    </ThemeContextProvider>
    </React.StrictMode>
);
