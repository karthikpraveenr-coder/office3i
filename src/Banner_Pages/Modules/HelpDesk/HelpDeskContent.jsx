import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Assets/css/HelpDeskContent.css'


import issuetype from '../Assets/images/contentimages/HelpDesk/issuetype.png';
import raiseticket from '../Assets/images/contentimages/HelpDesk/raiseticket.png';
import ticketlistassignedlist from '../Assets/images/contentimages/HelpDesk/ticketlistassignedlist.png';


export default function HelpDeskContent() {
    return (
        <Container className='mt-8 mb-8 helpdesk-content-container'>
            {/* issuetype */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={issuetype} alt='issuetype' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>ISSUE TYPE</h2>
                    <p>Customize issue categories to fit your organization’s needs with precision and clarity.</p>
                </Col>
            </Row>

            {/* raiseticket */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={raiseticket} alt='raiseticket' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>RAISE TICKET</h2>
                    <p>Simplify support with our advanced ticketing system, enabling swift issue reporting and tracking</p>

                </Col>
            </Row>

            {/* ticketlistassignedlist */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={ticketlistassignedlist} alt='ticketlistassignedlist' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>TICKETS LIST & ASSIGNED LIST</h2>
                    <p>Efficiently track and manage support requests with our advanced ticketing system. View raised tickets and manually assign issues to the appropriate team members for swift resolutions.</p>

                </Col>
            </Row>





        </Container>
    );
}
