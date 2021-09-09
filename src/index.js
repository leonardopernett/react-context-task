import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './tailwind.css'
import './index.scss';
import App from './routes/Router';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />,
      <ToastContainer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
