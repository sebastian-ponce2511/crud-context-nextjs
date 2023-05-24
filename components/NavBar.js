"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"
import useTask from "@/hooks/useTask"
import TaskBadge from "./TaskBadge"

const NavBar = () => {
  const router = useRouter()
  const { tasks } = useTask()

  return (
    <div className="bg-gray-800">
      <header className="container flex justify-between mx-auto mb-20 py-5 text-white text-xl font-black">
        <div>
          <Link className="text-3xl" href="/">
            TaskApp
          </Link>
        </div>

        <div className="flex items-center">
          {tasks.length >= 1 && <TaskBadge />}
          <button
            className="bg-green-600 px-3 py-2 rounded-md hover:bg-green-500"
            onClick={() => router.push("/new")}
          >
            Add Task
          </button>
        </div>
      </header>
    </div>
  )
}

export default NavBar
