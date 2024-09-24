import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Assets/css/TeamManagementContent.css'


import events from '../Assets/images/contentimages/TeamManagement/events.png';
import meeting from '../Assets/images/contentimages/TeamManagement/meeting.png';
import project from '../Assets/images/contentimages/TeamManagement/project.png';
import task from '../Assets/images/contentimages/TeamManagement/task.png';
import assignedtask from '../Assets/images/contentimages/TeamManagement/assignedtask.png';


export default function TeamManagementContent() {
    return (
        <Container className='mt-8 mb-8 teammanagement-content-container'>
            {/* events */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={events} alt='events' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>EVENTS</h2>
                    <p>Enhance event management with our futuristic system: seamlessly integrate, update, and remove event details from a centralized list for optimal precision and control.</p>
                </Col>
            </Row>

            {/* meeting */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={meeting} alt='meeting' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>MEETING</h2>
                    <p>Upgrade team efficiency with our platform: effortlessly schedule and execute meetings with team members for improved collaboration.</p>
                   
                </Col>
            </Row>

            {/* project */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={project} alt='project' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>TEAM TASK</h2>
                    <p><span className='content-subheading'>Project:</span> Effortlessly organize your workflow with our module that lets you create and track projects, providing a clear overview of tasks and progress.</p>

                </Col>
            </Row>

            {/* task */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={task} alt='task' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>TEAM TASK</h2>
                    <p><span className='content-subheading'>Task:</span> Optimize team productivity with an advanced task module that simplifies delegation and ensures efficient task monitoring.</p>

                </Col>
            </Row>

            {/* assignedtask */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={assignedtask} alt='assignedtask' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>TEAM TASK</h2>
                    <p><span className='content-subheading'>Assigned Task:</span> Display assigned tasks for specific individuals, while enabling them to delegate tasks to their team members, ensuring smooth workflow and collaboration.</p>

                </Col>
            </Row>

           

            
        </Container>
    );
}
