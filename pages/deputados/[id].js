import React from 'react'
import Pagina from '../../components/Pagina'
import { Card, Col, Row } from 'react-bootstrap'
import apiDeputados from '../../services/apiDeputados'

const Dep = ({Deputado}) => {
  return (
    <Pagina>

            <Row>
                <Col md={3}>
                <Card.Img variant="top" src= "urlFoto" />
                <Card.Body>
                <Card.Title>{nome}</Card.Title>
                    <p><string>Partido: </string>{uriPartido}</p>
                    <p><string>UF: </string>{siglaUf}</p>
                </Card.Body>
               
                </Col>

            
            </Row>

           

        </Pagina>
    )
}

export default Dep


export async function getServerSideProps(context) {

    const id = context.params.id

    const resdeputados = await apiDeputados.get('/deputados/ ' + id)
    const Deputado = resdeputados.data.dados

    return {
        props: {  Deputado },
    }
}