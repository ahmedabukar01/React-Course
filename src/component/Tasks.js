import Task from "./Task"

const Tasks = ({tasks, setTasks}) => {
    
    const delHandle = (id) =>{
        setTasks(tasks.filter(task=> task.id !== id))
    }

  return (
    <div>
        {tasks.map(task=>(
            <Task task={task} key={task.id} id={task.id}
            del={delHandle}
            />
        ))}
    </div>
  )
}

export default Tasks