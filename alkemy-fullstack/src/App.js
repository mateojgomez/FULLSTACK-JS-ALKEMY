import Button from "./components/Button";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import './index.css';
import {useState} from 'react'


function App() {
  const [tasks,setTasks] = useState ([
    {
      id:1,
      concept:'Supermarket' ,
      amount: 200 ,
      type: false ,
      date: '20/1/2022',
      category:'Food' ,
  },
  {
      id:2,
      concept:'Medic' ,
      amount: 350 ,
      type:false ,
      date:'24/1/2022',
      category:'Health' ,
  },
  {
      id:3,
      concept:'Salary' ,
      amount:20000,
      type:true,
      date: '1/2/2022' ,
      category: 'Income' , 
  }
  ]

  )

  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  const toggleType = (id) => {
    setTasks(tasks.map( (task)=> task.id === id ? {...task, type:!task.type} : task))
  }

  return (
    
    <div className="container">
     <Header />
     <Button></Button>
     {tasks.length>0 ?( 
     <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleType} />):('No task to show')}
    </div>
  );
}

export default App;
