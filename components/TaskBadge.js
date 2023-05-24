import useTask from "@/hooks/useTask"

const TaskBadge = () => {
  const { tasks } = useTask()
  return (
    <div className="mr-5 bg-orange-700 p-1 px-3 rounded-xl font-normal">
      {tasks.length} Tasks
    </div>
  )
}
export default TaskBadge
