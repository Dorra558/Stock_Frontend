import React,{useEffect} from 'react'
import {Row, Col, Table} from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai';
import FormModal from '../../components/Forms/FormModal';
import Moment from 'react-moment'
import { useDispatch, useSelector } from 'react-redux'
import { getCommand } from '../../Redux/actions/commandAction'


function CommandesAdmin() {


    
    const dispatch = useDispatch()
    const datas = useSelector(state => state.commandReducer.datas)


    useEffect(() => {
        dispatch(getCommand());
    },[dispatch]);
    console.log(datas, "geeeeeeeeeeet commands");
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
                <Col md={4}>
                  <FormModal/>
                </Col>
            </Row>



                <Row>
                 
                    <Col>
                
                   
                        <Table striped bordered hover >
                        <thead>
                            <tr>
                            <th>ID_P</th>
                            <th>Nom Produit</th>
                            <th>Quantité</th>
                            <th>Date de commande</th>
                            <th>Etat de commande</th>
                            </tr>
                        </thead>
                        {datas.map((el,key) => (
                        <tbody key={key}>
                            <tr>
                            <td>{el._id}</td>
                            <td>{el.nomProduit}</td>
                            <td>{el.quantité}</td>
                            <td>
                                <Moment format="YYYY/MM/DD HH:mm">{el.dateCommand}</Moment>
                            </td>
                            
                            </tr>
                            {console.log("ssaaaarrraaa",el)}
                        </tbody>
                        ))}
                        
                        </Table>
                     
                   
                    </Col>
                </Row>

          
        </div>
    )
}

export default CommandesAdmin
