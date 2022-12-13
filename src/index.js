import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios'
import { Auth } from './pages/auth/Auth'
 
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Auth>
    <App />
    </Auth>
  </React.StrictMode>
);


