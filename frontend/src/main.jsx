import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
 <UserContext>
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
 </BrowserRouter>
 </UserContext>,
)
