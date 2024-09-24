import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Assets/css/RecruitmentContent.css'
import postjob from '../Assets/images/contentimages/Recruitment/postjob.png';
import candidatetracker from '../Assets/images/contentimages/Recruitment/candidatetracker.png';
import searchresume from '../Assets/images/contentimages/Recruitment/searchresume.png';


export default function RecruitmentContent() {
    return (
        <Container className='mt-8 mb-8 recruitment-content-container'>
            {/* ORG STRUCTURE */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={postjob} alt='postjob' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>POST JOB</h2>
                    <p>Facile post jobs that instantly reflect on your organization’s career page, attracting top talent with ease.</p>
                </Col>
            </Row>

            {/* ATTENDANCE POLICY */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={candidatetracker} alt='candidatetracker' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>CANDIDATE TRACKER</h2>
                    <p><span className='content-subheading'>Call Tracker:</span>  Upgrade your hiring strategy with an advanced system for seamlessly integrating and organizing candidate resumes.</p>
                    <p><span className='content-subheading'>View Tracker:</span>  Leverage advanced features to effortlessly track and update candidate status and details for a streamlined recruitment process.</p>
                   
                </Col>
            </Row>

            {/* COMPANY POLICY */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={searchresume} alt='searchresume' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>SEARCH RESUME</h2>
                    <p>Harness advanced filters to swiftly identify the best candidates from resumes for a focused and efficient recruitment strategy.</p>

                </Col>
            </Row>

            
        </Container>
    );
}
