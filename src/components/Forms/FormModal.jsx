import React,{useState} from 'react'
import {Modal, Button, Form, Row, Col, Container} from 'react-bootstrap'
import { newCommand } from '../../Redux/actions/commandAction';
import { useDispatch} from 'react-redux'
import { BiPlusMedical } from "react-icons/bi";


function FormModal() {


    // const removeDuplicates = (myArr, prop) => {
    //     return myArr.filter((obj, pos, arr) => {
    //       return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    //     });
    //   };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const initialCommandState = {
        manager : "",
        nomProduit :"",
        categorie : "",
        quantité : "",
     };
     
     const [command, setCommand] = useState(initialCommandState);
     const dispatch = useDispatch()

     const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCommand({
            ...command,
            [name]: value
        });
        console.log("add new command", command)
    };


  
    const passCommand = () => {
        const {nomProduit,categorie, quantité} = command;

      dispatch(newCommand(nomProduit,categorie, quantité))
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
                                                    <select class="form-control" id="categorie" value={command.categorie} onChange={handleInputChange} name="categorie">
                                                        <option>Boisson</option>
                                                        <option>Biscuit</option>
                                                        <option>Jus</option>
                                                        <option>Eau</option>
                                                        <option>Cake</option>
                                                        <option>Lait</option>
                                                    </select>
                                                </div>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group className="mb-3">
                                                <Form.Control type="number" placeholder="Quantité" id="quantité" value={command.quantité} onChange={handleInputChange} name="quantité" />
                                            </Form.Group>
                                            </Col>

                                            {/* <Col md={6}>
                                                <div class="form-group floating-label">
                                                    <textarea
                                                    id="textarea-with-placeholder"
                                                    class="form-control"
                                                    rows="4"
                                                    placeholder="Ecrire un commantaire ici"
                                                    ></textarea>
                                                </div>
                                            </Col> */}
                                        </Row>
                                        

                                    </Form> 
                        <Modal.Footer>

                        <Button  onClick={()=>{passCommand();handleClose()}} className="btn btn-primary" >
                            Approuver
                        </Button>
                        </Modal.Footer>
               
           </Container>
           </Modal>
        </div>
    )
}

export default FormModal
