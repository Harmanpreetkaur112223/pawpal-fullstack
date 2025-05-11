import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/UserContext.jsx'
// import AdminContext from './context/AdminContext.jsx'
import AdminProvider from './context/AdminProvider.jsx'

createRoot(document.getElementById('root')).render(
  <AdminProvider>

 <UserContext>
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
 </BrowserRouter>
 </UserContext>,
  </AdminProvider>

)
