import React from 'react'
import { Container } from "reactstrap"
import LoginForm from '../Components/LoginForm'


function Login() {
    return (
        <Container className="d-flex min-vh-100 justify-content-center align-items-center">
            <LoginForm />
        </Container>
    )
}

export default Login
