import React, {useState} from 'react'
import {Container, Form, Button, Modal, Row, Col} from 'react-bootstrap'
import { BiPlusMedical } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux'
import {register} from '../../Redux/actions/authAction'
import { Redirect } from 'react-router'

function RegisterForm() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [validate, setValidate] = useState({
                            nomState:"ok",
                            emailState: "ok",
                            passwordState: "ok",
                            telState: "ok"})

        const dispatch = useDispatch()
        const user = useSelector((state) => state.authReducer.user) 
        const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated)
        console.log("authh",isAuthenticated)
    const initialRegisterState = {
        nomCompletManager : "",
        AdrDepot : "",
        tel : "",
        email : "",
        password :"",
        role : "manager"
     };
     
//**************handle inputs************************ */
     const [signup, setSignup] = useState(initialRegisterState);

     const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSignup({
            ...signup,
            [name]: value
        });
        console.log("Sign Up to the dashboard", signup)
    };

//-------Name validate
const validateName = () => {
  
    if (!signup.nomCompletManager) {
      validate.nomState = "bad";
    } else {
      validate.nomState = "ok";
    }
   setValidate({ validate });
  };
// ------validate email


// ----validate password  
  const validatePassword = () => {
 
    if (!signup.password) {
      validate.passwordState = "bad";
    } else {
      validate.passwordState = "ok";
    }
    setValidate({ validate });
  };
//   --------- validate phone
  const validatePhone = () => {
    
    if (signup.tel.length !== 8) {
      validate.telState = "bad";
    } else {
      validate.telState = "ok";
    }
    setValidate({ validate });
  };

    // ****************on submit function************************************
    const submitForm=()=>{
      
        validateName();
        validatePassword();
        validatePhone();
        dispatch (register(signup.nomCompletManager,signup.email,signup.password,signup.AdrDepot,signup.tel, signup.role))
      }


      // if (user) {
      //   if (isAuthenticated && user.role === "manager") return <Redirect to="/dashboard" />;
      // }



    return (
    <> 
       
        <div>
             
            <Container>
      

                    <Button variant="success" onClick={handleShow}>   
                    <BiPlusMedical/> Ajouter un gestionnaire
                    </Button>

                        <Modal  size="lg" show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Ajout d'un gestionnaire</Modal.Title>
                            </Modal.Header>
                            
                            <Modal.Body>
                            {/* { isAuthenticated  ? <Redirect to="/admin" /> :  */}
                                <Form>
                                    <Row  className="py-3">
                                    <Col md={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Control id="role" name="role"  defaultValue={signup.role}  onChange={handleInputChange} type="text" disabled />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Control id="nomCompletManager" name="nomCompletManager" value={signup.nomCompletManager}  onChange={handleInputChange} type="text" placeholder="Enter le nom d'un gestionnaire" />
                                            </Form.Group>
                                        </Col>

                                        <Col md={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Control  id="AdrDepot" name="AdrDepot" value={signup.AdrDepot}  onChange={handleInputChange} type="adr" placeholder="Ecrire l'adresse de dépot" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Control  id="tel" name="tel" value={signup.tel}  onChange={handleInputChange} type="tel" placeholder="Num téléphone" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Control  id="email" name="email" value={signup.email}  onChange={handleInputChange} type="email" placeholder="Donner un adr émail" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Control  id="password" name="password" value={signup.password}  onChange={handleInputChange} type="password" placeholder="Donner un mot de passe" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Form>
{/* } */}
                            </Modal.Body>

                            <Modal.Footer>
                            <Button  onClick={()=>{submitForm();handleClose()}} variant="success">
                                Ajouter
                            </Button>
                            </Modal.Footer>
                        </Modal>  
                 
            </Container>
        </div>
        </>
    )

}

export default RegisterForm
