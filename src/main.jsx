import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Registro from './Registro.jsx' // Tu nuevo archivo de Registro
import Dashboard from './Dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Cuando el usuario entre a la ruta principal "/", se mostrará tu App.jsx (Login) */}
        <Route path="/" element={<App />} />
        {/* Cuando el usuario vaya a "/registro", se mostrará el componente Registro */}
        <Route path="/registro" element={<Registro />} />
        {/* Creamos la ruta para el dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </StrictMode>,
)
