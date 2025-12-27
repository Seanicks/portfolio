import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Force dark theme for the entire app
try {
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
} catch (e) {
  // ignore (e.g., restricted environment)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

