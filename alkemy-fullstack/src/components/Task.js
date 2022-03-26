 import removeIcon from '../assets/png/remove.png'
 import editIcon from '../assets/png/edit.icon.png'
 import {ModalEditTransaction} from './ModalEditTransaction'
 import { useState } from 'react'


const Task = ({task,onDelete,onToggle}) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    //no necesito el onDoueble Click de abajo 
    <div className={`task ${task.type ? 'reminder' : 'reminderr'}`} onDoubleClick={() => onToggle(task.id)}> 
       <h3>
        {task.concept}
        <img src={removeIcon} style={{width:'30px', height:'30px', color:'red',cursor:'pointer'}} onClick={() => onDelete(task.id)}/>
        <img src={editIcon} style={{width:'30px', height:'30px', color:'red',cursor:'pointer'}} onClick={() => setModalShow(true)}/>
        </h3>
        <p>{task.amount}</p>
        <ModalEditTransaction show={modalShow} setModalShow={setModalShow} id={task.id}/>
    </div>
    
  )
}

export default Task