import React from 'react';
// import ReactDOM from 'react-dom';

import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react'
import { App } from 'components/App/App';
// import { Painting } from 'components/App/App';
import './index.css';
import { theme } from "./contants/theme";
// import { ColectionsApp } from 'components/colections/colectionsApp';
import { HoocksApp } from 'hoocks/HoocksApp/HoocksApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    {/* <App /> */}
    <HoocksApp />
    {/* <ColectionsApp /> */}
    </ThemeProvider>

  </React.StrictMode>
);


