import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Assets/css/AssetManagement.css';
import Assetmanagementimg from '../Assets/images/showcaseimages/Assetmanagement.png'


import assettype from '../Assets/images/showcaseimages/Icons/AssetManagement/assettype.png'
import assignasset from '../Assets/images/showcaseimages/Icons/AssetManagement/assignasset.png'
import assetlist from '../Assets/images/showcaseimages/Icons/AssetManagement/assetlist.png'

import { useEffect } from 'react';

const AssetManagement = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Container className="assetmanagement-container">
            <Row>

                <Col md={6} className="text__section mb-4">
                    <h1>Asset Management</h1>
                    <p className='mb-4 assetmanagement__content'>
                        Promote asset management to new heights with our premium modules-Continuously oversee asset tracking, management, and optimization with cutting-edge precision. Achieve unparalleled operational control and strategic foresight.
                    </p>
                    <Row className="button-group">
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="assetmanagement-button"><img src={assettype} alt='assettype' /> Assets Type</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="assetmanagement-button"><img src={assignasset} alt='assignasset' /> Assign Assets</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="assetmanagement-button"><img src={assetlist} alt='assetlist' /> Asset List</Button>
                        </Col>


                    </Row>
                </Col>
                <Col md={6} className="image-section">
                    {/* Image can be imported and used here */}
                    <img
                        src={Assetmanagementimg}
                        alt="Assetmanagementimg"
                        className="showcase-img"
                    />
                </Col>

            </Row>
        </Container>
    );
};

export default AssetManagement;
