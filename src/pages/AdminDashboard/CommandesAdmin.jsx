import React,{useEffect, useState} from 'react'
import { Container, Row, Col, Table, Button} from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai';
import Moment from 'react-moment'
import { useDispatch, useSelector } from 'react-redux'
import { getCommand, deleteCommand } from '../../Redux/actions/commandAction'
import UpdateStatut from '../../components/Forms/UpdateStatut';
import {updateCommand} from '../../Redux/actions/commandAction'


function CommandesAdmin() {


    // const [statuts,setStatuts] = useState('')

    const dispatch = useDispatch()
    const datas = useSelector(state => state.commandReducer.datas)

const id = datas._id
    useEffect(() => {
        dispatch(getCommand());
    },[dispatch]);
    console.log(datas, "geeeeeeeeeeet commands");

    const modifStatut=()=>{
        dispatch(updateCommand(id,
            updateCommand.statut)
            )
    }
    const [search , setSearch] = useState("")
    const getSearch =  (event) => {
        setSearch(event.target.value)
            }


    // const deleteItem = (id) => {
    //     dispatch(deleteCommand(id))
    //     console.log("command delated",id)
    // }

    return (
        <div>
            <Row className="py-4">
                <Col md={{ span: 7, offset: 1 }}>
                    <div class="input-group">
                        <input type="search" onChange={getSearch} placeholder="Rechercher" id="form1" class="form-control" />
                    <button type="button" class="btn btn-primary">
                      <AiIcons.AiOutlineSearch/>
                    </button>
                    </div>
                </Col>

            </Row>



               <Container>
                    <Row>
                        
                        <Col>
                    
                        
                            <Table striped bordered hover >
                            <thead>
                                <tr>
                                <th>Nom Produit</th>
                                <th>Quantité</th>
                                <th>Date de commande</th>
                                <th>Catégorie</th>
                                <th>Adresse de dépot</th>
                                <th>Nom de géstionnaire</th>
                                <th>Etat de commande</th>
                             
                                </tr>
                            </thead>

                            {datas
                            .filter((el)=>{
                                if((search ==="") ||(el.categorie.toLowerCase().includes(search.toLowerCase())) ||(el.nomProduit.toLowerCase().includes(search.toLowerCase())) 
                                 ){ 
                                     return el
                                }
                              
                            }).map((el,key) => (
                            <tbody key={key}>
                                <tr>

                                <td>{el.nomProduit}</td>
                                <td>{el.quantité}</td>
                                <td>
                                    <Moment format="YYYY/MM/DD HH:mm">{el.dateCommand}</Moment>
                                </td>
                
                                <td>{el.categorie}</td>
                                <td>{el.manager.AdrDepot}</td>
                                <td>{el.manager.nomCompletManager}</td>
                                <td>{el.statut}</td>
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
                                    {/* <AiIcons.AiOutlineDelete onClick={()=>{deleteItem(el._id)}} /> */}   
                                     <UpdateStatut id={el._id}  el={el}/>   
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

export default CommandesAdmin
