import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/AppContext.jsx' // 👈 import your context
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider> {/* 👈 Wrap App inside your universal context */}
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
