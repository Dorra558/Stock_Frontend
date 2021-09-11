import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import FormModal from '../../components/Forms/FormModal'
// import FormCommand from '../../components/Forms/FormCommand'
import { useSelector } from 'react-redux'
import MyPublication from '../../components/Publication/MesPub'






function Commandes() {

   
    return (
        <>
            <Container className="py-5">
                <FormModal/>
              <MyPublication/>
        </Container>
        </>
    )
}


export default Commandes
