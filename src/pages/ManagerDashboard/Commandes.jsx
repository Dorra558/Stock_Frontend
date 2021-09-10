import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import FormModal from '../../components/Forms/FormModal'
// import FormCommand from '../../components/Forms/FormCommand'
import MesPub from '../../components/Publication/MesPub'
import { useSelector } from 'react-redux'






function Commandes() {

   
    return (
        <>
            <Container className="py-5">
                <FormModal/>
                <MesPub/>
        </Container>
        </>
    )
}


export default Commandes
