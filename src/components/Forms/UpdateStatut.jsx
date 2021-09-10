import React,{ useState} from 'react'
import { useDispatch } from 'react-redux'
import {updateCommand} from '../../Redux/actions/commandAction'
import {Container, Row, Col, Form, Button, Modal} from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai';

function UpdateStatut({el,id}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()

    const [updateStatut, setUpdateStatut]=useState({
        nomProduit:el.nomProduit,
        categorie : el.categorie,
        quantité : el.quantité,
        dateCommand : el.dateCommand,
        statut : el.statut
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdateStatut({
            ...updateStatut,
            [name]: value
        });
        console.log("update this statut", updateStatut)
    };

    
    const modifStatut=()=>{
        dispatch(updateCommand(
            id,
            updateStatut.nomProduit,
            updateStatut.categorie,
            updateStatut.quantité,
            updateStatut.dateCommand,
            updateStatut.statut)
            )
    }

    
    return (
        <div>
            <Container>
                        <Button variant="success" onClick={()=>{handleShow()}}>   
                        <AiIcons.AiOutlineEdit /> 
                        </Button>

                            <Modal  size="lg" show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title></Modal.Title>
                                </Modal.Header>
                                
                                <Modal.Body>

                                    <Form>
                                        <Row  className="py-3">

                                            <Col md={4}>
                                                <Form.Group className="mb-3">
                                                    <Form.Control id="nomProduit" name="nomProduit" defaultValue={el.nomProduit}  onChange={handleInputChange}  />
                                                </Form.Group>
                                            </Col>

                                            <Col md={4}>
                                            <div class="form-group floating-label">
                                                    <select class="form-control" id="categorie" defaultValue={el.categorie} onChange={handleInputChange} onChange={handleInputChange} name="categorie">
                                                        <option>Boisson</option>
                                                        <option>Biscuit</option>
                                                        <option>Jus</option>
                                                        <option>Eau</option>
                                                        <option>Cake</option>
                                                        <option>Lait</option>
                                                    </select>
                                                </div>

                                            </Col>
                                            <Col md={4}>
                                                <Form.Group className="mb-3">
                                                    <Form.Control  id="quantité" name="quantité" defaultValue={el.quantité}  onChange={handleInputChange}  />
                                                </Form.Group>
                                            </Col>
                                            <Col md={4}>
                                                <Form.Group className="mb-3">
                                                    <Form.Control  id="dateCommand" name="dateCommand" defaultValue={el.dateCommand}  onChange={handleInputChange}  />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
{/* 

                                            <Col md={4}>
                                                <Form.Group className="mb-3">
                                                    <Form.Control  id="statut"  defaultValue={el.statut} onChange={handleInputChange} name="statut"  />
                                                </Form.Group>
                                            </Col> */}

                                            <div class="form-group floating-label">
                                                    <select class="form-control" id="statut"  onChange={handleInputChange} name="statut">
                                                        <option>En attente</option>
                                                        <option>Valider</option>
                                                        <option>Réfuser</option>
                                                    </select>
                                            </div>
                                            </Col>

                                        </Row>
                                    </Form>
                                </Modal.Body>

                                <Modal.Footer>
                                <Button  onClick={()=>{handleClose();modifStatut()}} variant="success">
                                    Modifier
                                </Button>
                                </Modal.Footer>
                            </Modal>                  
                </Container>
        </div>
    )
}

export default UpdateStatut
