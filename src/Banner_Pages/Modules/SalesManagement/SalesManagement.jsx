import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Assets/css/SalesManagement.css';
import Salesmanagementimg from '../Assets/images/showcaseimages/Salesmanagement.png'


import lead from '../Assets/images/showcaseimages/Icons/SalesManagement/lead.png'
import presales from '../Assets/images/showcaseimages/Icons/SalesManagement/presales.png'
import sales from '../Assets/images/showcaseimages/Icons/SalesManagement/sales.png'

import { useEffect } from 'react';

const SalesManagement = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Container className="salesmanagement-container">
            <Row>

                <Col md={6} className="text__section mb-4">
                    <h1>Sales Management</h1>
                    <p className='mb-4 salesmanagement__content'>
                        Enhance your sales management with our advanced platform. Seamlessly track and manage enquiry lists, add new leads, and maintain accurate records. Achieve peak sales performance with
                        our sophisticated tools.
                    </p>
                    <Row className="button-group">
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="salesmanagement-button"><img src={lead} alt='lead' /> Lead</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="salesmanagement-button"><img src={presales} alt='presales' /> Pre Sales</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="salesmanagement-button"><img src={sales} alt='sales' /> Sales</Button>
                        </Col>
                    

                    </Row>
                </Col>
                <Col md={6} className="image-section">
                    {/* Image can be imported and used here */}
                    <img
                        src={Salesmanagementimg}
                        alt="Salesmanagementimg"
                        className="showcase-img"
                    />
                </Col>

            </Row>
        </Container>
    );
};

export default SalesManagement;
