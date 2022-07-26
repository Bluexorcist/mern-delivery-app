import React from 'react';
import {Helmet} from "react-helmet-async";

const Main = () => {
    return (
        <div style={{marginTop: '70px'}}>
            <div>
                <Helmet>
                    <title>Delivery App</title>
                </Helmet>
                <h2>Delivery App</h2>
                <h3>By Stanislav Stozhka</h3>
            </div>
            <div>
                <img style={{width: '40rem'}} src='/images/main.png' alt='main'/>
            </div>

        </div>
    );
};

export default Main;