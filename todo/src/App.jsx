import { useState } from 'react'


function App() {
  const [todos, settodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no Sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a Academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar react",
      category: "Estudos",
      isCompleted: false,
    },    
  ])
  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <div className="todo-list">
      {todos.map((todo) => (
        <div className="todo">
          <div className='content'>
            <p>{todo.text}</p>
            <p className='category'>
              {todo.category}
            </p>
          </div>
        </div>
      ))}

    </div>
  </div>;
}

export default App
