import React,{ useState} from 'react'
import { useDispatch } from 'react-redux'
import {updateManager} from '../../Redux/actions/managerAction'
import {Container, Row, Col, Form, Button, Modal} from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai';
import {toast} from 'react-toastify'


toast.configure()
function FormUpdateManager({el,id}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()

    const [updateGestionnaire, setUpdateManager]=useState({
        nomCompletManager:el.nomCompletManager,
        email : el.email,
        AdrDepot : el.AdrDepot,
        tel : el.tel
    })
    

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdateManager({
            ...updateGestionnaire,
            [name]: value
        });
        console.log("update this manager", updateGestionnaire)
    };

    const modifManager=()=>{
        dispatch(updateManager(
            id,
            updateGestionnaire.nomCompletManager,
            updateGestionnaire.email,
            updateGestionnaire.AdrDepot,
            updateGestionnaire.tel)
            )
    }


    const notif =()=>{
        toast.success('Coordonnées modifiées avec succés!')
    }

    return (
        <div>
                <Container>
                        <Button variant="success" onClick={()=>{handleShow()}}>   
                        <AiIcons.AiOutlineEdit /> 
                        </Button>

                            <Modal  size="lg" show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Modification d'un gestionnaire</Modal.Title>
                                </Modal.Header>
                                
                                <Modal.Body>

                                    <Form>
                                        <Row  className="py-3">

                                            <Col md={4}>
                                                <Form.Group className="mb-3">
                                                    <Form.Control id="nomCompletManager" name="nomCompletManage" defaultValue={el.nomCompletManager}  onChange={handleInputChange} type="text" placeholder="Enter le nom d'un gestionnaire" />
                                                </Form.Group>
                                            </Col>

                                            <Col md={4}>
                                                <Form.Group className="mb-3">
                                                    <Form.Control  id="AdrDepot" name="AdrDepot" defaultValue={el.AdrDepot}  onChange={handleInputChange} type="adr" placeholder="Ecrire l'adresse de dépot" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
                                                <Form.Group className="mb-3">
                                                    <Form.Control  id="tel" name="tel" defaultValue={el.tel}  onChange={handleInputChange} type="tel" placeholder="Num téléphone" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={4}>
                                                <Form.Group className="mb-3">
                                                    <Form.Control  id="email" name="email" defaultValue={el.email}  onChange={handleInputChange} type="email" placeholder="Donner un adr émail" />
                                                </Form.Group>
                                            </Col>

                                        </Row>
                                    </Form>
                                </Modal.Body>

                                <Modal.Footer>
                                <Button  onClick={()=>{modifManager();handleClose();notif()}} variant="success">
                                    Modifier
                                </Button>
                                </Modal.Footer>
                            </Modal>                  
                </Container>

        </div>
    )
}

export default FormUpdateManager
