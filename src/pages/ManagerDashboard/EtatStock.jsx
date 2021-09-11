import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai';
import AddProduit from '../../components/Forms/AddProduit';
import Moment from 'react-moment'
import { useDispatch, useSelector } from 'react-redux'
import {getProductId} from '../../Redux/actions/productAction'




export default function EtatStock() {

    const dispatch = useDispatch()
    const produitss = useSelector(state => state.productReducer.produitss)

    useEffect(() => {
        dispatch(getProductId());
    },[dispatch]);
    console.log(produitss, "geeeet products of each manager");




    return (
        <div>

               <Container>
                   <h5 className="pt-5">Gestion de produit</h5>
                    <Container>
                        <Row className="py-4">
                            <Col md={{ span: 6}}>
                                <div class="input-group">
                                    <input type="search" placeholder="Rechercher" id="form1" class="form-control" />
                                <button type="button" class="btn btn-primary">
                                <AiIcons.AiOutlineSearch/>
                                </button>
                                </div>
                            </Col>

                            <Col  md={{ span: 3, offset: 3 }}>
                            <AddProduit/>
                            </Col>
                        </Row>
                    </Container>

                    <Row>
                        <Col>
                        
                                <Table striped bordered hover >
                                    <thead>
                                        <tr>
                                        
                                        <th>Catégorie</th>
                                        <th>Nom Produit</th>
                                        <th>Quantité</th>
                                        <th>Prix</th>
                                        <th>Date d'expiration</th>
                                        <th>Date de publication</th>
                                
                                        </tr>
                                    </thead>
                            
                                    {produitss.map((el,key) => (

                                    <tbody key={key}>
                                        <tr>
                                            <td>{el.categorie}</td>
                                            <td>{el.nomProduct}</td>
                                            <td>{el.quantité}</td>
                                            <td>{el.prix} TND</td>                                    
                                            <td> <Moment format="YYYY/MM/DD ">{el.dateExpirProduct}</Moment></td>
                                            <td>
                                                <Moment format="YYYY/MM/DD HH:mm">{el.dateProduct}</Moment>
                                            </td>
                                        
                                            <td>
                                            {/* <div class="form-group floating-label">
                                                                <select class="form-control" id="statut" name="statut" onChange={(e) => setStatut(e.target.name)}  onClick={modifStatut()} >
                                                                    <option>En attente</option>
                                                                    <option>Valider</option>
                                                                    <option>Réfuser</option>
                                                                </select>
                                            </div> */}

                                            </td>
                                        
                                        
                                            <td className='d-flex justify-content-around'>
                                                {/* <AiIcons.AiOutlineDelete onClick={()=>{deleteItem(el._id)}} />  
                                                <UpdateCmd id={el._id}  el={el}/>  */}
                                            </td> 
                                        </tr>
                                        {console.log("ssaaaarrraaa",el)}
                                    </tbody>
                                    ))}
                                    
                                    </Table>  
                        </Col>
                    </Row>
                    
                      
                  
               </Container>
        </div>
    )
}
