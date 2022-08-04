import React from 'react';
import {Button, Container, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import LoadingBox from "../Utilities/LoadingBox";

const Footer = (props) => {
    const {totalQuantity, totalPrice, disabledButton, createOrderHandler, loading} = props
    return (
        <Navbar bg="dark" variant="dark" fixed='bottom'>
            <Container className='d-flex justify-content-md-around'>
                <NavbarBrand>
                    <h4>
                        Total ({totalQuantity} items) : $ {totalPrice}
                    </h4>
                </NavbarBrand>
                <Nav><Button variant='success'
                             onClick={createOrderHandler}
                             disabled={disabledButton()}>Success order</Button></Nav>
                {loading && <LoadingBox/>}
            </Container>
        </Navbar>
    );
};

export default Footer;