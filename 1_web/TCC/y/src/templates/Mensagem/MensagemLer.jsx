import { useParams } from "react-router-dom"
import Header from "../../Components/Header/Header.jsx"
import Sidebar from "../../Components/Menu/Sidebar.jsx"
import logo from '../../assets/logo.png'
import { useEffect, useState } from "react"
import MensagemService from "../../services/MensagemService.js"
import './Mensagem.css' 
import './MensagemLer.css' 


const MensagemLer = () => {
     
    const objectValues = {
        id: "",
        dataMensagem: "",
        emissor: "",
        email: "",
        telefone: "",
        texto: "",
        statusMensagem: "",
    };

    const [mensagem, setMensagem] = useState(objectValues);

    const { id } = useParams();

    useEffect(() => {

        MensagemService.findById(id)
            .then((response) => {

                setMensagem(response.data);

            })
            .catch((error) => {

                console.log(error);

            })

    }, [id]);


    const inativar = (id) => {

        MensagemService.inativar(id)
            .then(() => {

                window.location.reload();

            })
            .catch((error) => {

                console.log(error.response?.data?.message);

            });

    }


    const marcarComoLida = (id) => {

        MensagemService.marcarComoLida(id)
            .then(() => {

                window.location.reload();

            })
            .catch((error) => {

                console.log(error.response?.data?.message);

            });

    }


    return (

        <div className="layout">

            <Sidebar />

            <div className="container-mensagem">

                <Header
                    goto={'/mensagem'}
                    title={'Ler Mensagem'}
                    logo={logo}
                />

                <section className="mensagem-bordinha">

                    <form className="form-mensagem">

                        <div className="form-row">

                            <div className="form-group">
                                <label>ID:</label>
                                <input
                                    type="text"
                                    value={mensagem.id}
                                    readOnly
                                />
                            </div>

                            <div className="form-group">
                                <label>Data:</label>
                                <input
                                    type="text"
                                    value={mensagem.dataMensagem}
                                    readOnly
                                />
                            </div>

                            <div className="form-group">
                                <label>Status:</label>
                                <input
                                    type="text"
                                    value={mensagem.statusMensagem}
                                    readOnly
                                />
                            </div>

                        </div>


                        <div className="form-group">

                            <label>Email:</label>

                            <input
                                type="email"
                                value={mensagem.email}
                                readOnly
                            />
                        </div>

                        <div className="form-group">
                            <label>Mensagem:</label>
                            <textarea rows="6" value={mensagem.texto} readOnly/>
                        </div>
                        <div className="form-buttons">
                            <button type="button" onClick={() => marcarComoLida(mensagem.id)} className="btn-mensagem-ativar">Marcar como lida
                            </button>
                            <button type="button" onClick={() => inativar(mensagem.id)} className="btn-mensagem-inativar">Inativar
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default MensagemLer