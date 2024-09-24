import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Assets/css/Payroll.css';
import Payrollimg from '../Assets/images/showcaseimages/Payroll.png'


import overtimecalculation from '../Assets/images/showcaseimages/Icons/Payroll/overtimecalculation.png'
import assignemployeesalary from '../Assets/images/showcaseimages/Icons/Payroll/assignemployeesalary.png'
import salarycalculation from '../Assets/images/showcaseimages/Icons/Payroll/salarycalculation.png'
import generatepayslip from '../Assets/images/showcaseimages/Icons/Payroll/generatepayslip.png'
import paysliplist from '../Assets/images/showcaseimages/Icons/Payroll/paysliplist.png'

import { useEffect } from 'react';

const Payroll = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Container className="payroll-container">
            <Row>

                <Col md={6} className="text__section mb-4">
                    <h1>Payroll</h1>
                    <p className='mb-4 payroll__content'>
                        Upgrade your payroll system with our cutting-edge feature. Efficiently
                        manage intricate salary calculations, automate deductions, and
                        ensure regulatory compliance with exceptional precision. Achieve
                        streamlined payroll management and superior financial accuracy.
                    </p>
                    <Row className="button-group">
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="payroll-button"><img src={overtimecalculation} alt='overtimecalculation' /> Overtime Calculation</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="payroll-button"><img src={assignemployeesalary} alt='assignemployeesalary' /> Assign Employee Salary</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="payroll-button"><img src={salarycalculation} alt='salarycalculation' /> Salary Calculation</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="payroll-button"><img src={generatepayslip} alt='generatepayslip' /> Generate Payslip</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="payroll-button"><img src={paysliplist} alt='paysliplist' /> Payslip List</Button>
                        </Col>

                    </Row>
                </Col>
                <Col md={6} className="image-section">
                    {/* Image can be imported and used here */}
                    <img
                        src={Payrollimg}
                        alt="Payrollimg"
                        className="showcase-img"
                    />
                </Col>

            </Row>
        </Container>
    );
};

export default Payroll;
