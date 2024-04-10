import './estilos.css'
const Formulario =()=>{

    return(
        <>
            <div>
                <input className="barraDatos" placeholder='Introduce la tarea'></input>
                <button className='enviarTarea'>Agregar Tarea</button>
            </div>
        </>
    )

}

export default Formulario