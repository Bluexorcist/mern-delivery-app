import React, {useEffect, useReducer} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Button, Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return {...state, loading: true};
        case 'FETCH_SUCCESS':
            return {...state, product: action.payload, loading: false};
        case 'FETCH_FAIL':
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
}


const ProductPage = () => {
    const params = useParams();
    const {slug} = params;

    const [{loading, error, product}, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
        error: '',
    });
    useEffect(() => {
        const fetchData = async () => {
            dispatch({type: 'FETCH_REQUEST'});
            try {
                const result = await axios.get(`/api/products/slug/${slug}`);
                dispatch({type: 'FETCH_SUCCESS', payload: result.data});
            } catch (err) {
                dispatch({type: 'FETCH_FAIL', payload: err.message});
            }
        };
        fetchData();
    }, [slug]);
    return (
        <div style={{marginTop: '70px'}}>
            {loading? <div>Loading...</div>
            : error ? (
                <div>{error}</div>
                ) : (
                    <Row>
                        <Col lg={6} md={6} sm={6} xs={12}>
                            <img
                            className='img-large'
                            src={product.img}
                            alt={product.name}/>
                        </Col>
                        <Col>
                            <ListGroup variant='flush'>
                                <ListGroupItem>
                                    <h1>{product.name}</h1>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <h5>Description: {product.description}</h5>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <h3>Price: ${product.price}</h3>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Button size="lg" variant='danger'>Add to cart</Button>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>

                    </Row>

                )}
        </div>
    );
};

export default ProductPage;