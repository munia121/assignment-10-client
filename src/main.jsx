import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/Routes/Routes.jsx'
import ProviderContext from './components/ProviderContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderContext>
      <RouterProvider router={router} />
    </ProviderContext>
  </React.StrictMode>,
)
