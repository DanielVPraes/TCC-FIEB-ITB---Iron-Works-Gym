import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from "../../Components/Menu/Sidebar"
import logo from "../../assets/logo.png"
import "./Equipamento.css"

const Equipamento = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="container-equipamento">
        <Header goto="/home" title="Equipamento" logo={logo} />
        <section className="equipamento-bordinha">
          <div className="equipamento-buttons">
            <Link to="/equipamentonovo" className="btn-equipamento">Novo Equipamento</Link>
            <Link to="/equipamentolista" className="btn-equipamento">Lista de Equipamentos</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Equipamento