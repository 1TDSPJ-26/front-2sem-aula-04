import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import Eduardo from './components/Nome/Eduardo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Eduardo />
  </StrictMode>,
)
