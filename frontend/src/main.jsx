import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/APP/App.jsx'
import FileUpload from './pages/PDF/Upload_PDF.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FileUpload/>
  </React.StrictMode>,
)
