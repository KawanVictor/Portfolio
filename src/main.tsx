import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Fonte servida pelo próprio site (sem pedir ao Google Fonts); "latin" já cobre os acentos do português
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/inter/latin-700.css';
import '@fontsource/inter/latin-800.css';
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
