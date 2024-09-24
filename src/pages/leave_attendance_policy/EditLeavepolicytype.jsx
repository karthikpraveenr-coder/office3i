import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ScaleLoader } from 'react-spinners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faStar, faStarOfLife } from '@fortawesome/free-solid-svg-icons';


function EditLeavepolicytype() {

    // ------------------------------------------------------------------------------------------------
    // Redirect to the add shiftslot page

    const { id } = useParams();
    const navigate = useNavigate();
    const handleVisitaddleavepolicy = () => {
        navigate(`/admin/leavepolicytype`);
    };
    // loading state
    const [loading, setLoading] = useState(true);

    // ------------------------------------------------------------------------------------------------

    //  Retrieve customerData from local storage
    const customerData = JSON.parse(localStorage.getItem('customerData'));
const officialuseremail = customerData?.officialuseremail || '';
const useremail = customerData?.useremail || '';

    const usertoken = customerData?.token || '';
    const userempid = customerData?.userempid || '';

    // ------------------------------------------------------------------------------------------------

    // Edit Shift Slot Save

    const [leavepolicytype, setLeavepolicytype] = useState('');
    const [status, setStatus] = useState();
    const [refreshKey, setRefreshKey] = useState(0);
    const [formErrors, setFormErrors] = useState({});


    const handleSave = (e) => {
        e.preventDefault();

        const errors = {};

        if (!leavepolicytype) {
            errors.leavepolicytype = 'Leave Policy Type is required.';
        }

        if (!status) {
            errors.status = 'Status is required.';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
        setFormErrors({});

        const requestData = {
            id: id,
            request_type_name: leavepolicytype,
            request_status: status,
            updated_by: userempid
        };


        axios.put(`https://office3i.com/api/public/api/update_leavetype`, requestData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${usertoken}`,
'Registered-Email': officialuseremail
            }
        })
            .then(response => {
                if (response.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Leave Policy Type has been updated successfully!',
                    });
                    handleVisitaddleavepolicy()

                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'There was an error updating the Leave Policy Type. Please try again later.',
                });

                console.error('There was an error with the API:', error);

            });
    };

    const handleCancel = () => {
        setLeavepolicytype(data.request_type_name);
        setStatus(data.status);
        setFormErrors({});

    };

    const handleInputChange = (setter) => (e) => {
        let value = e.target.value;
        if (value.startsWith(' ')) {
            value = value.trimStart();
        }
        setter(value);
    };

    // ------------------------------------------------------------------------------------------------
    // edit leave policy

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://office3i.com/api/public/api/editview_leavetype/${id}`, {
            headers: {
                'Authorization': `Bearer ${usertoken}`,
'Registered-Email': officialuseremail
            }
        })
            .then(res => {
                if (res.status === 200) {
                    setData(res.data.data);
                    setLeavepolicytype(res.data.data.request_type_name);
                    setStatus(res.data.data.status);
                    setLoading(false);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }, [id, usertoken]);

    // ------------------------------------------------------------------------------------------------




    return (


        <>
            {loading ? (
                <div style={{
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: '#f6f6f6'
                }}>
                    <ScaleLoader color="rgb(20 166 249)" />
                </div>
            ) : (
                <Container fluid className='shift__container'>
                    <h3 className='mb-5'>Edit Leave Policy Type</h3>

                    {/* shift slot add form */}

                    <Row className='mb-5 shift__row'>
                        <Col>
                            <Form>
                                <Form.Group controlId="formShift">
                                    <Form.Label style={{ fontWeight: 'bold' }}>Leave Policy Type <sup><FontAwesomeIcon icon={faStarOfLife} style={{ color: '#fb1816', fontSize: '8px' }} /></sup></Form.Label>
                                    <Form.Control type="text" placeholder="Enter Leave Policy Type" value={leavepolicytype} onChange={(e) => handleInputChange(setLeavepolicytype)(e)} />
                                    {formErrors.leavepolicytype && <span className="text-danger">{formErrors.leavepolicytype}</span>}
                                </Form.Group>

                            </Form>
                        </Col>
                        <Col>
                            <Form.Group controlId="formStatus">
                                <Form.Label style={{ fontWeight: 'bold' }}> Status <sup><FontAwesomeIcon icon={faStarOfLife} style={{ color: '#fb1816', fontSize: '8px' }} /></sup></Form.Label>
                                <Form.Control as="select" value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="">Select Status</option>
                                    <option value="Active">Active</option>
                                    <option value="In-Active">In-Active</option>
                                </Form.Control>
                                {formErrors.status && <span className="text-danger">{formErrors.status}</span>}
                            </Form.Group>

                        </Col>
                        <div className='submit__cancel'>
                            <Button variant="primary" type="submit" className='shift__submit__btn' onClick={handleSave}>
                                Save
                            </Button>
                            <Button variant="secondary" onClick={handleCancel} className='shift__cancel__btn'>
                                Cancel
                            </Button>
                        </div>
                    </Row>

                </Container>
            )}
        </>
    )
}

export default EditLeavepolicytype