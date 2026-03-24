import { Link } from "react-router-dom";
import './Sidebar.css';
import logo2 from "../../assets/logo2.png"

const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="d-flex justify-content-around align-items-center px-2 py-4 border-bottom rounded">
                <img src={logo2} alt="logo2" className="m-logo" style={{ width: '150px', height: 'auto', maxWidth: '100%', objectFit: 'contain' }} />
            </div>
            <nav className="nav flex-column" style={{marginTop: '-20px'}}>
                <Link className="nav-link" to={'/mensagem'}>Mensagem</Link>
                <Link className="nav-link" to={'/equipamento'}>Equipamento</Link>
                <Link className="nav-link" to={'/usuario'}>Usuário</Link>
                <Link className="nav-link" to={'/agendamento'}>Agendamento</Link>
                <Link className="nav-link" to={'/sobrenosdois'}>Sobre Nós</Link>
            </nav>
        </div>
    )
}

export default Sidebar