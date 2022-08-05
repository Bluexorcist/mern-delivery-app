import React from 'react';
import {Col, Form, Row} from "react-bootstrap";

const ClientInfo = (props) => {
    const {updateInfoHandler, clientInfo} = props;
    return (
        <Form style={{border: '1px solid #dadada', borderRadius: '5px', padding: '10px'}}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="First name"
                                  name='firstName'
                                  placeholder="Enter first name"
                                  onChange={updateInfoHandler}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="Last name"
                                  name='lastName'
                                  placeholder="Enter last name"
                                  onChange={updateInfoHandler}
                    />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control placeholder="Enter email"
                              name='email'
                              onChange={updateInfoHandler}/>
            </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Telephone</Form.Label>
                    <Form.Control placeholder="Enter telephone"
                                  name='telephone'
                                  onChange={updateInfoHandler}/>
                </Form.Group>


            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="address"
                                  name='address'
                                  placeholder="Enter address"
                                  onChange={updateInfoHandler}/>
                </Form.Group>
            </Row>
        </Form>
    );
};

export default ClientInfo;