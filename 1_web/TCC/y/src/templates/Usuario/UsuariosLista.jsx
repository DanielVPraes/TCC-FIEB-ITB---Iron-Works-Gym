import { Link, useNavigate } from "react-router-dom"
import Header from "../../Components/Header/Header.jsx"
import Sidebar from "../../Components/Menu/Sidebar.jsx"
import logo from "../../assets/logo.png"
import { useState } from "react"
import { useEffect } from "react"
import UsuarioService from "../../services/UsuarioService"
import "./UsuarioLista.css"
import './Usuario.css'

const UsuariosLista = () => {

  const navigate = useNavigate()

  const goTo = (id) => {
    navigate(`/usuarioeditar/${id}`)
  }

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    UsuarioService.findAll().then(
      (response) => {
        const usuarios = response.data
        setUsuarios(usuarios)
      }
    ).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div className="layout">
      <Sidebar />
      <div className="container-usuario">
        <Header goto="/usuario" title="Lista de Usuarios" logo={logo} />
        <section className="usuario-bordinha">
          <table className="table-usuario">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Data Nascimento</th>
                <th>Telefone</th>
                <th>Email</th>
                <th>Senha</th>
                <th>CPF</th>
                <th>Torre</th>
                <th>Apartamento</th>
                <th>Status</th>
                <th>Abrir</th>
              </tr>
            </thead>
            <tbody>
              {usuarios?.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.nome}</td>
                  <td>{usuario.dataNascimento}</td>
                  <td>{usuario.telefone}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.senha}</td>
                  <td>{usuario.cpf}</td>
                  <td>{usuario.torre}</td>
                  <td>{usuario.apartamento}</td>
                  <td>{usuario.statusUsuario}</td>
                  <td>
                    <button type="button" onClick={() => goTo(usuario.id)} className="button2-usuario">Abrir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}

export default UsuariosLista