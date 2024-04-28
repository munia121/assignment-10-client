import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/Routes/Routes.jsx'
import ProviderContext from './components/ProviderContext.jsx'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderContext>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </ProviderContext>
  </React.StrictMode>,
)
