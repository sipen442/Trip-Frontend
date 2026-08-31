import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/authContext.jsx'
import { ThemProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemProvider>
    <AuthProvider>
       <App />
    </AuthProvider>
    </ThemProvider>
   
  </StrictMode>,
)
