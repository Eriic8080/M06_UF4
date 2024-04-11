import { useState } from 'react'
import './estilos.css'
function Formulario ({addTodo}){
    const [userInput, setUserInput] = useState('');

    //Aqui manejo el evento de onChange para poder sobreescribir el input
    const handleChange=(e)=>{
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(userInput.trim() != ''){
            addTodo(userInput);
            setUserInput('');
        }
    }

    return(
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input className="barraDatos" placeholder='Introduce la tarea' value={userInput} onChange={handleChange}></input>
                    <button className='enviarTarea'>Agregar Tarea</button>
                </form>
            </div>
        </>
    )

}

export default Formulario