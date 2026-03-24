import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './templates/App/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Components/AppRoutes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
) 
