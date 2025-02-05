import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './Styles/Home.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="parent">
      <App />
    </div>
  </StrictMode>,
)
