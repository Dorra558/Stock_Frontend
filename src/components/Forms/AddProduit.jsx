import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap'
import { BiPlusMedical } from "react-icons/bi";
import jwt_decode from "jwt-decode";
import { newProduct } from '../../Redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'


function AddProduit() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const x = localStorage.getItem("token")
    var id = jwt_decode(x)._id


    const initialProductState = {
        manager : id,
        categorie: "",
        nomProduct: "",
        quantité: "",
        prix: "",
        dateExpirProduct: ""
    };


    const [product, setProduct] = useState(initialProductState);
    const dispatch = useDispatch()

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProduct({
            ...product,
            [name]: value
        });
        console.log("add new produit", product)
    };


    const passProduct = () => {

        const { manager, categorie, nomProduct, quantité, prix, dateExpirProduct } = product;

        dispatch(newProduct(manager, categorie, nomProduct, quantité, prix, dateExpirProduct))
    };

    return (
        <div>
            <Container>
                <Button variant="success" onClick={handleShow} className="btn-add">
                    <BiPlusMedical /> Ajouter un produit
                </Button>


                <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ajouter un produit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <Row>
                            <Col md={4}>
                                    <div class="form-group floating-label" >
                                        <select class="form-control" id="categorie" onChange={handleInputChange} name="categorie">
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
                                        <Form.Control type="text" id="nomProduit" value={product.nomProduct} onChange={handleInputChange} name="nomProduct"  placeholder="Enter le nom d'un produit" />
                                    </Form.Group>
                                </Col>

                                <Col md={4}>
                                    <Form.Group className="mb-3" >
                                        <Form.Control type="number" placeholder="Quantité de produit" id="quantité" value={product.quantité} onChange={handleInputChange} name="quantité"  />
                                    </Form.Group>
                                </Col>

                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" >
                                        <Form.Control type="number" placeholder="prix de produit" id="prix" value={product.prix} onChange={handleInputChange} name="prix" />
                                    </Form.Group>
                                </Col>

                                <Col md={6}>
                                    <Form.Group className="mb-3" >
                                        <Form.Control type="date" placeholder="Date d'expiration" id="dateExpirProduct" value={product.dateExpirProduct} onChange={handleInputChange} name="dateExpirProduct" />
                                    </Form.Group>
                                </Col>
                            </Row>

                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button    className="btn-add" onClick={()=>{passProduct();handleClose()}}>
                            Ajouter un produit
                           </Button>

                    </Modal.Footer>
                </Modal>


            </Container>
        </div>
    )
}

export default AddProduit
