"use client"
import useTask from "@/hooks/useTask"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import ErrorMsg from "@/components/ErrorMsg"
import { toast } from "react-hot-toast"

function Page({ params }) {
  const { tasks, createTask, editTask } = useTask()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()
  const router = useRouter()

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      editTask(params.id, data.title, data.description)
      toast.success("Task edited successfully!")
    } else {
      createTask(data.title, data.description)
      toast.success("Task added successfully!")
    }
    router.push("/")
  })

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id)
      if (taskFound) {
        setValue("title", taskFound.title)
        setValue("description", taskFound.description)
      }
    }
  }, [])

  return (
    <div className="flex justify-center">
      <form
        onSubmit={onSubmit}
        className="flex flex-col bg-gray-700 p-8 w-4/12 rounded-md text-white"
      >
        <legend className="text-3xl font-bold mb-6">New task</legend>
        <input
          className="rounded-md p-2 mb-5 bg-gray-900"
          type="text"
          placeholder="Write a title"
          {...register("title", { required: true })}
        />

        {errors.title && <ErrorMsg>Este campo es requerido</ErrorMsg>}

        <textarea
          className="rounded-md p-2 bg-gray-900 mb-5"
          placeholder="Write a description"
          {...register("description", { required: true })}
        />

        {errors.description && <ErrorMsg>Este campo es requerido</ErrorMsg>}

        <input
          className="bg-gray-400 px-4 py-2 text-white font-bold uppercase rounded-md mt-3 cursor-pointer hover:bg-green-500"
          type="submit"
          value="Save"
        />
      </form>
    </div>
  )
}
export default Page
