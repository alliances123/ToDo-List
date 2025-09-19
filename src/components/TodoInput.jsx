import { useState } from "react"
import { Plus } from "lucide-react"

export default function TodoInput({ onAdd }) {
    const [task, setTask] = useState("")

    const handleAdd = () => {
        if (task.trim() === "") return
        onAdd(task)
        setTask("")
    }

    return (
        <div className="response-btns flex items-center gap-2 mb-6">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="أضف مهمة جديدة..."
                className="flex-1 px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <button
                onClick={handleAdd}
                className="response-add-btn flex items-center gap-2 bg-[#ffa8dc] text-white px-4 py-2 rounded-xl hover:bg-[#ffc0e5] transition"
            >
                <Plus size={18} /> إضافة
            </button>
        </div>
    )
}
