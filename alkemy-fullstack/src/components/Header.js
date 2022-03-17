import '../index.css'
import  './Button'
import Button from './Button'
import Task from './Tasks'


const Header = ({onAdd}) => {
  return (
   <header>
    <h1 className='header'>
        Balance Tracker
    </h1>
    <Button color='green' text='Add Transaction'
    onClick={onAdd} /> 

  </header>
  )
}

export default Header