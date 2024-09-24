import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/headerstyle.css';
import logo from './assets/images/Office3iLogo.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='top__container'>
                {/* Optional top container content */}
            </div>
            <Navbar expand="md" className='shadow-sm'>
                <Container>
                    {/* Align Logo to the left */}
                    <Navbar.Brand className="d-flex align-items-center">
                        <Link to="/">
                        <img src={logo} alt='logo' className='header_logo' />
                        </Link>
                    </Navbar.Brand>

                    {/* Align navigation to the right */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="align-items-left">
                            <ScrollLink
                                to="whatWeDoSection"
                                smooth={true}
                                duration={500}
                                className="nav-link"
                                style={{ color: '#004A78', cursor: 'pointer', marginRight: '10px' }} // Adjust margin as needed
                            >
                                What We Do
                            </ScrollLink>

                            <ScrollLink
                                to="ModulesSection"
                                smooth={true}
                                duration={500}
                                className="nav-link"
                                style={{ color: '#004A78', cursor: 'pointer', marginRight: '10px' }} // Adjust margin as needed
                            >
                                Modules
                            </ScrollLink>

                            <ScrollLink
                                to="ProductsSection"
                                smooth={true}
                                duration={500}
                                className="nav-link"
                                style={{ color: '#004A78', cursor: 'pointer', marginRight: '10px' }} // Adjust margin as needed
                            >
                                Products
                            </ScrollLink>

                            <ScrollLink
                                to="ContactSection"
                                smooth={true}
                                duration={500}
                                className="nav-link"
                                style={{ color: '#004A78', cursor: 'pointer', marginRight: '10px' }} // Adjust margin as needed
                            >
                                Contact
                            </ScrollLink>
                        </Nav>
                        <div className="d-flex align-items-center mt-2 mt-md-0">
                            <Link to="/login"><Button className="me-2 sing__in" style={{ padding: '5px 10px', fontSize: '14px' }}>Sign In</Button></Link>
                            <Link to="/Tryitfree"><Button className='sign__up' style={{ padding: '5px 10px', fontSize: '14px' }}>Try It Free</Button></Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
