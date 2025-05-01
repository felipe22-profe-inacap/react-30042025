import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'
import AppProfe from './AppProfe.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProfe />  
  </StrictMode>,
)
