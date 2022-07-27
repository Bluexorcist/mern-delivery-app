import React from 'react';
import {Button, Card, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const Product = (props) => {
    const {product} = props;
    return (
        <div>
            <Card style={{width: '18rem'}}>
                <Nav.Link as={Link} to={`/product/${product.slug}`}>
                    <Card.Img variant='top' src={product.img} alt={product.name} style={{width: '17rem'}}/>
                </Nav.Link>
                <Nav.Link as={Link} to={`/product/${product.slug}`}>
                    <Card.Title style={{height: '60px'}}>{product.name}</Card.Title>
                </Nav.Link>

                <Card.Footer className="d-flex justify-content-around">
                    <Card.Title style={{fontSize: '1.6rem'}}
                                className="align-self-end">${product.price}</Card.Title>
                    <Button variant='dark'>Add to cart</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Product;