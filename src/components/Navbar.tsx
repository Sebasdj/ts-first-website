import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'

interface Props {
  onLogout: () => void
  userName: string
}
const Navbar: React.FC<Props> = ({ onLogout, userName }) => {
  
  return (
    <nav className="navbar" style={navbarStyle}>
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />
        <span className='username'>{userName}</span>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/about'>Sobre nosotros</Link>
        </li>
        <li>
          <Link to='/gallery'>Galeria</Link>
        </li>
        <li>
          <button 
            onClick={onLogout} 
            className='logout-button'>
              Cerrar Sesión
          </button>
        </li>
      </ul>
    </nav>
  )
}

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#333',
  padding: '10px 20px',
  color: 'white', 
}

/* Estilos de la barra de navegación */
// .navbar {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     background: #333;
//     padding: 10px 20px;
//     color: white;
// }

// .navbar-left {
//     display: flex;
//     align-items: center;
// }
// .logo {
//     width: 40px;
//     height: 40px;
//     margin-right: 10px;
// }
// .username {
//     font-size: 18px;
//     font-weight: bold;
// }
// .navbar-menu {
//     display: flex;
//     align-items: center;
//     list-style: none;
//     gap: 15px;
// }

// .navbar-menu li {
//     display: inline;
// }
// .navbar-menu a, .logout-button {
//     color: white;
//     text-decoration: none;
//     background: none;
//     border: none;
//     font-size: 16px;
//     cursor: pointer;
// }

export default Navbar