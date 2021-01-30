import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <Navbar style={{ marginTop: 250 }} bg='dark'>
            <Col style={{ textAlign: 'center', color: 'white' }}>  Copyright 2021</Col>
        </Navbar>
    )
}

export default Footer
