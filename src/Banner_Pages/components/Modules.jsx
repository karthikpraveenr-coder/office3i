import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/css/modules.css';
import Employee_Management from './assets/images/modules/employee_management.png';
import Attendance from './assets/images/modules/attendance.png';
import Recruitment from './assets/images/modules/Recruitment.png';
import Payroll from './assets/images/modules/Payroll.png';
import Accounts from './assets/images/modules/Accounts.png';
import Sales from './assets/images/modules/Sales.png';
import Assets_Management from './assets/images/modules/Assets_management.png';
import Team_Management from './assets/images/modules/Team_management.png';
import Maintenance from './assets/images/modules/Maintenance.png';
import Help_Desk from './assets/images/modules/HelpDesk.png';
import Visitor from './assets/images/modules/visitor.png';
import { Link } from 'react-router-dom';

function Modules() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div id="ModulesSection" className='container mt-5 mb-5'>
      <div className='sec__head-container'>
        <h2 className="text-center sec__head mb-5">Modules</h2>
      </div>
      <Row className='modules__row'>
        <Col md={2} className='mb-4'>
          <Link to="/employeemanagement" style={{ textDecoration: 'none' }}>
            <div className='modules__box__container' data-aos="zoom-in-up">
              <div className='modules__box'>
                <img src={Employee_Management} alt='Employee Management' />
              </div>
              <span className='modules__name'>Employee Management</span>
            </div>
          </Link>
        </Col>
        <Col md={2} className='mb-4'>
          <Link to="/attendance" style={{ textDecoration: 'none' }}>
            <div className='modules__box__container' data-aos="zoom-in-up">
              <div className='modules__box'>
                <img src={Attendance} alt='Attendance' />
              </div>
              <span className='modules__name'>Attendance</span>
            </div>
          </Link>
        </Col>
        <Col md={2} className='mb-4'>
          <Link to="/recruitment" style={{ textDecoration: 'none' }}>
            <div className='modules__box__container' data-aos="zoom-in-up">
              <div className='modules__box'>
                <img src={Recruitment} alt='Recruitment' />
              </div>
              <span className='modules__name'>Recruitment</span>
            </div>
          </Link>
        </Col>
        <Col md={2} className='mb-4'>
          <Link to="/payroll" style={{ textDecoration: 'none' }}>
            <div className='modules__box__container' data-aos="zoom-in-up">
              <div className='modules__box'>
                <img src={Payroll} alt='Payroll' />
              </div>
              <span className='modules__name'>Payroll</span>
            </div>
          </Link>
        </Col>
        <Col md={2} className='mb-4'>
          <Link to="/accounts" style={{ textDecoration: 'none' }}>
            <div className='modules__box__container' data-aos="zoom-in-up">
              <div className='modules__box'>
                <img src={Accounts} alt='Accounts' />
              </div>
              <span className='modules__name'>Accounts</span>
            </div>
          </Link>
        </Col>
      </Row>
      <Row className='modules__row'>
        <Col md={2} className='mb-4'>
          <Link to="/salesmanagement" style={{ textDecoration: 'none' }}>
            <div className='modules__box__container' data-aos="zoom-in-up">
              <div className='modules__box'>
                <img src={Sales} alt='Sales' />
              </div>
              <span className='modules__name'>Sales Management</span>
            </div>
          </Link>
        </Col>
        <Col md={2} className='mb-4'>
          <Link to="/assetmanagement" style={{ textDecoration: 'none' }}>
            <div className='modules__box__container' data-aos="zoom-in-up">
              <div className='modules__box'>
                <img src={Assets_Management} alt='Assets Management' />
              </div>
              <span className='modules__name'>Assets Management</span>
            </div>
          </Link>
        </Col>
        <Col md={2} className='mb-4'>
          <Link to="/teammanagement" style={{ textDecoration: 'none' }}>
            <div className='modules__box__container' data-aos="zoom-in-up">
              <div className='modules__box'>
                <img src={Team_Management} alt='Team Management' />
              </div>
              <span className='modules__name'>Team Management</span>
            </div>
          </Link>
        </Col>
        <Col md={2} className='mb-4'>
          <Link to="/visitormanagement" style={{ textDecoration: 'none' }}>
            <div className='modules__box__container' data-aos="zoom-in-up">
              <div className='modules__box'>
                <img src={Visitor} alt='Visitor' />
              </div>
              <span className='modules__name'>Visitor Management</span>
            </div>
          </Link>
        </Col>
        <Col md={2} className='mb-4'>
          <Link to="/helpdesk" style={{ textDecoration: 'none' }}>
            <div className='modules__box__container' data-aos="zoom-in-up">
              <div className='modules__box'>
                <img src={Help_Desk} alt='Help Desk' />
              </div>
              <span className='modules__name'>Help Desk</span>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Modules;
