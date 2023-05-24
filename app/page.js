"use client"
import useTask from "../hooks/useTask"
import TaskCard from "@/components/TaskCard"

export default function Home() {
  const { tasks } = useTask()

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}
