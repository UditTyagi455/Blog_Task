import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import DataOfApi from './store/ApiContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <DataOfApi>
      <App />
      </DataOfApi>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
