import React from 'react'
import './SobreNos.css'
import Logo from "../../assets/logo.png"
import D from "../../assets/danielFoto.png"
import E from "../../assets/eloiseFoto.png"
import L from "../../assets/lucasFoto.png"
import V from "../../assets/valdemarFoto.png"
import K from "../../assets/kauaFoto.png"
import { Link } from "react-router-dom"

const SobreNos = () => {

    return (
        <div className="sobreContainer">
            <img src={Logo} alt="Logo Iron Works Gym" className="logo"/>
            <div className="sobreContent">
                <div className="sobreTexto">
                    <h1>Iron Works Gym</h1>
                    <p>
                        Nosso projeto consiste em um sistema de agendamento de dias, horários e equipamentos, desenvolvido para facilitar a organização e a rotina dos moradores do condomínio que desejam manter uma vida mais saudável e ativa.
                    </p>
                    <p>
                        Sem esse tipo de controle, a academia pode enfrentar diversos problemas, como o uso simultâneo de um mesmo equipamento por diferentes usuários, gerando esperas desnecessárias, conflitos e reclamações.
                    </p>
                    <p>
                        Nosso objetivo é oferecer uma solução prática, eficiente e sustentável, promovendo organização, reduzindo conflitos e proporcionando mais comodidade para todos.
                    </p>
                    <p>
                        O projeto contará com uma versão web para administradores e uma versão mobile para os usuários realizarem seus agendamentos de forma simples e rápida.
                    </p>
                </div>
                <div className="sobreEquipe">
                    <h2>Conheça nossa equipe</h2>
                    <div className="equipeGrid">
                        <div className="membro">
                            <img src={D}/>
                            <p>DANIEL VÍTOR PRAES<br/>RM: 86243<br/>Gerente do Projeto</p>
                        </div>
                        <div className="membro">
                            <img src={E}/>
                            <p>ELOISE DA SILVA GONÇALVES<br/>RM: 86135</p>
                        </div>
                        <div className="membro">
                            <img src={K}/>
                            <p>KAUÃ VINÍCIUS SABINO DOS SANTOS<br/>RM: 86014</p>
                        </div>
                        <div className="membro">
                            <img src={L}/>
                            <p>LUCAS EMANUEL GONÇALVES OLIVEIRA<br/>RM: 86247</p>
                        </div>
                        <div className="membro">
                            <img src={V}/>
                            <p>VALDEMAR ALVES SOARES NETO<br/>RM: 86250</p>
                        </div>
                    </div>
                    <Link to={'/home'} className="btnVoltar">
                        VOLTAR
                    </Link>
                </div>
            </div>
            <p id="turma">INF3AM</p>
        </div>
    )
}

export default SobreNos