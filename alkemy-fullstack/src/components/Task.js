import {FaTimes} from 'react-icons/fa'


const Task = ({task,onDelete,onToggle}) => {
  return (
    <div className={`task ${task.type ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
       <h3>
        {task.concept}
        <FaTimes style={{color:'red',cursor:'pointer'}} onClick={() => onDelete(task.id)}/>
        </h3>
        <p>{task.amount}</p>
    </div>
  )
}

export default Task