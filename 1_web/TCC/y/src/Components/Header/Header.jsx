import { Link } from "react-router-dom";
import './Header.css'

const Header = ({ goto, title }) => {

    return (

        <div className="header-container">
            <Link to={goto} className="btn-voltar">
                Voltar
            </Link>
            <span className="header-title">
                {title}
            </span>
        </div>
    )
}

export default Header