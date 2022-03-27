import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Modal, Row, Container } from 'react-bootstrap'
import { Form, Button } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { notification } from 'antd'

export const ModalEditTransaction = ({ show, setModalShow, id, task }) => {
    const [tempTask, setTempTask] = useState({})

    useEffect(() => {
        const getTheTransaction = async () => {
            const resp = await axios.get(`/transactions/${id}`)
            setTempTask(resp.data)
        }
        if (show) {
            getTheTransaction()
        }
    }, [show])
    const updateTransaction = async (formData) => {
        try {
            const resp = await axios.patch(`/transactions/${id}`, formData)
            openNotification('success', 'Transaction updated successfully')
            setModalShow(false)
            return resp
        } catch (err) {
            openNotification('error', 'Transaction updated error')
            console.log(err)
        }
    }
    const formik = useFormik({
        initialValues: {
            concept: task?.concept,
            category: task?.category,
            amount: task?.amount,
            date: task?.date.slice(0, 10),
        },
        validationSchema: Yup.object({
            concept: Yup.string().required('concept is required'),
            amount: Yup.number()
                .min(0)
                .max(9999999)
                .required('amount is required'),
            category: Yup.string().required('category is required'),
            date: Yup.date().required('date is required'),
        }),
        onSubmit: (formData) => {
            updateTransaction(formData)
        },
    })
    const openNotification = (type, message) => {
        notification[type]({
            message,
            placement: 'topRight',
        })
    }
    return (
        <Modal
            show={show}
            onHide={() => setModalShow(false)}
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Form onSubmit={formik.handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Transaction
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col xs={12} md={4}>
                                <label htmlFor="Concept">Concept</label>
                            </Col>
                            <Col xs={12} md={8}>
                                <Form.Input
                                    name="concept"
                                    type="text"
                                    placeholder="Add Concept"
                                    onChange={formik.handleChange}
                                    error={formik.errors.concept}
                                    value={formik.values.concept}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={4}>
                                <label htmlFor="Amount">Amount</label>
                            </Col>
                            <Col xs={12} md={8}>
                                <Form.Input
                                    name="amount"
                                    type="text"
                                    placeholder="Add amount"
                                    onChange={formik.handleChange}
                                    error={formik.errors.amount}
                                    value={formik.values.amount}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={4}>
                                <label htmlFor="Category">Category</label>
                            </Col>
                            <Col xs={12} md={8}>
                                <Form.Input
                                    name="category"
                                    type="text"
                                    placeholder="Add category"
                                    onChange={formik.handleChange}
                                    error={formik.errors.category}
                                    value={formik.values.category}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={4}>
                                <label htmlFor="Date">Date</label>
                            </Col>
                            <Col xs={12} md={8}>
                                <Form.Input
                                    name="date"
                                    type="date"
                                    placeholder="Add date"
                                    onChange={formik.handleChange}
                                    error={formik.errors.date}
                                    value={formik.values.date}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
                <Button type="submit"> Save Changes</Button>
            </Form>
        </Modal>
    )
}
