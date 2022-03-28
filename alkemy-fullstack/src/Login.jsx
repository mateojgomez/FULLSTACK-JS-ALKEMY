import React from 'react'
import { Col, Modal, Row, Container } from 'react-bootstrap'
import { Form, Button } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { setToken } from './redux/reducers/transactions'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            username: 'mateo',
            password: '123456a',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('username is required'),
            password: Yup.string().required('password is required'),
        }),
        onSubmit: async (formData) => {
            await loginUser(formData)
        },
    })
    const loginUser = async (formData) => {
        return axios.post('/login', formData).then((data) => {
            dispatch(setToken({ token: data.data.data.token }))
            localStorage.setItem('token', data.data.data.token)
            axios.defaults.headers.common['Authorization'] =
                data.data.data.token
            navigate('/')
        })
    }
    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
                Login
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <label htmlFor="Username">Username</label>
                        </Col>
                        <Col xs={12} md={8}>
                            <Form.Input
                                name="username"
                                type="text"
                                placeholder="Insert username"
                                onChange={formik.handleChange}
                                error={formik.errors.username}
                                value={formik.values.username}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} md={4}>
                            <label htmlFor="Password">Passowrd</label>
                        </Col>
                        <Col xs={12} md={8}>
                            <Form.Input
                                name="password"
                                type="password"
                                placeholder="Insert password"
                                onChange={formik.handleChange}
                                error={formik.errors.password}
                                value={formik.values.password}
                            />
                        </Col>
                    </Row>
                </Container>
                <Button type="submit"> Send</Button>
            </Form>
        </>
    )
}
