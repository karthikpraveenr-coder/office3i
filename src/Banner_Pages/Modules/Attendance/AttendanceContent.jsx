import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Assets/css/AttendanceContent.css'
import DailyAttendance from '../Assets/images/contentimages/Attendance/DailyAttendance.png';
import MonthlyAttendance from '../Assets/images/contentimages/Attendance/MonthlyAttendance.png';
import MonthlyAttendanceCalendarview from '../Assets/images/contentimages/Attendance/MonthlyAttendanceCalendarview.png';
import MonthlyList from '../Assets/images/contentimages/Attendance/MonthlyList.png';
import HRapprovalList from '../Assets/images/contentimages/Attendance/HRapprovalList.png';
import TLapprovalList from '../Assets/images/contentimages/Attendance/TLapprovalList.png';


export default function AttendanceContent() {
    return (
        <Container className='mt-8 mb-8 attendance-content-container'>
            {/* DailyAttendance */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={DailyAttendance} alt='DailyAttendance' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>DAILY ATTENDANCE</h2>
                    <p>Track daily employee attendance with real-time insights. Stay updated on attendance patterns and ensure accuracy with immaculate monitoring.</p>
                </Col>
            </Row>

            {/* MonthlyAttendance */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={MonthlyAttendance} alt='MonthlyAttendance' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>MONTHLY ATTENDANCE</h2>
                    <p>Get a comprehensive snapshot of monthly attendance with a clear, at-a-glance view of all employees.</p>
                </Col>

            </Row>

            {/* MonthlyAttendanceCalendarview */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={MonthlyAttendanceCalendarview} alt='MonthlyAttendanceCalendarview' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>MONTHLY ATTENDANCE CALENDAR VIEW</h2>
                    <p>Experience a vibrant monthly calendar view for quick and efficient management of employee schedules in one place</p>
                </Col>
            </Row>

            {/* MonthlyList */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={MonthlyList} alt='MonthlyList' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>MONTHLY LIST</h2>
                    <p>Access a detailed monthly attendance list for every employee, ensuring clear and concise tracking.</p>
                </Col>
            </Row>

            {/* HRapprovalList */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={HRapprovalList} alt='HRapprovalList' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>HR APPROVALS LIST</h2>
                    <p>Simplify your HR tasks with a comprehensive approval list for leave, permissions, half-days, and OT requests. Keep all your requests organized and actionable with a clear, easy-to-use approval dashboard.</p>
                </Col>
            </Row>

            {/* TLapprovalList */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <img src={TLapprovalList} alt='TLapprovalList' className="img-fluid" />
                </Col>
                <Col md={6} className='content__text__section'>
                    <h2 className='mb-5'>TL APPROVALS LIST</h2>
                    <p>Accelerate team management with a smart TL approval list for swift and smooth request approvals.</p>
                </Col>
            </Row>
        </Container>
    );
}
