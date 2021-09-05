import React, {useState} from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import { loginManagers } from '../../Redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

function LoginForm() {

    const initialLoginState = {
        email : "",
        password :""
     };

    const [login, setLogin] = useState(initialLoginState);
    const [validate, setValidate] = useState({emailState: "ok",passwordState: "ok"})

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


    const loginGestionnaire =(e)=>{ 
        e.preventDefault()
        validateEmail()
        validatePassword()
        dispatch(loginManagers(login.email,login.password))
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
              if (isAuthenticated && user.role === "manager") return <Redirect to="/dashboard" />;
            }
            if (user) {
              if (isAuthenticated && user.role === "admin") return <Redirect to="/dashboard" />;
            }

    return (
        <div>
           <Container className="py-5">
               <Row>
                   <Col md={{span : 6, offset : 3}}>
                        <Form onSubmit={loginGestionnaire}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Adresse Email</Form.Label>
                                <Form.Control type="email" id="email" name="email" value={login.email}  onChange={handleInputChange} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control type="password" id="password" placeholder="Password" name="password" value={login.password} placeholder="Enter mot de passe"  onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Se connecter
                            </Button> 
                        </Form>
                   </Col>
               </Row>
           </Container> 
        </div>
    )
}

export default LoginForm
