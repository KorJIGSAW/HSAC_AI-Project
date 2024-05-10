import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from 'styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

const root = ReactDOM.createRoot(document.getElementById('wrapper'));
root.render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </ThemeProvider>
);