import { Link, useNavigate } from "react-router-dom"
import Header from "../../Components/Header/Header.jsx"
import Sidebar from "../../Components/Menu/Sidebar.jsx"
import logo from '../../assets/logo.png'
import { useEffect } from "react"
import EquipamentoService from "../../services/EquipamentoService.js"
import { useState } from "react"
import './Equipamento.css'
import './EquipamentoLista.css'


const EquipamentoLista = () => {
    const navigate = useNavigate();
    const goTo = () => {
        navigate('/')
    }
    const [equipamentos, setEquipamentos] = useState([]);
    useEffect(() => {
        EquipamentoService.findAll().then(
            (response) => {
                const equipamentos = response.data;
                setEquipamentos(equipamentos);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);
    const inativar = (id) => {
        EquipamentoService.inativar(id).then(
            (response) => {
                console.log(response.data.message);
                window.location.reload();
            }, (error) => {
                const message = error.response.data.message;
                console.log(message);
            }
        )
    }
    const ativar = (id) => {
        EquipamentoService.ativar(id).then(
            (response) => {
                console.log(response.data.message);
                window.location.reload();
            }, (error) => {
                const message = error.response.data.message;
                console.log(message);
            }
        )
    }
    return (
        <div className="layout">
            <Sidebar />
            <div className="container-equipamento">
            <Header goto="/equipamento" title="Lista de Equipamentos" logo={logo} />
            <section className="equipamento-bordinha">
                <div>
                    <table className="table-equipamento">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nome</th>

                                <th scope="col">Quantidade</th>

                                <th scope="col">Status</th>
                                <th scope="col">INATIVAR</th>
                            </tr>
                        </thead>
                        <tbody>
                            {equipamentos?.map((equipamento) => (
                                <tr key={equipamento.id}>
                                    <td>{equipamento.id}</td>
                                    <td>{equipamento.nome}</td>
                                    <td>{equipamento.quantidade}</td>
                                    <td>{equipamento.statusEquipamento}</td>
                                    <td>
                                        <button type="button" onClick={() => ativar(equipamento.id)}
                                            className="btn-equipamento-ativar">
                                            <i className="bi bi-envelope-open me-2"></i>Ativar
                                        </button>
                                        <button type="button" onClick={() => inativar(equipamento.id)}
                                            className="btn-equipamento-inativar">
                                            <i className="bi bi-envelope-open me-2"></i>Inativar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            </div>
        </div>
    )
}
export default EquipamentoLista