import { TaskCard } from "./TaskCard";

export function TasksList({tasks}) {
  return (
    <div>
      {
      tasks.map(task => (
        <TaskCard key={task._id} task={task}/>        
      ))}

    </div>
  )
}