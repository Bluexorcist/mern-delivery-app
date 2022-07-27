import React, {useEffect, useReducer, useState} from 'react';
import axios from "axios";
import logger from "use-reducer-logger";
import {Col, Row} from "react-bootstrap";
import Product from "./Product";
import FilterButtons from "./FilterButtons";


const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return {...state, loading: true};
        case 'FETCH_SUCCESS':
            return {...state, products: action.payload, loading: false};
        case 'FETCH_FAIL':
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
}

const Shop = () => {
    const [{loading, error, products}, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: '',
    });
    useEffect(() => {
        const fetchData = async () => {
            dispatch({type: 'FETCH_REQUEST'});
            try {
                const result = await axios.get('/api/products');
                dispatch({type: 'FETCH_SUCCESS', payload: result.data});
            } catch (err) {
                dispatch({type: 'FETCH_FAIL', payload: err.message});
            }
        };
        fetchData();
    }, []);

    const [filter, setFilter] = useState('All')
    const changeFilter = (value) => {
        setFilter(value)
    }
    let filteredProducts = products;
    if (filter === 'KFC') {
        filteredProducts = products.filter(p => p.shop === 'KFC')
    }
    if (filter === 'McDonalds') {
        filteredProducts = products.filter(p => p.shop === 'McDonalds')
    }
    if (filter === 'Dominozz') {
        filteredProducts = products.filter(p => p.shop === 'Dominozz')
    }
    if (filter === 'Puzata Hata') {
        filteredProducts = products.filter(p => p.shop === 'Puzata Hata')
    }
    if (filter === 'Pizza House') {
        filteredProducts = products.filter(p => p.shop === 'Pizza House')
    }
    let shops = [];
    for (let i = 0; i < products.length; i++) {
        shops.push(products[i].shop)
    }
    const uniq = [...new Set(shops)];


    return (

        <div style={{marginTop: '70px'}}>
            <FilterButtons uniq={uniq} changeFilter={changeFilter}/>
            <Row className='d-flex justify-content-around'>
                {            loading? (
                    <div>Loading...</div>
                ) : error? (<div>{error}</div>
                ) : (
                    filteredProducts.map((product) => (
                    <Col lg={3} md={4} sm={4} xs={6}
                         className='m-3 d-flex justify-content-around'
                         key={product.slug}>
                        <Product product={product}/>
                    </Col>
                )))}
            </Row>
        </div>

    );
};

export default Shop;