import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Assets/css/Attendance.css';
import Attendanceimg from '../Assets/images/showcaseimages/Attendance.png'

import DailyAttendance from '../Assets/images/showcaseimages/Icons/Attendance/DailyAttendance.png'
import HRapprovalList from '../Assets/images/showcaseimages/Icons/Attendance/HRapprovalList.png'
import MonthlyAttendance from '../Assets/images/showcaseimages/Icons/Attendance/MonthlyAttendance.png'
import MonthlyAttendanceCalendarview from '../Assets/images/showcaseimages/Icons/Attendance/MonthlyAttendanceCalendarview.png'
import MonthlyList from '../Assets/images/showcaseimages/Icons/Attendance/MonthlyList.png'
import TLapprovalList from '../Assets/images/showcaseimages/Icons/Attendance/TLapprovalList.png'

import { useEffect } from 'react';

const Attendance = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Container className="attendance-container">
            <Row>

                <Col md={6} className="text__section mb-4">
                    <h1>Attendance</h1>
                    <p className='mb-4'>
                        Master attendance management with accurate, automated calculations
                        for all employees. Effortlessly track hours, manage leave, and ensure
                        precise records, all while enhancing organizational efficiency.
                        Sleek your attendance processes and keep everything running smoothly.
                    </p>
                    <Row className="attendance-button-group">
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="attendance-button"><img src={DailyAttendance} alt='DailyAttendance' /> Daily Attendance</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="attendance-button"><img src={MonthlyAttendance} alt='MonthlyAttendance' /> Monthly Attendance</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="attendance-button"><img src={MonthlyAttendanceCalendarview} alt='MonthlyAttendanceCalendarview' /> Monthly Attendance Calendar View</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="attendance-button"><img src={MonthlyList} alt='MonthlyList' /> Monthly List</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="attendance-button"><img src={HRapprovalList} alt='HRapprovalList' /> HR Approvals List</Button>
                        </Col>
                        <Col md={6} className='btn-container'>
                            <Button variant="light" className="attendance-button"><img src={TLapprovalList} alt='TLapprovalList' /> TL Approvals List</Button>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} className="image-section">
                    {/* Image can be imported and used here */}
                    <img
                        src={Attendanceimg}
                        alt="Attendanceimg"
                        className="showcase-img"
                    />
                </Col>

            </Row>
        </Container>
    );
};

export default Attendance;
