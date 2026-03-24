import { Link, useNavigate } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from "../../Components/Menu/Sidebar"
import logo from "../../assets/logo.png"
import { useState, useEffect } from "react"
import AgendamentoService from "../../services/AgendamentoService"
import "./Agendamento.css"

const Agendamento = () => {

    const navigate = useNavigate()

    const goTo = (id) => {
        navigate(`/agendamentoler/${id}`)
    }

    const [agendamento, setAgendamento] = useState([])

    useEffect(() => {
        AgendamentoService.findAll().then(
            (response) => {
                const agendamento = response.data
                setAgendamento(agendamento)
                console.log(agendamento.usuarioId)
            }
        ).catch((error) => {
            console.log(error)
        })
    }, [])

    const inativar = (id) => {
        AgendamentoService.inativar(id).then(
            (response) => {
                console.log(response.data.message)
                window.location.reload()
            }, (error) => {
                const message = error.response.data.message
                console.log(message)
            }
        )
    }

    const ativar = (id) => {
        AgendamentoService.ativar(id).then(
            (response) => {
                console.log(response.data.message)
                window.location.reload()
            }, (error) => {
                const message = error.response.data.message
                console.log(message)
            }
        )
    }

    return (
        <div className="layout">
            <Sidebar />
            <div className="container-agendamento">
                <Header goto="/home" title="Agendamento" logo={logo} />
                <section className="agendamento-bordinha">
                    <table className="table-agendamento">
                        <thead>
                            <tr>
                                <th>Data Disponivel</th>
                                <th>Horário Disponivel</th>
                                <th>Usuário ID</th>
                                <th>Equipamento ID</th>
                                <th>StatusAgendamento</th>
                                <th>Inativar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {agendamento?.map((agendamento) => (
                                <tr key={agendamento.id}>
                                    <td>{agendamento.dataDisponivel}</td>
                                    <td>{agendamento.horarioDisponivel}</td>
                                    <td>{agendamento.usuarioId.id}</td>
                                    <td>{agendamento.equipamentoId.id}</td>
                                    <td>{agendamento.statusAgendamento}</td>
                                    <td>
                                        <button type="button" onClick={() => ativar(agendamento.id)} className="btn-agendamento-ativar">Ativar</button>
                                        <button type="button" onClick={() => inativar(agendamento.id)} className="btn-agendamento-inativar">Inativar</button>
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

export default Agendamento