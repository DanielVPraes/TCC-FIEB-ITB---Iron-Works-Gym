import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header.jsx"
import Sidebar from "../../Components/Menu/Sidebar.jsx"
import "./Usuario.css"

const Usuario = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="container-usuario">
        <Header goto="/home" title="Usuário" />
        <section className="usuario-bordinha">
          <div className="usuario-buttons">
            <Link to="/usuarioslista" className="btn-usuario">Lista de Usuários</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Usuario