import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Assets/css/EmployeeManagementContent.css'
import Orgstructure from '../Assets/images/contentimages/Employeemanagement/Orgstructure.png';
import Attendancepolicy from '../Assets/images/contentimages/Employeemanagement/Attendancepolicy.png';
import Companypolicy from '../Assets/images/contentimages/Employeemanagement/Companypolicy.png';
import Templates from '../Assets/images/contentimages/Employeemanagement/Templates.png';
import Employeeinfo from '../Assets/images/contentimages/Employeemanagement/Employeeinfo.png';

export default function EmployeeManagementContent() {
    return (
        <Container className='mt-8 mb-8 employee-management-content-container'>
            {/* ORG STRUCTURE */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={Orgstructure} alt='orgstructure' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>ORG STRUCTURE</h2>
                    <p><span className='content-subheading'>Add Role:</span> Customize features by employee designation for optimized access and streamlined workflows.</p>
                    <p><span className='content-subheading'>Role List:</span> Effortlessly edit and delete features by employee designation for precise access control.</p>
                    <p><span className='content-subheading'>Supervisor List:</span> Strategically assign supervisors by role, driving targeted leadership and maximizing team effectiveness.</p>
                    <p><span className='content-subheading'>ORG Chart:</span> Instantly update your organizational chart with new employees for a clear and dynamic structure.</p>
                </Col>
            </Row>

            {/* ATTENDANCE POLICY */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={Attendancepolicy} alt='Attendancepolicy' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>ATTENDANCE POLICY</h2>
                    <p><span className='content-subheading'>Attendance Slot:</span> Set attendance slots to streamline shift  assignments across your organization.</p>
                    <p><span className='content-subheading'>Leave Policy:</span> Quickly define and manage leave policies  to employee time-off management.</p>
                    <p><span className='content-subheading'>Assign Employee Shift:</span> Set and manage employee shifts  for optimal workflow and efficiency. </p>
                    <p><span className='content-subheading'>Holiday List:</span> Establish and update your organization’s  holiday calendar.</p>
                </Col>
            </Row>

            {/* COMPANY POLICY */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={Companypolicy} alt='Companypolicy' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>COMPANY POLICY</h2>
                    <p>Create and revise company policy templates for clear and  consistent employee guidelines.</p>

                </Col>
            </Row>

            {/* TEMPLATES */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={Templates} alt='Templates' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>TEMPLATES</h2>
                    <p><span className='content-subheading'>Offer Letter:</span> Create standout offer letter templates  effortlessly for a polished recruitment experience.</p>
                    <p><span className='content-subheading'>Appointment Letter:</span> Craft and tailor appointment letter templates for a brighten and professional on boarding experience.</p>
                    <p><span className='content-subheading'>Relieving letter:</span> Generate and personalize relieving  letter templates for a refined and courteous departure experience.</p>
                </Col>
            </Row>

            {/* EMPLOYEE INFO */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={Employeeinfo} alt='Employeeinfo' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>EMPLOYEE INFO</h2>
                    <p><span className='content-subheading'>Add Employee:</span> Capture and manage complete  employee details from onboarding to ongoing updates.</p>
                    <p><span className='content-subheading'>Employee List:</span> Its a catalog of team members, showing  their names, roles, and areas of expertise. It provides a quick overview of who is part of the team.</p>
                    <p><span className='content-subheading'>Probation Completion:</span> Track and update probation status with a simple change-of-status function for a seamless transition.</p>
                </Col>
            </Row>
        </Container>
    );
}
