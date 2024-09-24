import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Assets/css/PayrollContent.css'

import overtimecalculation from '../Assets/images/contentimages/Payroll/overtimecalculation.png';
import assignemployeesalary from '../Assets/images/contentimages/Payroll/assignemployeesalary.png';
import salarycalculation from '../Assets/images/contentimages/Payroll/salarycalculation.png';
import generatepayslip from '../Assets/images/contentimages/Payroll/generatepayslip.png';
import paysliplist from '../Assets/images/contentimages/Payroll/paysliplist.png';


export default function PayrollContent() {
    return (
        <Container className='mt-8 mb-8 payroll-content-container'>
            {/* overtimecalculation */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={overtimecalculation} alt='overtimecalculation' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>OVERTIME CALCULATION</h2>
                    <p>Achieve flawless payroll with automatic overtime calculations for precise and effortless compensation management.</p>
                </Col>
            </Row>

            {/* assignemployeesalary */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={assignemployeesalary} alt='assignemployeesalary' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>ASSIGN EMPLOYEE SALARY</h2>
                    <p>Deploy advanced features to effortlessly allocate and manage employee salaries, ensuring precision in your payroll process.</p>
                   
                </Col>
            </Row>

            {/* salarycalculation */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={salarycalculation} alt='salarycalculation' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>SALARY CALCULATIONS</h2>
                    <p>Achieve meticulous payroll management with advanced features for accurate salary calculations and detailed pay-out breakdowns.</p>

                </Col>
            </Row>

            {/* generatepayslip */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={generatepayslip} alt='generatepayslip' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>GENERATE PAYSLIP</h2>
                    <p>Automate payslip generation with advanced attributes for impeccable accuracy and effortless payroll management.</p>

                </Col>
            </Row>

            {/* paysliplist */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={paysliplist} alt='paysliplist' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>PAYSLIP LIST</h2>
                    <p>Facilitate seamless payslip access and downloads for employees with a sleek, high-performance interface.</p>

                </Col>
            </Row>

            
        </Container>
    );
}
