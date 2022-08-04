import React from 'react';
import {Button, Col, ListGroup, ListGroupItem, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const CartItems = (props) => {
    const {cartItems, updateCartHandler, removeItemHandler} = props;
    return (
        <ListGroup>

            {cartItems.map((item) => (
                <ListGroupItem key={item._id}>
                    <Row className="align-items-center">
                        <Col md={3}>
                            <img
                                src={item.img}
                                alt={item.name}
                                className='img-fluid rounded img-thumbnail'
                            /> {' '}

                        </Col>
                        <Col md={3}>
                            <Nav.Link as={Link}
                                      to={`/product/${item.slug}`}
                                      style={{fontWeight: '600'}}>{item.name}
                            </Nav.Link>
                        </Col>
                        <Col md={3}>
                            <Button size="sm" variant='outline-danger'
                                    style={{border: "none"}}
                                    disabled={item.quantity === 1}
                                    onClick={() => updateCartHandler(item, item.quantity - 1)}>
                                <i>
                                    <img src="/images/buttonMinus1.png" alt='buttonMinus1' style={{width: '20px'}}/>
                                </i>
                            </Button>{' '}
                            <span style={{fontWeight: 700}}>{item.quantity}</span>{' '}
                            <Button size="sm" variant='outline-success'
                                    style={{border: "none"}}
                                    onClick={() => updateCartHandler(item, item.quantity + 1)}>
                                <i>
                                    <img src="/images/buttonPlus.png" alt='buttonPlus' style={{width: '20px'}}/>
                                </i>
                            </Button>{' '}
                        </Col>
                        <Col md={1}
                             style={{fontWeight: '500', fontSize: '1.3em'}}>
                            ${item.price}
                        </Col>
                        <Col md={2}>
                            <Button size="sm"
                                    variant='outline-danger'
                                    style={{border: "none"}}
                                    onClick={() => removeItemHandler(item)}>
                                <i>
                                    <img src="/images/buttonDelete.png" alt='buttonDelete' style={{width: '20px'}}/>
                                </i>
                            </Button>
                        </Col>
                    </Row>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

export default CartItems;