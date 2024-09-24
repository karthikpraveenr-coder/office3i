import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Assets/css/AssetManagementContent.css'


import assettype from '../Assets/images/contentimages/AssetManagement/assettype.png';
import assignassets from '../Assets/images/contentimages/AssetManagement/assignassets.png';


export default function AssetManagementContent() {
    return (
        <Container className='mt-8 mb-8 assetmanagement-content-container'>
            {/* assettype */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={assettype} alt='assettype' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>ASSET TYPE</h2>
                    <p>Define and categorize your organization's assets seamlessly, ensuring optimal management and planned utilization.</p>
                </Col>
            </Row>

            {/* assignassets */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={assignassets} alt='assignassets' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>ASSIGN ASSETS</h2>
                    <p>Assign assets to employees with ease, and effortlessly store and display a comprehensive list for streamlined management.</p>

                </Col>
            </Row>





        </Container>
    );
}
