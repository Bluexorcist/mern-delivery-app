import React from 'react';
import {Button, ButtonGroup, Row} from "react-bootstrap";

const FilterButtons = (props) => {
    const {uniq, changeFilter} = props
    return (
        <div>
            <Row lg={1} md={1} sm={1} xs={2} className='d-flex justify-content-center ms-4 me-4'>
                <ButtonGroup size="md" className="d-flex">
                    <Button variant='outline-success'
                            onClick={() => changeFilter('All')}>
                        <h6>All</h6>
                    </Button>
                    {uniq.map(b => (
                        <Button key={b}
                                variant='outline-success'
                                onClick={() => changeFilter(b)}>
                            <h6>{b}</h6>
                        </Button>
                    ))}
                </ButtonGroup>
            </Row>
        </div>
    );
};

export default FilterButtons;