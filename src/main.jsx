import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.log('=== 2. MAIN.JSX LOADED ===')
console.log('React imported successfully')
console.log('App.jsx imported successfully')
console.log('index.css imported successfully')
console.log('About to render <App /> into #root div')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

console.log('React app rendered into DOM')
