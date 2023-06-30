import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Controller from './Context/Controller.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Controller>
      <App />
    </Controller>
  </React.StrictMode>,
)
