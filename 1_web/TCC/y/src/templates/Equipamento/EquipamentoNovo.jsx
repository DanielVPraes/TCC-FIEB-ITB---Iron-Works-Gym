import Header from "../../Components/Header/Header.jsx"
import Sidebar from "../../Components/Menu/Sidebar.jsx"
import logo from "../../assets/logo.png"
import { useState } from "react"
import { criarEquipamento } from "../../services/Service.js"
import "./EquipamentoNovo.css"

const EquipamentoNovo = () => {

  const [nome, setNome] = useState("")
  const [quantidade, setQuantidade] = useState("")

  const novoEquipamento = { nome, quantidade }

  const handleSubmit = event => {
    event.preventDefault()
    if (quantidade > 0 && quantidade <= 10 && nome !== "") {
      criarEquipamento(novoEquipamento).then(() => {
        console.log("EQUIPAMENTO CRIADO")
        window.location.reload()
      })
    }
  }

  return (
    <div className="layout">
      <Sidebar />
      <div className="container-equipamento">
        <Header goto="/equipamento" title="Novo Equipamento" logo={logo} />
        <section className="equipamento-bordinha">
          <form className="form-equipamento">
            <div className="form-group">
              <label htmlFor="inputNome">Nome</label>
              <input type="text" id="inputNome" value={nome} onChange={e => setNome(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="inputQuantidade">Quantidade</label>
              <input type="number" id="inputQuantidade" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
            </div>
            <div className="form-button">
              <button onClick={handleSubmit} className="btn-equipamento">Gravar</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default EquipamentoNovo