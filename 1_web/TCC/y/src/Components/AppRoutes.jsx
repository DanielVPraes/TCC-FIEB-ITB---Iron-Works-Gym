import React from 'react'
import {Routes, Route, Router} from "react-router-dom"
import App from "../templates/App/App"
import Home from '../templates/Home/Home'
import Login from '../templates/Login/Login'
import Inicio from '../templates/Inicio/Inicio'
import EntradaInicial from '../templates/EntradaInicial/EntradaInicial'
import Usuario from '../templates/Usuario/Usuario'
import Mensagem from '../templates/Mensagem/Mensagem'
import UsuarioEditar from '../templates/Usuario/UsuarioEditar'
import UsuariosLista from '../templates/Usuario/UsuariosLista'
import Equipamento from '../templates/Equipamento/Equipamento'
import EquipamentoNovo from '../templates/Equipamento/EquipamentoNovo'
import EquipamentoLista from '../templates/Equipamento/EquipamentoLista'
import SobreNos from '../templates/SobreNos/SobreNos'
import SobreNosDois from '../templates/SobreNos/SobreNosDois'
import MensagemLer from '../templates/Mensagem/MensagemLer'
import Agendamento from '../templates/Agendamento/Agendamento'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App/>}/> 

        <Route path="/home" element={<Home/>}/>

        <Route path="/login" element={<Login/>}/>

        <Route path="/inicio" element={<Inicio/>} />

        <Route path="/entradainicial" element={<EntradaInicial/>} />

        <Route path="/usuario" element={<Usuario/>} />
        <Route path="/usuarioeditar/:id" element={<UsuarioEditar/>} />
        <Route path="/usuarioslista" element={<UsuariosLista/>} />

        <Route path="/mensagem" element={<Mensagem/>} />
        <Route path="/mensagemler/:id" element={<MensagemLer/>} />

        <Route path="/equipamento" element={<Equipamento/>} />
        <Route path="/equipamentonovo" element={<EquipamentoNovo/>} />
        <Route path="/equipamentolista" element={<EquipamentoLista/>} />

        <Route path="/sobrenos" element={<SobreNos/>} />
        <Route path="/sobrenosdois" element={<SobreNosDois/>} />
        
        <Route path="/agendamento" element={<Agendamento/>} /> 

      </Routes>
    </div>
  )
}

export default AppRoutes
