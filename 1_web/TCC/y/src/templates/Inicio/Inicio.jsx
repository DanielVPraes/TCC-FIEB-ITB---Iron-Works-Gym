import React from 'react'
import './Inicio.css'
import {Link} from "react-router-dom"


const Inicio = () => {
  return (
    <div>
       <nav>
        <ul className="menu">
        <li><Link to={'/login'}>Login</Link></li>
        </ul>
      </nav>
      <div className="texto1">
      <h1>INICIO</h1>
      </div>
    </div>
  )
}

export default Inicio
