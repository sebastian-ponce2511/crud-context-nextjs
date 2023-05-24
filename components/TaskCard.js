"use client"
import { useRouter } from "next/navigation"
import useTask from "@/hooks/useTask"

const TaskCard = ({ task }) => {
  const router = useRouter()
  const { handleDelete } = useTask()

  const deleteTask = (e) => {
    e.stopPropagation()
    handleDelete(task.id)
  }

  return (
    <div className="flex justify-center">
      <div
        onClick={() => router.push(`/edit/${task.id}`)}
        className="bg-gray-700 mb-5 w-5/12 py-10 p-5 hover:bg-gray-600 cursor-pointer rounded-md flex justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-300">{task.title}</h1>
          <p className="text-gray-300">{task.description}</p>
        </div>

        <button
          onClick={deleteTask}
          className="px-4 py-1 bg-gray-400 mt-3 mb-3 rounded-md font-bold text-white uppercase hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  )
}
export default TaskCard
