import React from 'react';
import ReactDOM from 'react-dom/client';
import SnackbarProvider from 'react-simple-snackbar';
import App from './App';
import { GlobalStyle } from './core/theme';
import { ThemeProvider } from './core/theme/theme-provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <ThemeProvider>
    <React.StrictMode>
      <GlobalStyle />
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </React.StrictMode>
  </ThemeProvider>,
);
