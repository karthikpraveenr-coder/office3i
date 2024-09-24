import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Assets/css/Recruitmet.css';
import Recruitment from '../Assets/images/showcaseimages/Recruitment.png'


import postjob from '../Assets/images/showcaseimages/Icons/Recruitment/postjob.png'
import listjob from '../Assets/images/showcaseimages/Icons/Recruitment/listjob.png'
import candidatetracker from '../Assets/images/showcaseimages/Icons/Recruitment/candidatetracker.png'
import searchresume from '../Assets/images/showcaseimages/Icons/Recruitment/searchresume.png'

import { useEffect } from 'react';

const Recruitmet = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Container className="recruitment-container">
            <Row>

                <Col md={6} className="text__section mb-4">
                    <h1>Recruitment</h1>
                    <p className='mb-4 recruitment__content'>
                        Elevate your recruitment strategy with a cutting-edge system that
                        attracts top-tier talent, optimizes candidate management, and
                        ensures a seamless on boarding experience,all designed to
                        advance your organization’s goals.
                    </p>
                    <Row className="button-group">
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="recruitment-button"><img src={postjob} alt='postjob' /> Post Job</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="recruitment-button"><img src={listjob} alt='listjob' /> List Job</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="recruitment-button"><img src={candidatetracker} alt='candidatetracker' /> Candidate Tracker</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="recruitment-button"><img src={searchresume} alt='searchresume' /> Search Resume</Button>
                        </Col>
                      
                    </Row>
                </Col>
                <Col md={6} className="image-section">
                    {/* Image can be imported and used here */}
                    <img
                        src={Recruitment}
                        alt="Recruitment"
                        className="showcase-img"
                    />
                </Col>

            </Row>
        </Container>
    );
};

export default Recruitmet;
