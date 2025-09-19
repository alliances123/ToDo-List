import { CheckCircle, Trash2 } from "lucide-react"

export default function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <div className="flex items-center justify-between bg-white shadow-md rounded-xl p-3 mb-3 border border-gray-200 hover:shadow-lg transition">
            <div
                onClick={() => onToggle(todo.id)}
                className={`flex items-center gap-3 cursor-pointer select-none ${todo.completed ? "line-through text-gray-400" : "text-gray-800"
                    }`}
            >
                <CheckCircle
                    size={22}
                    className={todo.completed ? "text-green-500" : "text-gray-300"}
                />
                <span>{todo.text}</span>
            </div>

            <button
                onClick={() => onDelete(todo.id)}
                className="text-red-500 hover:text-red-700 transition"
            >
                <Trash2 size={20} />
            </button>
        </div>
    )
}
