import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Col,Modal,Button,Row,Container} from 'react-bootstrap'

export const ModalEditTransaction = ({show,setModalShow,id}) => {
  const [tempTask,setTempTask] = useState(id)
  useEffect(() => { 
    const getTheTransaction = async () => { 
      const resp = await axios.get(`http://localhost:3000/api/v1/transactions/${id}`)
      console.log(tempTask)
      setTempTask(resp.data)
      console.log(tempTask)
    }
    if(show){
      getTheTransaction()
    }
  },[show])
  const updateTransaction = async () => { 
    const resp = await axios.patch(`http://localhost:3000/api/v1/transactions/${tempTask.id}`,tempTask)
  }
  return (
    <Modal  show={show}
    onHide={() => setModalShow(false)} aria-labelledby="contained-modal-title-vcenter">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
      Edit Transaction
        </Modal.Title>
    </Modal.Header>
    <Modal.Body className="show-grid">

      <Container>
        <Row>
          <Col xs={12} md={4}>
            <label htmlFor="Concept">
            Concept
            </label>
          </Col>
          <Col xs={12} md={8}>
            <input type="text" name='Concept' onChange={(e)=>setTempTask({...tempTask,concept:e.target.value})}value={tempTask.concept} />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4}>
            <label htmlFor="Amount">
            Amount
            </label>
          </Col>
          <Col xs={12} md={8}>
            <input type="number" name='Amount' onChange={(e)=>setTempTask({...tempTask,amount:e.target.value}) } value={tempTask.amount} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <label htmlFor="Category">
            Category
            </label>
          </Col>
          <Col xs={12} md={8}>
            <input type="text" name='Category' onChange={(e)=>setTempTask({...tempTask,category:e.target.value})}  value={tempTask.category} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <label htmlFor="Date">
            Date
            </label>
          </Col>
          <Col xs={12} md={8}>
            <input type="date" name='Date' onChange={(e)=>setTempTask({...tempTask,date:e.target.value})} value ={tempTask.date}/>
          </Col>
        </Row>
        
      </Container>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={()=>{updateTransaction();setModalShow(false)}}>Save Changes</Button>
    </Modal.Footer>
  </Modal>
  )
}
