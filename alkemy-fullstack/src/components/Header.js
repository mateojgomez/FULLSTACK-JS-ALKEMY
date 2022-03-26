import { Row,Col } from 'react-bootstrap'
import '../index.css'
import  './Button'
import Button from './Button'

const Header = ({onAdd,totalBalance,filter,setFilter}) => {
  return (
   <header>
    <Row className='header'>
      <Col md={4}>
    <h1>
        Balance Tracker
    </h1>
      </Col>
    <Col md={8}>
      <h2 style={{margin:'0'}}>
        Total Balance: {totalBalance}
      </h2>
    </Col>
    </Row>

    <Row>
      <Col md={4}>
    <Button color='green' text='Add Transaction'
    onClick={onAdd}  /> 
    </Col>
    <Col md={6}></Col>
    <Col md={2}>
      <select>
        <option onClick={()=> setFilter(true)} selected={filter} >Latests</option>
        <option onClick={()=> setFilter(false)} selected={!filter}>View All</option>
      </select>
    </Col>
    </Row>


    </header>
  )
}

export default Header