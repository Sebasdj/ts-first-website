import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import type { User as IUser } from './types.d'
import { User as validUser } from './consts'
import './styles.css'

import Login from './components/Login'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Gallery from './components/Gallery'

interface Props { }
export const App: React.FC<Props> = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userName, setUserName] = useState('')

  const handleLogin = (user: IUser) => {
    if (user.email === validUser.email &&
      user.password === validUser.password
    )
    {
      setIsAuthenticated(true)
      setUserName(validUser.name)
    } else {
      alert('Usuario o contraseña incorrecta')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUserName('')
  }

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <>
          <img 
            src="../public/bg3.png" 
            alt="fondo"
            className='home-background'/>
            <Navbar 
            onLogout={handleLogout} 
            userName={userName}
          />
          <main className="content-container">
            <div className="content">
              <Routes>
                <Route 
                  path='/' 
                  element={<Home userName={userName}/>} 
                />
                <Route 
                  path='/about' 
                  element={<About />} 
                />
                <Route 
                  path='/gallery' 
                  element={<Gallery />} 
                />
              </Routes>
            </div>
          </main>
        </>
      ) : (
        <Routes>
          <Route path='/*' element={<Login onLogin={handleLogin}/>} />
        </Routes>
      )}
    </BrowserRouter>
  )
}

export default App
