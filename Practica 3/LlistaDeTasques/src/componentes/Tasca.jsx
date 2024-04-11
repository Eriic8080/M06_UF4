import './estilos.css'

function Tarea ({todo, onComplete, onDeleteItem}){

    //Esta funcion hace que al clicar el texto de la tarea llame tambien a la funcion onComplete para marcar-la como completada
    const handleClicarTexto = () => {
        onComplete(todo.id);
      };
    

    return(
        <>  
            <div className="recuadroTarea">
                {/** En el input indico que mientra el dato completed sea true este marcado el input */}
                <input type='checkbox' checked={todo.completed} onChange={() => onComplete(todo.id)}/>
                <h4 className={todo.completed ? 'completed' : 'not-completed'} onClick={handleClicarTexto}>{todo.task}</h4>
                <button className='eliminarTarea' onClick={() =>onDeleteItem(todo.id)}>
                <img src='../src/assets/delete_tarea.png' alt='X' className='iconoBasura'></img>
                </button>
            </div>
        </>
    )
}
export default Tarea