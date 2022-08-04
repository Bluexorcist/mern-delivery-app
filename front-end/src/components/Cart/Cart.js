import React, {useContext, useReducer, useState} from 'react';
import {Helmet} from "react-helmet-async";
import {Store} from "../Store";
import {Col, Row,} from "react-bootstrap";
import MessageBox from "../Utilities/MessageBox";
import {Link} from "react-router-dom";
import CartItems from "./CartItems";
import ClientInfo from "./ClientInfo";
import Footer from "./Footer";
import {getError} from "../Utilities/utils";
import axios from "axios";

const reducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_REQUEST':
            return {...state, loading: true};
        case 'CREATE_SUCCESS':
            return {...state, product: action.payload, loading: false};
        case 'CREATE_FAIL':
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
}

const Cart = () => {
    const [{loading}, dispatch] = useReducer(reducer, {
        loading: false,
    })
    const {state, dispatch: ctxDispatch} = useContext(Store);
    const {
        cart: {cartItems},
    } = state;
    const [clientInfo, setClientInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        telephone: '',
        address: ''
    })
    const updateInfoHandler = (e) => {
        setClientInfo({...clientInfo, [e.target.name]: e.target.value})
        console.log(clientInfo)
    }
    const updateCartHandler = (item, quantity) => {
        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: {...item, quantity},
        });
    };
    const removeItemHandler = (item) => {
        ctxDispatch({
            type: 'CART_REMOVE_ITEM',
            payload: item,
        });
    }
    const totalQuantity = cartItems.reduce((a, c) => a + c.quantity, 0)
    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0).toFixed(2)
    const disabledButton = () => {
        if (cartItems.length === 0) {
            return true
        }
    }
    const createOrderHandler = async () => {
        try {
            dispatch({type: 'CREATE_REQUEST'});
            const {data} = await axios.post('/api/orders',
                {
                    clientInfo: clientInfo,
                    orderItems: cartItems,
                    totalPrice: totalPrice
                }, {
                headers: {
                    'Content-Type':'application/json'
                }
                });
            ctxDispatch({type: 'CART_CLEAR'});
            dispatch({type: 'CREATE_SUCCESS'});
            localStorage.removeItem('cartItems');
        } catch (err) {
            dispatch({type: 'CREATE_FAIL', payload: getError(err)});

        };
    };
    return (
        <div style={{marginTop: '70px'}}>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            <Row style={{marginBottom: '70px'}}>
                <Col md={6}>
                    <h3>Info:</h3>
                    <ClientInfo clientInfo={clientInfo}
                                updateInfoHandler={updateInfoHandler}
                    />
                </Col>
                <Col md={6}>
                    <h3>Order:</h3>
                    {cartItems.length === 0 ? (
                            <MessageBox>
                                Cart is empty. <Link to='/shop'>Go to shopping</Link>
                            </MessageBox>
                        ) :
                        (
                            <CartItems cartItems={cartItems}
                                       updateCartHandler={updateCartHandler}
                                       removeItemHandler={removeItemHandler}
                            />
                        )
                    }
                </Col>
            </Row>
            <Footer
                totalQuantity={totalQuantity}
                totalPrice={totalPrice}
                disabledButton={disabledButton}
                createOrderHandler={createOrderHandler}
                loading={loading}
            />
        </div>
    );
};


export default Cart;