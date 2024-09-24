import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Assets/css/VisitorManagementContent.css'


import addvisitor from '../Assets/images/contentimages/VisitorManagement/addvisitor.png';
import visitorlog from '../Assets/images/contentimages/VisitorManagement/visitorlog.png';


export default function VisitorManagementContent() {
    return (
        <Container className='mt-8 mb-8 visitormanagement-content-container'>
            {/* addvisitor */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={addvisitor} alt='addvisitor' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>ADD VISITOR</h2>
                    <p>Efficiently log and oversee visitor information through advanced front desk modules, perfect integrated across tablets and other devices.</p>
                </Col>
            </Row>

            {/* visitorlog */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={visitorlog} alt='visitorlog' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>VISITOR LOG</h2>
                    <p>Develop a detailed visitor log that captures and organizes all visitor information for efficient access and management.</p>
                   
                </Col>
            </Row>

      

           

            
        </Container>
    );
}
