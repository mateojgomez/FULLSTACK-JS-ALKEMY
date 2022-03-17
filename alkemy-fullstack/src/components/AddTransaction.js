import { useState } from 'react'

const AddTransaction = ({onAdd}) => {
  const [concept, setConcept] =useState ('')
  const [amount, setAmount] =useState ('')
  const [type, setType] =useState (false)
  const [category, setCategory] =useState ('')

  const onSubmit  = (e) => {

    e.preventDefault ()

      if (!concept){
        alert('Please add a Transaction')
      return
      }

    onAdd({concept,amount,type,category})
     
    setConcept('')
    setAmount('')
    setType(false)
    setCategory('')
  }
  return (
    <form ClassName='add-form' onSubmit={onSubmit} >
    <div className='form-control'>
      <label>Concept</label>  
        <input type='text' placeholder='Add Concept' 
        value={concept} onChange ={(e)=> setConcept(e.target.value)} />

    </div>    
    <div className='form-control'>
      <label> Set Amount </label>  
        <input type= 'number' placeholder='Add Amount'
        value={ amount } onChange ={(e)=> setAmount(e.target.value)}/>
    </div>    
    <div className='form-control'>
      <label>Income</label>  
        <input type='checkbox' checked={type}
        value={type} onChange ={(e)=> setType(e.currentTarget.checked)}/>
    </div>   
    <div className='form-control'>
      <label>Set Category</label>  
        <input type='text' placeholder='Add Category'
        value={category} onChange ={(e)=> setCategory(e.target.value)}/>

    </div>     
    <input type='submit' value='Set Transaction' />
    </form>
  )
}
export default AddTransaction