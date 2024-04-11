import Tarea from './Tasca'

function llista({todos, onComplete, onDeleteItem}) {
  
    return (
      <>
        <div>
            {
            /*   Aqui recibo los valores conel objeto todos y con el map voy iterando cada objeto y los voy llevando 
                  al componente Tarea para mostrar-lo con una key para identificar de manera unica cada objeto          */ 
              todos.map((todo ,index) => (
                <Tarea key={index} todo={todo} onComplete={onComplete} onDeleteItem={onDeleteItem} />

              ))
            }
        </div>
      </>
    )
  }
  
  export default llista
  