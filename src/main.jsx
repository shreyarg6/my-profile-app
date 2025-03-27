import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ModeProvider } from "./contexts/ModeContext"; 

createRoot(document.getElementById("root")).render(
    // <StrictMode>
  <StrictMode>
    <ModeProvider>
      <App />
    </ModeProvider>
  </StrictMode>
    // </StrictMode>

);