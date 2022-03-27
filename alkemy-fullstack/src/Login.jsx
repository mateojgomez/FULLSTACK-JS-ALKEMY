// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// import './index.css'

// function Login() {
//     // React States
//     const [errorMessages, setErrorMessages] = useState({})
//     const [isSubmitted, setIsSubmitted] = useState(false)

//     // User Login info
//     const database = [
//         {
//             username: 'user1',
//             password: 'pass1',
//         },
//         {
//             username: 'user2',
//             password: 'pass2',
//         },
//     ]

//     const errors = {
//         uname: 'invalid username',
//         pass: 'invalid password',
//     }

//     const handleSubmit = (event) => {
//         //Prevent page reload
//         event.preventDefault()

//         var { uname, pass } = document.forms[0]

//         // Find user login info
//         const userData = database.find((user) => user.username === uname.value)

//         // Compare user info
//         if (userData) {
//             if (userData.password !== pass.value) {
//                 // Invalid password
//                 setErrorMessages({ name: 'pass', message: errors.pass })
//             } else {
//                 setIsSubmitted(true)
//             }
//         } else {
//             // Username not found
//             setErrorMessages({ name: 'uname', message: errors.uname })
//         }
//     }

//     // Generate JSX code for error message
//     const renderErrorMessage = (name) =>
//         name === errorMessages.name && (
//             <div className="error">{errorMessages.message}</div>
//         )

//     // JSX code for login form
//     const renderForm = (
//         <div className="form">
//             <form onSubmit={handleSubmit}>
//                 <div className="input-container">
//                     <label>Username </label>
//                     <input type="text" name="uname" required />
//                     {renderErrorMessage('uname')}
//                 </div>
//                 <div className="input-container">
//                     <label>Password </label>
//                     <input type="password" name="pass" required />
//                     {renderErrorMessage('pass')}
//                 </div>
//                 <div className="button-container">
//                     <input type="submit" />
//                 </div>
//             </form>
//         </div>
//     )

//     return (
//         <div className="app">
//             <div className="login-form">
//                 <div className="title">Sign In</div>
//                 {isSubmitted ? (
//                     <div>User is successfully logged in</div>
//                 ) : (
//                     renderForm
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Login
import React from 'react'
import { Col, Modal, Row, Container } from 'react-bootstrap'
import { Form, Button } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { setToken } from './redux/reducers/transactions'
import axios from 'axios'

export const Login = () => {
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
        return axios
            .post('/login', formData)
            .then((data) => dispatch(setToken({ token: data.json() })))
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
