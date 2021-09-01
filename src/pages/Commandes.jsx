import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import FormCommand from '../components/Forms/FormCommand'


function Commandes() {

    return (
        <>
            <Container className="py-5">
                <h5 >Commandes</h5>
                 <FormCommand/>
        </Container>
        </>
    )
}

export default Commandes
