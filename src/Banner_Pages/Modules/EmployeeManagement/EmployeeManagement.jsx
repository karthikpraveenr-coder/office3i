import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Assets/css/EmployeeManagement.css'; 
import employeemanagement from '../Assets/images/showcaseimages/Employeemanagement.png'

import Attendancepolicy from '../Assets/images/showcaseimages/Icons/Employeemanagement/Attendancepolicy.png'
import EmployeeInfo from '../Assets/images/showcaseimages/Icons/Employeemanagement/EmployeeInfo.png'
import Templates from '../Assets/images/showcaseimages/Icons/Employeemanagement/Templates.png'
import companypolicy from '../Assets/images/showcaseimages/Icons/Employeemanagement/companypolicy.png'
import orgstructure from '../Assets/images/showcaseimages/Icons/Employeemanagement/orgstructure.png'
import { useEffect } from 'react';

const EmployeeManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <Container className="employee-management-container">
      <Row>

        <Col md={6} className="text__section">
          <h1>Employee Management</h1>
          <p className='mb-4'>
            Revolutionize your HR processes with Office3i's Employee Management feature. Our system
            offers a clear organization structure, ensuring every team member knows their role and
            reporting lines. Seamlessly manage attendance policies and company guidelines, keeping
            everyone aligned and compliant. Utilize customizable templates for efficient
            documentation and easily access comprehensive employee information.
          </p>
          <Row className="button-group">
            <Col md={6} className='btn-container'>
              <Button variant="light" className="management-button"><img src={orgstructure} alt='orgstructure' /> ORG Structure</Button>
            </Col>
            <Col md={6} className='btn-container'>
              <Button variant="light" className="management-button"><img src={Attendancepolicy} alt='Attendancepolicy' /> Attendance Policy</Button>
            </Col>
            <Col md={6} className='btn-container'>
              <Button variant="light" className="management-button"><img src={companypolicy} alt='companypolicy' /> Company Policy</Button>
            </Col>
            <Col md={6} className='btn-container'>
              <Button variant="light" className="management-button"><img src={EmployeeInfo} alt='EmployeeInfo' /> Employee Info</Button>
            </Col>
            <Col md={6} className='btn-container'>
              <Button variant="light" className="management-button"><img src={Templates} alt='Templates' /> Templates</Button>
            </Col>
          </Row>
        </Col>
        <Col md={6} className="image-section">
          {/* Image can be imported and used here */}
          <img
            src={employeemanagement}
            alt="Employee Management"
            className="showcase-img"
          />
        </Col>

      </Row>
    </Container>
  );
};

export default EmployeeManagement;
