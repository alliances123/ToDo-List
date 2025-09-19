import TodoItem from "./TodoItem"

export default function TodoList({ todos, onToggle, onDelete }) {
    if (todos.length === 0) {
        return <p className="text-gray-500 text-center">لا توجد مهام بعد ✨</p>
    }

    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}
