import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavbarApp = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed='top'>
                <Container>
                    <Navbar.Brand to='/' as={Link}>
                        <img

                            src="/images/logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top ms-5 me-2"
                            alt="React Bootstrap logo"/>
                        DeliveryApp
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link  to='/shop' as={Link}>Shop</Nav.Link>
                        <Nav.Link  to='/cart' as={Link}>Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarApp;