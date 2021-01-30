import React from 'react'
import { Navbar, Nav, NavItem, Container } from 'reactstrap'
import { Link } from 'react-router-dom'

const NavbarHeader = () => {
    return (
        <Navbar color='dark' dark expand='md'>
            <Container>
                <Nav className='mr-auto' navbar>
                    <Link to='/'>logo</Link>
                </Nav>
                <NavItem>
                    <Link to='/user'>User</Link>
                </NavItem>
                <NavItem>
                    <Link to='/posts'>Posts</Link>
                </NavItem>
            </Container>
        </Navbar>
    )
}

export default NavbarHeader
