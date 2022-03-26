import Button from "./components/Button";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTransaction from "./components/AddTransaction";
import './index.css';
import {useState, useEffect} from 'react'
import axios from 'axios'


function App() {

  const [showAddTranscation, setShowAddTranscation] = useState (false)
  const [totalBalance,setTotalBalance] = useState(0)

  const [filter,setFilter] = useState (false)

  const [tasks,setTasks] = useState ([])
  
    useEffect(()=>{   
     
      const getTransactions= async ()=>{
        const resp = await axios.get('http://localhost:3000/api/v1/transactions')
        console.log(resp)
        setTasks(resp.data)
        
      }    
      getTransactions()
    },[filter])

    useEffect(()=>{

      let total= 0
      tasks.forEach((task)=>{ total += task.amount * (task.type?1:-1)}) 
      setTotalBalance(total)

    },[tasks]

    )
    


    const  addTransaction = async (task) =>{
      const resp = await axios.post('http://localhost:3000/api/v1/transactions',task)
      console.log(resp)
      if(resp.status === 200){
        setTasks ([...tasks,resp.data])
      }
    }

  const deleteTask = async (id) => {
    const resp = await axios.delete(`http://localhost:3000/api/v1/transactions/${id}`)
    if(resp.status === 200){
      setTasks(tasks.filter((task)=> task.id !== id))
    }
  }

  const toggleType = (id) => {
    setTasks(tasks.map( (task)=> task.id === id ? {...task, type:!task.type} : task))
  }

  return (
    
    <div className="container">
     <Header totalBalance={totalBalance} filter={filter} setFilter={setFilter} onAdd={()=> setShowAddTranscation(!showAddTranscation)}/>
     {showAddTranscation && <AddTransaction onAdd={addTransaction} />}
     {tasks.length>0 ?( 
     <Tasks tasks={filter? tasks.slice(0,10):tasks} onDelete={deleteTask} onToggle={toggleType} />):('No task to show')}
    </div>
  );
}

export default App;
