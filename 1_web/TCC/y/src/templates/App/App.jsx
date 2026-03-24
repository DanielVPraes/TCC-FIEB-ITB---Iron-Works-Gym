import { useState } from 'react'
import Home from '../Home/Home'
import EntradaInicial from '../EntradaInicial/EntradaInicial'



function App() {
  const [count, setCount] = useState("")

  return (
    <div>
     <EntradaInicial/>
    </div>
  )
}

export default App

