import { useState } from 'react'
import type { User as IUser } from '../types.d'
import key from '../assets/key.png'

interface Props {
  onLogin: (user: IUser) => void
}

const Login: React.FC<Props> = ({ onLogin }) => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onLogin({
      name: '', 
      email: email, 
      password: password
    })
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-image">
          <img 
            src={key} 
            alt="Imagen de inicio de sesión" 
            className="login-image" />
        </div>
        <div className="login-form">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email-input">Email:</label>
              <input 
                type="email" 
                id="email-input"
                className='input-field'
                onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="pasword-input">Contraseña:</label>
              <input 
                type="password" 
                id="pasword-input"
                className='input-field'
                onChange={e => setPassword(e.target.value)} />
            </div>
            <button className="login-button">Iniciar Sesión</button>
          </form>
          <div className="login-links">
            <a href="#">Olvidaste tu contraseña</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login