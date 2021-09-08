import React, { Component } from "react";
import { connect } from "react-redux";
import FormModal from '../Forms/FormModal'
import {getCommandId} from '../../Redux/actions/commandAction'
import {Row, Col, Table } from 'react-bootstrap'
import Moment from 'react-moment'


class MesPublication extends Component {
    
    state = {
      pub: null
    };
    componentDidMount() {
      this.props.user && this.props.getCommandId(this.props.user._id);
    }

    render() { 
        console.log(`get the user`, this.props.user)
        console.log("state of command", this.props.datas);
        console.log("state of loading", this.props.loading);
        return this.props.loading ? (
        //   <img className="spiner" src="" alt="" />
        <p>commnads</p>
        
        ) : (
          <>
                    <Row>
                           <Col>
                                <Table striped bordered hover>
                                  <thead>
                                      <tr>
                                      <th>ID_P</th>
                                      <th>Nom Produit</th>
                                      <th>Quantité</th>
                                      <th>Date de commande</th>
                                      <th>Etat de commande</th>
                                      </tr>
                                  </thead>
                                
                                {this.props.datas.map(pub => (
                                <tbody key={pub._id} >
                                    <tr>
                                      <td></td>
                                      <td>{pub.nomProduit}</td>
                                      <td>{pub.quantité}</td>
                                      <td>
                                          <Moment format="YYYY/MM/DD HH:mm">{pub.dateCommand}</Moment>
                                      </td> 
                                    </tr>
                                    {console.log("ssaaaarrraaa",pub)}           
                                </tbody>
                                           ))}
                                </Table>
                         
                            </Col>
                     
                    </Row>

                </>
        )
    }

}

const mapStateToProps = state => ({
    user: state.authReducer.user,
    datas: state.commandReducer.datas,
    loading: state.commandReducer.loading
  });

  export default connect(
    mapStateToProps,
    {
      getCommandId
   
    }
  )(MesPublication);