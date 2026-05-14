import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {CountContextProvider} from './context/CountContextProvider.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <CountContextProvider>
    <StrictMode>
      <App />
    </StrictMode>,
  </CountContextProvider>
)
