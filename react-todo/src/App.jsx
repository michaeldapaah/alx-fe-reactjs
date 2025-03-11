import React from 'react'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'
import './App.css'

function App() {
  return (
      <div>
         <h1>Todo App</h1>
      <AddTodoForm /> {/* \u2705 Required for adding todos */}
      <TodoList /> {/* \u2705 Required to display todos */}
      </div>
  )
}

export default App
