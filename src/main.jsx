import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './routes/main.routes'
import './index.css'
import './global.css'
import ContextWrapper from './contexts/Context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextWrapper>
      <App />
      <ToastContainer />
    </ContextWrapper>
  </React.StrictMode>
);