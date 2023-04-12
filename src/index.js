import React from 'react';
// import ReactDOM from 'react-dom';

import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react'
import { App } from 'components/App/App';
import { Painting } from 'components/App/App';
import './index.css';
import { theme } from "./contants/theme";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>

  </React.StrictMode>
);


