import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BookStack from './BookStack.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookStack />
  </StrictMode>,
)
