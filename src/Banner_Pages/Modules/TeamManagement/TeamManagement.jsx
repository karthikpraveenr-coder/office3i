import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Assets/css/TeamManagement.css';
import Teammanagementimg from '../Assets/images/showcaseimages/Teammanagement.png'


import event from '../Assets/images/showcaseimages/Icons/TeamManagement/event.png'
import meeting from '../Assets/images/showcaseimages/Icons/TeamManagement/meeting.png'
import teamtask from '../Assets/images/showcaseimages/Icons/TeamManagement/teamtask.png'

import { useEffect } from 'react';

const TeamManagement = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Container className="teammanagement-container">
            <Row>

                <Col md={6} className="text__section mb-4">
                    <h1>Team Management</h1>
                    <p className='mb-4 teammanagement__content'>
                        Optimize team coordination with advanced tools for project management, resource allocation, and real-time collaboration. Enhance team efficiency, ensure smooth workflow, and drive results with a unified management system that adapts to your organization's needs.
                    </p>
                    <Row className="button-group">
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="teammanagement-button"><img src={event} alt='event' /> Events</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="teammanagement-button"><img src={meeting} alt='meeting' /> Meeting</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="teammanagement-button"><img src={teamtask} alt='teamtask' /> Team Task</Button>
                        </Col>


                    </Row>
                </Col>
                <Col md={6} className="image-section">
                    {/* Image can be imported and used here */}
                    <img
                        src={Teammanagementimg}
                        alt="Teammanagementimg"
                        className="showcase-img"
                    />
                </Col>

            </Row>
        </Container>
    );
};

export default TeamManagement;
