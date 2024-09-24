import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Assets/css/SalesManagementContent.css'


import leads from '../Assets/images/contentimages/SalesManagement/leads.png';
import presales from '../Assets/images/contentimages/SalesManagement/presales.png';
import sales from '../Assets/images/contentimages/SalesManagement/sales.png';


export default function SalesManagementContent() {
    return (
        <Container className='mt-8 mb-8 salesmanagement-content-container'>
            {/* leads */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={leads} alt='leads' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>LEADS</h2>
                    <p>Manage your sales pipeline with our advanced system. Capture website enquiries, add new leads, and maintain a rigorous client database for optimal sales performance.</p>
                </Col>
            </Row>

            {/* presales */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={presales} alt='presales' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>PRE SALES</h2>
                    <p>Transfigure presales with our system: coherent handle enquiry lists, add leads, and assign sales roles for unparalleled efficiency.</p>
                   
                </Col>
            </Row>

            {/* salesinvoice */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={sales} alt='sales' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>SALES</h2>
                    <p>Show lead list to that assigned employee and can view and update assigned lead details to ensure precise sales management and immaculate operational flow</p>

                </Col>
            </Row>

           

            
        </Container>
    );
}
