import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Router } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <App /> */}
    <Router />
    </BrowserRouter>
  </StrictMode>,
)