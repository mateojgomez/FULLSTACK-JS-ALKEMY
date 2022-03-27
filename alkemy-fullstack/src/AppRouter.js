import axios from 'axios'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { Login } from './Login'

const getToken = () => {
    const tokenString = sessionStorage.getItem('token')
    const userToken = JSON.parse(tokenString)
    return userToken?.token
}
export const AppRouter = () => {
    const token = getToken()

    if (!token) {
        return <Login />
    } else {
        axios.defaults.headers.common['auth-token'] = token
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App></App>} />
                <Route exact path="/login" element={<Login></Login>} />

                <Route
                    exact
                    path="/private"
                    component={() => <h1>Private</h1>}
                />
            </Routes>
        </BrowserRouter>
    )
}
