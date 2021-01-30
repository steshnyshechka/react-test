import { React } from 'react'
import { Container, Row, Col } from 'reactstrap'
import FormUser from './FormUser'
import Images from './Images'

const User = () => {
    return (
        <Container style={{ marginTop: 20 }}>
            <Row>
                <Col sm={6}>
                    <FormUser />
                </Col>
                <Col sm={6}>
                    <Images />
                </Col>
            </Row>
        </Container>
    )
}

export default User

