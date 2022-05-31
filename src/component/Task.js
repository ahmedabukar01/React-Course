import {FaTimes} from 'react-icons/fa'

const Task = ({task,id,del}) => {

  return (
    <div className='single-task'>
        <div>
            <p>{task.text}</p>
            <span>{task.time}</span>
        </div>
        <FaTimes className='icon' onClick={()=>del(id)}/>
    </div>
  )
}



export default Task