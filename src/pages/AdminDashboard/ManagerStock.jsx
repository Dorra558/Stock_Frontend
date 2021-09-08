import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGestionnaire, deleteManager } from '../../Redux/actions/managerAction'
import {Container, Row, Col, Table} from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai';
import RegisterForm from '../../components/AuthForm/RegisterForm';
import FormUpdateManager from '../../components/Forms/FormUpdateManager';
import {toast} from 'react-toastify'


toast.configure()
function ManagerStock() {

    const dispatch = useDispatch()
    const gestion = useSelector(state => state.managerReducer.gestion)



    useEffect(() => {
        dispatch(getGestionnaire());
    },[dispatch]);
    console.log( gestion, "geeeeet managers");

    const deleteItem = (id) => {
        dispatch(deleteManager(id))
        console.log("manager delated",id)
    }

    const notify =()=>{
        toast.error('Gestionnaire supprimé!')
    }

    return (
        <div>

           <Container className="py-5">  
              <Row>
                  <Col>
                   
                  </Col>
              </Row>

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
             <RegisterForm />
                </Col>
            </Row>

            <Row>
                    <Col>
                        <Table striped bordered hover >
                        <thead>
                            <tr>
                            <th>Nom Gestionnaire</th>
                            <th>Addresse dépot</th>
                            <th>Téléphone</th>
                            <th>Email</th>
                            <th></th>
                            </tr>
                        </thead>

                        {gestion.map((el,key) => (
                        <tbody key={key}>
                            <tr>
                            <td>{el.nomCompletManager}</td>
                            <td>{el.AdrDepot}</td>
                            <td>{el.tel}</td>
                            <td>
                            {el.email}
                            </td>
                            <td className='d-flex justify-content-around'>
                            <AiIcons.AiOutlineDelete onClick={() => {deleteItem(el._id);notify()}} />
                             <FormUpdateManager id={el._id}  el={el}/>
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

export default ManagerStock
