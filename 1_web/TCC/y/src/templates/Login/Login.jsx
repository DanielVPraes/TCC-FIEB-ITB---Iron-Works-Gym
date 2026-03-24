import React, { useState } from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'
import { Link, useNavigate } from "react-router-dom"
import UsuarioService from '../../services/UsuarioService'


const Login = () => {

  const navigate = useNavigate();

  const goto = () => {
    navigate("/home");
  }

  const backto = () => {
    navigate("/");
  }

  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(formData => ({ ...formData, [name]: value }))
  }

  const editar = (id) => {
    navigate(`/usuarioeditar/` + id)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    UsuarioService.signin(formData.email, formData.senha).then(
      () => {
        const userJson = localStorage.getItem("user");
        const user = JSON.parse(userJson || '{}');
        if (user.statusUsuario == 'ATIVO') {
          navigate("/home");
        } else if (user.statusUsuario == 'TROCAR_SENHA') {
          navigate(`/newpass/` + user.id);
          //window.location.reload(); ordnael@email.com.br
        }

      },
      (error) => {
        const respMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(respMessage);
      }

    );
  };

  return (
    <div>

      <div className='corpo-login'>

        <img src={Logo} alt="" className="logo-login" />

        <div className="caixa">
          <form onSubmit={handleSubmit} >
            <h1 className='h1-L'>Login</h1>
            <div className='input-box'>
              <input type="email" placeholder='Email' required 
              name="email"
              value={formData.email || ""}
              onChange={handleChange}  />
            </div>
            <div className='input-box'>
              <input type="password" placeholder='Senha' required
                       name="senha"
                       value={formData.senha || ""}
                       onChange={handleChange} />
            </div>

            <div className='esqueceu-senha-L'>

            </div>
            <button type='submit' className="btn-login">ENTRAR</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
