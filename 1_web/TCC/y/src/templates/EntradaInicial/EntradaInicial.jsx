import React from 'react'
import './EntradaInicial.css'
import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"

const EntradaInicial = () => {
  return (
    <div id='entradaInicialContainer'>
      <div id="circle"> 
        <div id="contentCircle">
          <h1 id="bemVindoADM">Bem Vindo</h1>
          <Link to={'/login'} id="btnLogin">LOGIN</Link>
        </div>
      </div>        
      <div id='contentRight'>
        <div id="divLogo">
          <img src={Logo} alt="Logo Iron Works Gym" id="logo"/>
        </div>
        <Link to={'/sobrenos'} id="linkSobreNos">SOBRE NÓS</Link>
      </div>
    </div>
  )
}

export default EntradaInicial
