import React,{useEffect, useState} from 'react'
import { Container, Row, Col, Table, Button} from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai';
import Moment from 'react-moment'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderId, deleteCommand } from '../../Redux/actions/commandAction'

import {updateCommand} from '../../Redux/actions/commandAction'
import UpdateCmd from '../Forms/UpdateCmd';


function CommandesAdmin() {


    // const [statuts,setStatuts] = useState('')

    const dispatch = useDispatch()
    const datas = useSelector(state => state.commandReducer.datas)
    const user = useSelector(state => state.authReducer.user)


  //  const currrentId = user._id
  //  console.log(`datas._id`, user._id)


    useEffect(() => {
        dispatch(getOrderId());
    },[dispatch]);
    console.log(datas, "geeeet commands order of manager");



    const deleteItem = (id) => {
        dispatch(deleteCommand(id))
        console.log("command delated",id)
    }

    return (
        <div>
            <Row className="py-4">
                <Col md={{ span: 7, offset: 1 }}>
                    <div class="input-group">
                        <input type="search" placeholder="Rechercher" id="form1" class="form-control" />
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
                                <th>ID_P</th>
                                <th>Nom Produit</th>
                                <th>Quantité</th>
                                <th>Date de commande</th>
                                <th>Catégorie</th>
                             
                                <th>Etat de commande</th>
                        
                                </tr>
                            </thead>
                            {/* .filter(el => el.manager._id === currrentId) */}
                            {datas.map((el,key) => (
                            <tbody key={key}>
                                <tr>
                                <td>


                                </td>
                            <td>{el.nomProduit}</td>
                                <td>{el.quantité}</td>
                                <td>
                                    <Moment format="YYYY/MM/DD HH:mm">{el.dateCommand}</Moment>
                                </td>
                
                                <td>{el.categorie}</td>
                           
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
                                    <AiIcons.AiOutlineDelete onClick={()=>{deleteItem(el._id)}} />  
                                     <UpdateCmd id={el._id}  el={el}/> 
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




















































// import React, { Component } from "react";
// import { connect } from "react-redux";
// import FormModal from '../Forms/FormModal'
// import {getCommand} from '../../Redux/actions/commandAction'
// import {Row, Col, Table } from 'react-bootstrap'
// import Moment from 'react-moment'


// class MesPublication extends Component {
    
//     state = {
//       pub: null
//     };
//     componentDidMount() {
//       this.props.user && this.props.getCommand(this.props.user._id);
//     }

//     render() { 
  
//         console.log(`get the user`, this.props.user_id)
//         console.log("state of command", this.props.datas);
//         console.log("state of loading", this.props.loading);
//         return this.props.loading ? (
//         //   <img className="spiner" src="" alt="" />
//         <p>commnads</p>
        
//         ) : (
//           <>
//                     <Row>
//                            <Col>
//                                 <Table striped bordered hover>
//                                   <thead>
//                                       <tr>
//                                       <th>ID_P</th>
//                                       <th>Nom Produit</th>
//                                       <th>Quantité</th>
//                                       <th>Date de commande</th>
//                                       <th>Etat de commande</th>
//                                       </tr>
//                                   </thead>
                                
//                                 {this.props.datas.map(pub => (
//                                 <tbody key={pub._id} >
//                                     <tr>
//                                       <td></td>
//                                       <td>{pub.nomProduit}</td>
//                                       <td>{pub.quantité}</td>
//                                       <td>
//                                           <Moment format="YYYY/MM/DD HH:mm">{pub.dateCommand}</Moment>
//                                       </td> 
//                                       <td>{pub.statut}</td>
//                                     </tr>
//                                     {console.log("ssaaaarrraaa",pub)}           
//                                 </tbody>
//                                            ))}
//                                 </Table>
                               
//                             </Col>
                     
//                     </Row>

//                 </>
//         )
//     }

// }

// const mapStateToProps = state => ({
//     user: state.authReducer.user,
//     datas: state.commandReducer.datas,
//     loading: state.commandReducer.loading
//   });

//   export default connect(
//     mapStateToProps,
//     {
//  getCommand
   
//     }
//   )(MesPublication);














