import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css'; // Asegúrate de tener este archivo para darle estilo


function App() {
  // Estos "estados" guardan lo que el usuario escribe en los inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Este estado controla si la contraseña se ve o está oculta
  const [mostrarPassword, setMostrarPassword] = useState(false);
  
  const [error, setError] = useState(''); // <-- Nuevo estado para manejar errores
  const navigate = useNavigate(); // <-- Inicializamos el hook de navegación
  
  // Función que se ejecuta al presionar "Iniciar sesión"
  const manejarEnvio = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    
    // 1. Creamos nuestros datos de prueba (Mock Data)
    const credencialesSimuladas = {
      email: 'magdiel@purecode.com',
      password: 'admin'
    };

    // 2. Validamos las credenciales ingresadas contra las simuladas
    if (email === credencialesSimuladas.email && password === credencialesSimuladas.password) {
      // Si las credenciales son correctas, redirigimos al dashboard
      setError(''); // Limpiamos errores
      console.log('Inicio de sesión exitoso. Redirigiendo...');
      navigate('/dashboard');
    } else  {
      // Si el usuario ha ingresado algo pero no coincide, mostramos un error
      setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  };
  
  return (
    <div className="contenedor-principal">
      
      {/* Encabezado (Logo y Título de la app) */}
      <header className="encabezado-marca">
        {/* Sustituye la URL por la ruta real de tu logo de la gotita */}
        <img src="/icono.png" alt="Logo PureCode" className="logo" />
        <h1 className="titulo-marca">PureCode</h1>
      </header>

      {/* Tarjeta blanca del formulario */}
      <main className="tarjeta-login">
        <h2 className="titulo-bienvenida">Bienvenido</h2>
        <p className="subtitulo">Inicia sesión para monitorear tus redes de sensores.</p>

        <form onSubmit={manejarEnvio}>
          
          {/* Campo de Email */}
          <div className="grupo-input">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              placeholder="ejemplo@purecode.io"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Campo de Contraseña */}
          <div className="grupo-input">
            <div className="cabecera-password">
              <label htmlFor="password">PASSWORD</label>
              <a href="#" className="link-olvido">¿Olvidaste tu contraseña?</a>
            </div>
            
            <div className="contenedor-password">
              <input
                type={mostrarPassword ? "text" : "password"}
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="boton-ojito"
                onClick={() => setMostrarPassword(!mostrarPassword)}
              >
                {/* Puedes cambiar esto por un ícono SVG o de una librería */}
                {mostrarPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Botón de Enviar */}
          <button type="submit" className="boton-enviar">
            Iniciar sesión <span>➔</span>
          </button>
          
        </form>

        <hr className="linea-divisora" />
      </main>

      {/* Enlace de Registro (Fuera de la tarjeta) */}
      <div className="enlace-registro">
        ¿No tienes cuenta? <Link to="/registro">Regístrate</Link>
      </div>

    </div>
  );
}

export default App;