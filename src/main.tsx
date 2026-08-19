import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App";

const documentRoot = document.getElementById('root')
if(!documentRoot) {throw new Error('Something went wrong')}

createRoot(documentRoot).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
