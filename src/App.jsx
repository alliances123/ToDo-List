import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

export default function App() {
  const [todos, setTodos] = useState([])

  const handleAdd = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }])
  }

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="max-w-lg sm:mx-auto mx-2 mt-10 p-6 bg-gray-50 rounded-2xl shadow-xl">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#ffa8dc]">
        ToDo List
      </h1>
      <TodoInput onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  )
}

// 📝 