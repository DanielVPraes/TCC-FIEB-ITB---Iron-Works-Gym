import { Link, useParams } from "react-router-dom"
import Header from "../../Components/Header/Header.jsx"
import Sidebar from "../../Components/Menu/Sidebar.jsx"
import logo from "../../assets/logo.png"
import { useEffect, useRef, useState } from "react"
import UsuarioService from "../../services/UsuarioService.js"
import "./UsuarioEditar.css"

const UsuarioEditar = () => {

    const objectValues = {
        id: null,
        nome: "",
        dataNascimento: "",
        telefone: "",
        email: "",
        senha: "",
        cpf: "",
        torre: "",
        apartamento: "",
        statusUsuario: ""
    }

    const [usuario, setUsuario] = useState(objectValues)
    const { id } = useParams()
    const _dbRecords = useRef(true)
    const [formData, setFormData] = useState({})
    const [successful, setSuccessful] = useState(false)
    const [message, setMessage] = useState()

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUsuario(usuario => ({ ...usuario, [name]: value }))
    }

    useEffect(() => {
        UsuarioService.findById(id).then(
            (response) => {
                const usuario = response.data
                setUsuario(usuario)
            }
        ).catch((error) => {
            console.log(error)
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage("")
        setSuccessful(false)

        UsuarioService.alterar(id, usuario).then(
            (response) => {
                setMessage(response.data.message)
                setSuccessful(true)
            }, (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString()

                setMessage(resMessage)
                setSuccessful(false)
            }
        )
    }

    return (
        <div className="layout">
            <Sidebar />
            <div className="container-usuario">
                <Header goto="/usuario" title="Editar Usuário" logo={logo} />
                <section className="usuario-bordinha">

                    {!successful && (
                        <form className="form-usuario" onSubmit={handleSubmit}>

                            <div className="form-group small">
                                <label>ID</label>
                                <input type="text" readOnly name="id" value={usuario.id || ""} />
                            </div>

                            <div className="form-group">
                                <label>Nome</label>
                                <input type="text" name="nome" value={usuario.nome || ""} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" readOnly name="email" value={usuario.email || ""} />
                            </div>

                            <div className="form-group">
                                <label>Data de Nascimento</label>
                                <input type="text" name="dataNascimento" value={usuario.dataNascimento || ""} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Status</label>
                                <input type="text" readOnly name="statusUsuario" value={usuario.statusUsuario || ""} />
                            </div>

                            <div className="form-group small">
                                <label>Torre</label>
                                <input type="text" name="torre" value={usuario.torre || ""} onChange={handleChange} />
                            </div>

                            <div className="form-group small">
                                <label>Apartamento</label>
                                <input type="text" name="apartamento" value={usuario.apartamento || ""} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Telefone</label>
                                <input type="text" name="telefone" value={usuario.telefone || ""} onChange={handleChange} />
                            </div>

                            <div className="form-button">
                                <button type="submit" className="btn-usuario">Salvar</button>
                            </div>

                        </form>
                    )}

                    {message && (
                        <div className="message-box">
                            <div className={"message " + (successful ? "success" : "error")}>
                                {message}
                            </div>
                        </div>
                    )}

                </section>
            </div>
        </div>
    )
}

export default UsuarioEditar