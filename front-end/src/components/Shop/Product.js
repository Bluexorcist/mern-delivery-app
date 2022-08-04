import React, {useContext} from 'react';
import {Button, Card, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Store} from "../Store";

const Product = (props) => {
    const {product} = props;
    const {state, dispatch: ctxDispatch} = useContext(Store);
    const {
        cart: {cartItems},
    } = state;
    const addToCartHandler = (item) => {
        const existItem = cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: {...item, quantity},
        });
    };
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
                    <Button variant='dark' onClick={()=>addToCartHandler(product)}>Add to cart</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Product;