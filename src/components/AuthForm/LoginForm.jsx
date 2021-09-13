import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap'
import { loginManagers } from '../../Redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './LoginForm.css'


function LoginForm() {

    const initialLoginState = {
        email: "",
        password: ""
    };

    const [login, setLogin] = useState(initialLoginState);
    const [validate, setValidate] = useState({ emailState: "ok", passwordState: "ok" })

    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated)

    const user = useSelector((state) => state.authReducer.user)
    console.log(`hhhhhhhhh`, user)
    const loading = useSelector((state) => state.authReducer.loading)

    // console.log("userr",user)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLogin({
            ...login,
            [name]: value
        });
        console.log("log in to the dashboard", login)
    };


    const loginGestionnaire = (e) => {
        e.preventDefault()
        validateEmail()
        validatePassword()
        dispatch(loginManagers(login.email, login.password))
    }


    const validateEmail = () => {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (emailRex.test(login.email)) {
            validate.emailState = "ok";
        } else {
            validate.emailState = "bad";
        }
        setValidate({ validate });
    };
    const validatePassword = () => {

        if (!login.password) {
            validate.passwordState = "bad";
        } else {
            validate.passwordState = "ok";
        }
        setValidate({ validate });
    };


    if (user) {
        if (isAuthenticated && user.role == "manager") return <Redirect to="/dashboard" />;
    }
    if (user) {
        if (isAuthenticated && user.role === "admin") return <Redirect to="/admin" />;
    }
    else <Redirect to="/signIn" />


    return (
        <div>
            <Container className="py-5 loginForm" style={{height:"100vh"}}>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="form-admin">
                            <Row className="w-100">
                                <Col md={6} className="p-0">
                                    <div className="login-image">
                                        {/* <Image fluid className="w-100 h-100" src={'https://lh3.googleusercontent.com/proxy/UAvZOic2OaDyx4tNFNKFpht5l6obRjwnRi50SqNg_bKzdDIfv1X0REjvJw5-jxj2j79osq7nFS5jwXoSrW-Ds3hhnktSOi9mShTWJg9Z'}></Image> */}
                                    </div>
                                </Col>
                                <Col md={6} className="input-style">
                                    <Form onSubmit={loginGestionnaire} className="form-style">
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Adresse Email</Form.Label>
                                            <Form.Control type="email" id="email" name="email" value={login.email} onChange={handleInputChange} placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Mot de passe</Form.Label>
                                            <Form.Control type="password" id="password" placeholder="Password" name="password" value={login.password} placeholder="Enter mot de passe" onChange={handleInputChange} />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Se connecter
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginForm
