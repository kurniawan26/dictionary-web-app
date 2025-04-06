import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FontProvider } from './context/SwitchFontContext.tsx'
import { DarkModeProvider } from './context/DarkModeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
      <FontProvider>
        <App />
      </FontProvider>
    </DarkModeProvider>
  </StrictMode>,
)
