import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Assets/css/HelpDesk.css';
import Helpdeskimg from '../Assets/images/showcaseimages/Helpdesk.png'


import issuetype from '../Assets/images/showcaseimages/Icons/HelpDesk/issuetype.png'
import raiseticket from '../Assets/images/showcaseimages/Icons/HelpDesk/raiseticket.png'
import ticketlist from '../Assets/images/showcaseimages/Icons/HelpDesk/ticketlist.png'
import assignedlist from '../Assets/images/showcaseimages/Icons/HelpDesk/assignedlist.png'

import { useEffect } from 'react';

const HelpDesk = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Container className="helpdesk-container">
            <Row>

                <Col md={6} className="text__section mb-4">
                    <h1>Help Desk</h1>
                    <p className='mb-4 helpdesk__content'>
                    Refine support with our advanced Helpdesk module: Sleekly manage and resolve issues through polished ticketing, real-time tracking, and comprehensive analytics. Drive efficiency and deliver outstanding service with cutting-edge support tools.
                    </p>
                    <Row className="button-group">
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="helpdesk-button"><img src={issuetype} alt='issuetype' /> Issue Type</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="helpdesk-button"><img src={raiseticket} alt='raiseticket' /> Raise Ticket</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="helpdesk-button"><img src={ticketlist} alt='ticketlist' /> Tickets List</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="helpdesk-button"><img src={assignedlist} alt='assignedlist' /> Assigned List</Button>
                        </Col>


                    </Row>
                </Col>
                <Col md={6} className="image-section">
                    {/* Image can be imported and used here */}
                    <img
                        src={Helpdeskimg}
                        alt="Helpdeskimg"
                        className="showcase-img"
                    />
                </Col>

            </Row>
        </Container>
    );
};

export default HelpDesk;
