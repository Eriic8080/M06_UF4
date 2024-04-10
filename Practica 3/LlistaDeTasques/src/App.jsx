import { useState } from 'react'
import './App.css'
import Formulario from './componentes/FormulariTasques'
import Lista from './componentes/llistatTasques'
import Tarea from './componentes/Tasca'
function App() {
  return (
    <>
      <div>
        <h1>LLista de tasques</h1>
        <Formulario />
        <Lista>
            <Tarea />
        </Lista>
      </div>
    </>
  )
}

export default App
