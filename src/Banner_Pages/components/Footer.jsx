import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import footerlogo from './assets/images/Office3iLogo_white.png'

import Facebook from './assets/images/Footer/Facebook.png'
import Instagram from './assets/images/Footer/Instagram.png'
import Linkedin from './assets/images/Footer/Linkedin.png'
import Twitter from './assets/images/Footer/Twitter.png'
import './assets/css/footerstyle.css'
import { Link } from 'react-router-dom';

const Footer = () => {


  return (

    <footer className="p-4" style={{ background: '#004A78', color: 'white' }}>
      <Container>
        <Row>

          <Col md="4" className="d-flex flex-column mb-4">
            <img src={footerlogo} alt="Company Logo" style={{ width: '40%' }} />
            <div>
              <h5 className='sec__head__foot mb-4'>Location</h5>
              <p>
                No. 624, Khivraj Buildings,
                4th Floor, Thousand Lights,
                Anna Salai, Chennai, TamilNadu - 600006.
              </p>
            </div>

            <div>
              <h5 className='sec__head__foot mb-4'>Branch Location</h5>
              <p>
               No. 27/6(17) Central Street, Kilpauk Garden, Kilpauk, Chennai, TamilNadu - 600010
              </p>
            </div>
          </Col>



          <Col md="2">
            <h5 className='sec__head__foot mb-4'>Modules</h5>
            <ul className="list-unstyled">
              <li><Link to="/employeemanagement" style={{ color: 'white', textDecoration:'none' }}>Employee management</Link></li>
              <li><Link to="/attendance" style={{ color: 'white', textDecoration:'none' }}>Attendance</Link></li>
              <li><Link to="/recruitment" style={{ color: 'white', textDecoration:'none' }}>Recruitment</Link></li>
              <li><Link to="/payroll" style={{ color: 'white', textDecoration:'none' }}>Payroll</Link></li>
              <li><Link to="/accounts" style={{ color: 'white', textDecoration:'none' }}>Accounts</Link></li>

            </ul>
          </Col>
          <Col md="2">
            <h5 className='sec__head__foot mb-4'>Modules</h5>
            <ul className="list-unstyled">
              <li><Link to="/salesmanagement" style={{ color: 'white', textDecoration:'none' }}>Sales Management</Link></li>
              <li><Link to="/assetmanagement" style={{ color: 'white', textDecoration:'none' }}>Asset Management</Link></li>
              <li><Link to="/teammanagement" style={{ color: 'white', textDecoration:'none' }}>Team Management</Link></li>
              <li><Link to="/visitormanagement" style={{ color: 'white', textDecoration:'none' }}>Visitor Management</Link></li>
              <li><Link to="/helpdesk" style={{ color: 'white', textDecoration:'none' }}>Help Desk</Link></li>

            </ul>
          </Col>
          <Col md="2">
            <h5 className='sec__head__foot mb-4'>Products</h5>
            <ul className="list-unstyled">
              <li>Sales Kit</li>
              <li>HR Entity</li>
              <li>Office Management System</li>
              <li>Advance Management</li>

            </ul>
          </Col>
          <Col md="2">
            <h5 className='sec__head__foot mb-4'>Follow Us</h5>
            <ul className="list-unstyled" style={{ display: 'flex', alignItems: 'center' }}>
              <li><a href="#" className="text-white"> <img src={Facebook} alt='Facebook' /></a></li>
              <li><a href="#" className="text-white"> <img src={Instagram} alt='Instagram' /></a></li>
              <li><a href="#" className="text-white"> <img src={Linkedin} alt='Linkedin' /></a></li>
              <Link to="https://x.com/office3i" style={{ color: 'white' }}> <img src={Twitter} alt='Twitter' /></Link>
            </ul>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col style={{ textAlign: 'left' }}>
            <p>&copy; 2024 Office3i. All rights reserved.</p>
          </Col>

          <Col style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
            <div>
              <Link to="/termsandcondition" style={{ color: 'white' }}>Terms and Condition</Link>
            </div>
            <span>
              |
            </span>
            <div>
              <Link to="/privacypolicy" style={{ color: 'white' }}>Privacy Policy</Link>
            </div>
            <span>
              |
            </span>
            <div>
              <Link to="/cancellationrefundpolicy" style={{ color: 'white' }}>Cancellation Refund Policy</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
