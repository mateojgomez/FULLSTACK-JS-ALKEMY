import Button from "./components/Button";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTransaction from "./components/AddTransaction";
import './index.css';
import {useState, useEffect} from 'react'
import axios from 'axios'


function App() {

  const [showAddTranscation, setShowAddTranscation] = useState (false)
  

  const [tasks,setTasks] = useState ([])
  
    useEffect(()=>{
      const getTransactions= async ()=>{
        const resp = await axios.get('http://localhost:3000/transactions')
        setTasks(resp.data)
      }    
      getTransactions()
    },[])
    
    const  addTransaction = (task) =>{
      console.log(task)
      const id = Math.floor(Math.random()*1000)+1
  const newTransaction = {id,...task}
  setTasks ([...tasks,newTransaction])
}

  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  const toggleType = (id) => {
    setTasks(tasks.map( (task)=> task.id === id ? {...task, type:!task.type} : task))
  }

  return (
    
    <div className="container">
     <Header  onAdd={()=> setShowAddTranscation(!showAddTranscation)}/>
     {showAddTranscation && <AddTransaction onAdd={addTransaction} />}
     {tasks.length>0 ?( 
     <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleType} />):('No task to show')}
    </div>
  );
}

export default App;
