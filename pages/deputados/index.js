import React from 'react'
import Pagina from '../../components/Pagina'
import { Card, Col, Row } from 'react-bootstrap'

const Deputados = (props) => {
  return (
    <Pagina titulo="dispesas">

            <Row md={4}>
                {props.Deputados.map(item => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={urlFotos} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Link className='btn btn-danger' href={'/deputados/' + item.id}>Detalhes</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Pagina>
    )
}



export default Deputados

export async function getServerSideProps(context) {

    const resultado = await apiDeputados.get('/deputados')
    const Deputados = resultado.data.dados

    return {
        props: {
            Deputados  
        },
    }
}