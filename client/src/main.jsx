import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import SmoothScrolling from './components/ui/smoothScrolling'
createRoot(document.getElementById('root')).render(
  <SmoothScrolling>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SmoothScrolling>
);
