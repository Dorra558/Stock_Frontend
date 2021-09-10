import React,{useEffect, useState} from 'react'
import { Container, Row, Col, Table, Button} from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai';
import Moment from 'react-moment'
import { useDispatch, useSelector } from 'react-redux'
import { getCommand, deleteCommand } from '../../Redux/actions/commandAction'
import UpdateStatut from '../../components/Forms/UpdateStatut';
import {updateCommand} from '../../Redux/actions/commandAction'

function CommandesAdmin() {


    const [statut, setStatut] = useState('')
    const dispatch = useDispatch()
    const datas = useSelector(state => state.commandReducer.datas)


    useEffect(() => {
        dispatch(getCommand());
    },[dispatch]);
    console.log(datas, "geeeeeeeeeeet commands");


    const deleteItem = (id) => {
        dispatch(deleteCommand(id))
        console.log("command delated",id)
    }





    
    
    const modifStatut=()=>{
        dispatch(updateCommand(
            updateCommand.statut)
            )
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
                                <th>Adresse de dépot</th>
                                <th>Etat de commande</th>
                                <th>Actions</th>
                                </tr>
                            </thead>
                            {datas.map((el,key) => (
                            <tbody key={key}>
                                <tr>
                                <td></td>
                                <td>{el.nomProduit}</td>
                                <td>{el.quantité}</td>
                                <td>
                                    <Moment format="YYYY/MM/DD HH:mm">{el.dateCommand}</Moment>
                                </td>
                
                                <td>{el.categorie}</td>
                                <td>

                                    
                                </td>
                                <td>{el.statut}</td>
                             
                                <td className='d-flex justify-content-around'>
                                    <AiIcons.AiOutlineDelete onClick={()=>{deleteItem(el._id)}} />
                                    <UpdateStatut id={el._id}  el={el}/>
                                    <div class="form-group floating-label">
                                                    <select class="form-control" id="statut" onChange={(e) => setStatut(e.target.value)} name="statut">
                                                        <option>En attente</option>
                                                        <option>Valider</option>
                                                        <option>Réfuser</option>
                                                    </select>
                                    </div>
                                        <Button  onClick={()=>{modifStatut()}} variant="success">
                                           Modifier
                                       </Button>
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



///////////////////////////////////////////////////

import React, { Component } from "react";
import { connect } from "react-redux";
import FormModal from '../Forms/FormModal'
import {getCommandId} from '../../Redux/actions/commandAction'
import {Row, Col, Table } from 'react-bootstrap'
import Moment from 'react-moment'
import axios from 'axios'


class MesPublication extends Component {
    
    state = {
      pub: null, 
      orderUser:[]

     
    }

    

    componentDidMount() {
       
        axios.get("http://localhost:4000/app/command/getCommands/")
           .then(res=>this.setState({orderUser : res.data}
             ))
       
      this.props.user && this.props.getCommandId(this.props.user._id);
    }

    render() { 
      
        console.log(`get the user`, this.props.user_id)
        console.log("state of command", this.props.user.commands);
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
                                      <td>{pub.statut}</td>
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




//   **********************************************************

const Commands = require('../model/commandModel')
const Ges = require('../model/gestionnaireModel')


module.exports = {

    //Add command

    addCommand: async(req, res) => {
        // const { name, email } = req.body
        const manager = req.body.manager
            // const nomManger = req.body.nomManger
        const nomProduit = req.body.nomProduit
        const categorie = req.body.categorie
        const quantité = req.body.quantité
        const statut = req.body.statut
        try {
            command = new Commands({
                manager,
                // nomManger,
                nomProduit,
                categorie,
                quantité,
                statut
            })

            await command.save()

            try {
                const id = command.manager
                const Gestionnairee = await Ges.findById({ _id: id })


                if (!Gestionnairee)
                    return res
                        .status(404)
                        .send({ msg: "The ad with the given ID was not found." });
                Gestionnairee.commands.push(command)
                Gestionnairee.save()
                res.json(Gestionnairee)

            } catch (error) {
                console.error(error.message);
                res.status(500).send("Server error");
            }




        } catch (error) {
            console.error(error.message);
        }
    },
    getCommand: async(req, res) => {

        try {
            const command = await Commands.find().populate("manager")
                // const command = await Commands.find().populate('manager').select('-_id');

            res.json(command)
        } catch (error) {
            console.error(error.message)
        }
    },
    getCommandById: async(req, res) => {
        try {
            const publication = await Commands.findById(req.params.id)
                .populate("manager", "-password")

            if (!publication)
                return res
                    .status(404)
                    .send({ msg: "The ad with the given ID was not found." });

            return res.send(publication);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server error");
        }
    },

    deleteCommand: async(req, res) => {
        try {
            const command = await Commands.findByIdAndDelete(req.params.id)
            res.json(command)
        } catch (error) {
            console.error(error.message);
        }
    },

    updateCommand: async(req, res) => {
        try {
            const command = await (Commands.findByIdAndUpdate(req.params.id, req.body, { new: true }))
            res.json(command)
        } catch (error) {
            console.error(error.message);
        }
    }

}