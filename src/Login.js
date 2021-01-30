import { React } from 'react'
import { Container, Row, Col } from 'reactstrap'
import LoginBtn from './LoginBtn'
import CarouselImg from './CarouselImg'

const Login = () => {
    return (
        <Container style={{ marginTop: 20 }}>
            <Row>
                <Col sm={4}>
                    <LoginBtn />
                </Col>
                <Col sm={8}>
                    <CarouselImg />
                </Col>
            </Row>
        </Container>
    )
}

export default Login

