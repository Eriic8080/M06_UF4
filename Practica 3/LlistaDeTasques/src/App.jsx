import { useState } from 'react'
import './App.css'
import Formulario from './componentes/FormulariTasques'
import Lista from './componentes/llistatTasques'


function App() {
  //Aqui guando los datos en el estado TODOS y creo tambien el setTodos para poder modificar-lo
  const [todos, setTodos] = useState([])

  const onComplete=(id)=>{
    //Aqui actualizo el estado del array todos con el nuevo array que me devuelva el .map
    setTodos(todos.map((todo)=>{
      //Aqui compruebo las 2 IDs y le cambio el valor a la propiedad completed para marcar si estan o no completadas
      //Con los 3 ... creo una copia superficial del objeto
      return todo.id === Number(id)? {...todo, completed: !todo.completed} : {...todo};
    }))
  }

  const onDeleteItem=(id)=>{
    //Aqui modifico el array de objetos para filtrar por todos los que tengan el id diferente al que ha recibido
    setTodos([...todos].filter(todo => todo.id !== id));
  }

  //Esta funcion recibe le texto del input  del formulario y lo introduce a la lista de tareas
  const addTodo =(newTodo)=>{
    //Aqui creo un objeto con sus parametros
    let newItem = {id : +new Date(), task : newTodo, completed : false};
    //Y aqui actualizo el array de las tareas introduciendo una copia de todos los objetos que ya habian en el array + el nuevo objeto
    setTodos([...todos, newItem])
  }

  return (
    <>
      <div>
        <h1>LLista de tasques</h1>
        <Formulario addTodo={addTodo} />
        {/**A lista le paso el array de objetos todos y la funcion onComplete para marcar las casillas de las tareas completadas */}
        <Lista todos={todos} onComplete={onComplete} onDeleteItem={onDeleteItem}/>
      </div>
    </>
  )
}

export default App
