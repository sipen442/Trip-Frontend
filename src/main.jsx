import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/authContext.jsx'
import { ThemProvider } from './context/ThemeContext.jsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster richColors position='top-right' />
    <ThemProvider>
    <AuthProvider>
       <App />
    </AuthProvider>
    </ThemProvider>
   
  </StrictMode>,
)
