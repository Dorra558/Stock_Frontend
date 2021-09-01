import React,{useState} from 'react'
import {Modal, Button, Form, Row, Col, Container} from 'react-bootstrap'
import { newCommand } from '../../Redux/actions/commandAction';
import { useDispatch} from 'react-redux'
import { BiPlusMedical } from "react-icons/bi";


function FormModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const initialCommandState = {
        nomCompletManager: "",
        email: "",
        AdrDepot: "",
        tel : "",
        nomProduit :"",
        quantité : "",
        dateCommand : ""
     };
     
     const [command, setCommand] = useState(initialCommandState);
     const dispatch = useDispatch()

     const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCommand({
            ...command,
            [name]: value
        });
        console.log("add new menu", command)
    };



    const passCommand = () => {
        const { nomCompletManager, email, AdrDepot,  tel, nomProduit, quantité, dateCommand } = command;

      dispatch(newCommand(nomCompletManager, email, AdrDepot,  tel, nomProduit, quantité, dateCommand))
            //   setSubmitted(true);
            // .then(data => {
            //     setMenu({
                    
            //         nom: data.title,
            //         imgUrl: data.imgUrl,
            //         description: data.description,
                
            //     });
          
            //     setSubmitted(true);

            //     console.log("hhhhhhhh",data);
            // })
            // .catch(e => {
            //     console.log(e);
            // });
    };

    return (
        <div>
     
            <Button variant="success" onClick={handleShow}>   
               <BiPlusMedical/> Passer une commande 
            </Button>
            <Modal show={show} onHide={handleClose} size="lg">
           <Container>
                
                        <Modal.Header closeButton>
                        <Modal.Title>Ajouter votre commande</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                        </Modal.Body>
                            
                                    <Form className="formulaire">
                                        <Col>
                                        <Form.Label><h4>Coordonnées du gestionnaire</h4> </Form.Label>
                                        </Col>
                                        <Row>
                                            <Col md={3}>
                                                <Form.Group className="mb-3" >  
                                                <Form.Control type="text" placeholder="Nom Complet" id="nomCompletManager" value={command.nomCompletManager} onChange={handleInputChange} name="nomCompletManager" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group className="mb-3">
                                                <Form.Control type="tel" placeholder="Téléphone" id="tel" value={command.tel} onChange={handleInputChange} name="tel" />
                                            </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group className="mb-3">
                                                <Form.Control type="email" placeholder="Email" id="email" value={command.email} onChange={handleInputChange} name="email" />
                                            </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group className="mb-3">
                                                <Form.Control type="text" placeholder="Adresse de dépot" id="AdrDepot" value={command.AdrDepot} onChange={handleInputChange} name="AdrDepot" />
                                            </Form.Group>
                                            </Col>
                                        </Row>

                                        <Col>
                                        <Form.Label><h4>Informations de Produit</h4> </Form.Label>
                                        </Col>

                                        <Row>
                                            <Col md={3}>
                                                <Form.Group className="mb-3">  
                                                <Form.Control type="text" placeholder="Nom produit" id="nomProduit" value={command.nomProduit} onChange={handleInputChange} name="nomProduit"  />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <div class="form-group floating-label">
                                                    <select class="form-control" id="exampleFormControlSelect1">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    </select>
                                                </div>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group className="mb-3">
                                                <Form.Control type="number" placeholder="Quantité" id="quantité" value={command.quantité} onChange={handleInputChange} name="quantité" />
                                            </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group className="mb-3">
                                                <Form.Control type="date" placeholder="date de commande" id="dateCommand" value={command.dateCommand} onChange={handleInputChange} name="dateCommand" />
                                            </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <div class="form-group floating-label">
                                                    <textarea
                                                    id="textarea-with-placeholder"
                                                    class="form-control"
                                                    rows="4"
                                                    placeholder="Ecrire un commantaire ici"
                                                    ></textarea>
                                                </div>
                                            </Col>
                                        </Row>
                                        

                                    </Form> 
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                           Annuler
                        </Button>
                        <Button  onClick={()=>passCommand()} className="btn btn-success" >
                            Approuver
                        </Button>
                        </Modal.Footer>
               
           </Container>
           </Modal>
        </div>
    )
}

export default FormModal
