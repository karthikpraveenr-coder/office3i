import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './assets/css/commonstyle.css';
import wahtwedo from './assets/images/Whatwedo.png';

function WhatWeDo() { 
    return (
        <div  id="whatWeDoSection"  className='container mb-5 mt-0'>

            <Row className='sec__row'>
                <Col md='6' className='sec__col__left'>
                    <img src={wahtwedo} alt='whatwedo' className='whatwedo' />
                </Col>
                <Col md='6' className='sec__col__right'>
                    <div className='sec__head-container-left mt-5 mb-5'>
                        <h3 className='sec__head'>What We Do</h3>
                    </div>
                    <h3 className='rigt__title'>Office3i : Your All-in-One Business Solution</h3>
                    <p className='rigt__para'>
                        Office3i is the ultimate business management solution, offering integrated tools for
                        Sales, Human Resources, and Office Management. Streamline your operations,
                        enhance team collaboration, and optimize productivity—all from a single platform.
                        Experience the ease of managing your business with Office3i.
                    </p>
                </Col>
            </Row>
        </div>
    );
}

export default WhatWeDo;
