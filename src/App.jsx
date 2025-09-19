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
    <div className="w-full h-screen pt-20 flex justify-center">
      <div className="max-w-lg sm:min-w-lg my-auto mx-auto sm:p-6 p-3 bg-gray-50 rounded-2xl shadow-xl relative">
        <img src="./public/pngtree_romantic-white-daisy-chamomile-flowers_21464345.png" className=" aspect-square sm:w-30 w-20 sm:-top-12 -top-7 sm:-left-12 -left-2 absolute" />
        <h1 className="text-3xl font-bold text-center mb-6 text-[#FFC0CB]">
          ToDo List
        </h1>
        <TodoInput onAdd={handleAdd} />
        <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
      </div>
    </div>

  )
}

// 📝 