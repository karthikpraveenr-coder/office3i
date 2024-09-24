import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Assets/css/AccountsContent.css'


import goodsservices from '../Assets/images/contentimages/Accounts/goodsservices.png';
import companydetails from '../Assets/images/contentimages/Accounts/companydetails.png';
import salesinvoice from '../Assets/images/contentimages/Accounts/salesinvoice.png';
import purchaseinvoice from '../Assets/images/contentimages/Accounts/purchaseinvoice.png';
import dailyaccounts from '../Assets/images/contentimages/Accounts/dailyaccounts.png';


export default function AccountsContent() {
    return (
        <Container className='mt-8 mb-8 accounts-content-container'>
            {/* goodsservices */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={goodsservices} alt='goodsservices' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>GOODS & SERVICES</h2>
                    <p>Catalog your organization’s goods and services for precise and efficient financial management.</p>
                </Col>
            </Row>

            {/* companydetails */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={companydetails} alt='companydetails' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>COMPANY DETAILS</h2>
                    <p>Instantly update and define company details for a complete and dynamic organizational profile.</p>
                   
                </Col>
            </Row>

            {/* salesinvoice */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={salesinvoice} alt='salesinvoice' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>SALES INVOICE</h2>
                    <p>Craft compelling sales invoices for effortless and impactful financial transactions.</p>

                </Col>
            </Row>

            {/* purchaseinvoice */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={purchaseinvoice} alt='purchaseinvoice' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>PURCHASE INVOICE</h2>
                    <p>Create and download purchase invoices for streamlined and efficient record-keeping.</p>

                </Col>
            </Row>

            {/* dailyaccounts */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={dailyaccounts} alt='dailyaccounts' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>DAILY ACCOUNTS</h2>
                    <p>Manage daily accounts and balance credits and debits with smooth and accurate financial tracking.</p>

                </Col>
            </Row>

            
        </Container>
    );
}
