import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Assets/css/VisitorManagement.css';
import Visitormanagementimg from '../Assets/images/showcaseimages/Visitormanagement.png'


import addvisitor from '../Assets/images/showcaseimages/Icons/VisitorManagement/addvisitor.png'
import visitorlog from '../Assets/images/showcaseimages/Icons/VisitorManagement/visitorlog.png'

import { useEffect } from 'react';

const VisitorManagement = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Container className="visitormanagement-container">
            <Row>

                <Col md={6} className="text__section mb-4">
                    <h1>Visitor Management</h1>
                    <p className='mb-4 visitormanagement__content'>
                        Recast your visitor experience with our advanced management system. Ideal track arrivals, manage visitor records, and ensure secure access with ease. Elevate efficiency and professionalism at every touch point.
                    </p>
                    <Row className="button-group">
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="visitormanagement-button"><img src={addvisitor} alt='addvisitor' /> Add Visitor</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="visitormanagement-button"><img src={visitorlog} alt='visitorlog' /> Visitor Log</Button>
                        </Col>
               

                    </Row>
                </Col>
                <Col md={6} className="image-section">
                    {/* Image can be imported and used here */}
                    <img
                        src={Visitormanagementimg}
                        alt="Visitormanagementimg"
                        className="showcase-img"
                    />
                </Col>

            </Row>
        </Container>
    );
};

export default VisitorManagement;
