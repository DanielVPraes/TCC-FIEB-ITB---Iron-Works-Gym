import { Link, useNavigate } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'
import logo from '../../assets/logo.png'
import { useState, useEffect } from "react"
import MensagemService from "../../services/MensagemService"
import './Mensagem.css'

const Mensagem = () => {

    const navigate = useNavigate();

    const goTo = (id) => {
        navigate(`/mensagemler/${id}`)    
    }

    const [mensagens, setMensagens] = useState([]);

    useEffect(() => {
        MensagemService.findAll()
            .then((response) => {
                setMensagens(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div className="layout">
            
            <Sidebar />

            <div className="container-mensagem">

                <Header
                    goto={'/home'}
                    title={'Mensagem'}
                    logo={logo}
                />

                <section className="mensagem-bordinha">

                    <table className="table-mensagem">

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Data</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Abrir</th>
                            </tr>
                        </thead>

                        <tbody>

                            {mensagens.map((mensagem) => (

                                <tr key={mensagem.id}>

                                    <td>{mensagem.id}</td>
                                    <td>{mensagem.dataMensagem}</td>
                                    <td>{mensagem.email}</td>
                                    <td>{mensagem.statusMensagem}</td>
                                    <td>
                                        <button
                                            onClick={() => goTo(mensagem.id)}
                                            className="button-mensagem"
                                        >
                                            Abrir
                                        </button>
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

export default Mensagem