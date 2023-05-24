"use client"
import { createContext, useEffect, useState } from "react"
import { v4 as uuid } from "uuid"
import useLocalStorage from "@/hooks/useLocalStorage"
import { toast } from "react-hot-toast"

const TaskContext = createContext()
const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", [])

  // useEffect(() => {
  //   const storedTasks = localStorage.getItem("tasks")
  //   if (storedTasks) {
  //     setTasks(JSON.parse(storedTasks))
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks))
  // }, [tasks])

  const createTask = (title, description) => {
    setTasks([
      ...tasks,
      {
        title,
        description,
        id: uuid(),
      },
    ])
  }

  const handleDelete = (id) => {
    const confirmation = confirm("This task will be eliminated. Are you sure?")
    if (confirmation) {
      //Eliminar la tarea
      const newTasks = tasks.filter((task) => task.id !== id)
      //Actualizar el state de tasks
      setTasks(newTasks)
      toast.success("Task deleted successfully!")
    }
  }

  const editTask = (id, updatedTitle, updatedDescription) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          title: updatedTitle,
          description: updatedDescription,
        }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        createTask,
        handleDelete,
        editTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export { TaskProvider }
export default TaskContext
