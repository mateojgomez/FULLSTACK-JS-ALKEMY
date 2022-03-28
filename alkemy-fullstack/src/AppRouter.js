import { useSelector } from 'react-redux'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App'
import { Login } from './Login'
function PrivateRoute({ children }) {
    return localStorage.getItem('token') ? children : <Navigate to="/login" />
}
export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <PrivateRoute>
                            <App />
                        </PrivateRoute>
                    }
                />
                <Route exact path="/login" element={<Login></Login>} />
            </Routes>
        </BrowserRouter>
    )
}
