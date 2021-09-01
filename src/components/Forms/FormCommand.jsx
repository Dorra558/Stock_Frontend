import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCommand } from '../../Redux/actions/commandAction'
import { Row, Col, Container, Table} from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai';
import FormModal from './FormModal';







export default function FormCommand() {

            const dispatch = useDispatch()
        const datas = useSelector(state => state.commandReducer.datas)


        useEffect(() => {
            dispatch(getCommand());
        },[dispatch]);
        console.log(datas, "get commands");

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
                    {datas.map((el,key) => (
                        <Table striped bordered hover key={key}>
                        <thead>
                            <tr>
                            <th>ID_P</th>
                            <th>Nom Produit</th>
                            <th>Quantité</th>
                            <th>Date de commande</th>
                            <th>Etat de commande</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>{el._id}</td>
                            <td>{el.nomProduit}</td>
                            <td>{el.quantité}</td>
                            <td>{el.dateCommand}</td>
                            <td>acceptée</td>
                            </tr>
                        </tbody>
                        </Table>
                     ))}
                    </Col>
                </Row>

          
        </div>
    )
}


