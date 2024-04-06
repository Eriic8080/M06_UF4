import { useState } from 'react'


const contador=()=> {
    const [count, setCount] = useState(0)

    const incrementNum =()=>{
        setCount(count+1)
        console.log("Incrementa 1")

    }

    const reiniciarNum =()=>{
        setCount(0)
        console.log("Reiniciado a 0")
    }

    return (
      <>
        <h1>Contador</h1>
        <h2>{count}</h2>
        <button onClick={incrementNum}>Sumar</button>
        <button onClick={reiniciarNum}>Reiniciar</button>
      </>
    )
  }
  
  export default contador