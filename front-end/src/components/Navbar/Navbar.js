import React, {useContext} from 'react';
import {Badge, Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Store} from "../Store";

const NavbarApp = () => {
    const {state} = useContext(Store);
    const {cart} = state;
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
                        <Nav.Link  to='/cart' as={Link}>
                            Cart
                            {cart.cartItems.length > 0 && (
                                <Badge pill bg='danger'>
                                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                                </Badge>
                            )}
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarApp;