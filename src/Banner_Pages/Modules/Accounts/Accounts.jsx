import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Assets/css/Accounts.css';
import Accountsimg from '../Assets/images/showcaseimages/Accounts.png'


import goodsservices from '../Assets/images/showcaseimages/Icons/Accounts/goodsservices.png'
import companydetails from '../Assets/images/showcaseimages/Icons/Accounts/companydetails.png'
import salesinvoice from '../Assets/images/showcaseimages/Icons/Accounts/salesinvoice.png'
import purchaseinvoice from '../Assets/images/showcaseimages/Icons/Accounts/purchaseinvoice.png'
import dailyaccounts from '../Assets/images/showcaseimages/Icons/Accounts/dailyaccounts.png'

import { useEffect } from 'react';

const Accounts = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Container className="accounts-container">
            <Row>

                <Col md={6} className="text__section mb-4">
                    <h1>Accounts</h1>
                    <p className='mb-4 accounts__content'>
                        Unlock financial excellence with our innovative accounts management
                        system. Easily track expenses, streamline budgeting, and handle
                        transactions with unmatched efficiency. Empower your organization
                        with a clear, concise, and dynamic approach to financial management.
                    </p>
                    <Row className="button-group">
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="accounts-button"><img src={goodsservices} alt='goodsservices' /> Goods & Services</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="accounts-button"><img src={companydetails} alt='companydetails' /> Company Details</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="accounts-button"><img src={salesinvoice} alt='salesinvoice' /> Sales Invoice</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="accounts-button"><img src={purchaseinvoice} alt='purchaseinvoice' /> Purchase Invoice</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="accounts-button"><img src={dailyaccounts} alt='dailyaccounts' /> Daily Accounts</Button>
                        </Col>

                    </Row>
                </Col>
                <Col md={6} className="image-section">
                    {/* Image can be imported and used here */}
                    <img
                        src={Accountsimg}
                        alt="Accountsimg"
                        className="showcase-img"
                    />
                </Col>

            </Row>
        </Container>
    );
};

export default Accounts;
