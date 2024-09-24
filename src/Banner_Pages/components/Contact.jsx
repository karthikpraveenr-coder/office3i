import React, { useContext, useState } from 'react';
import './assets/css/contact.css';
import contactBackground from './assets/images/contact_background.jpg'; // Import the image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { ContactFormContext } from '../context/ContactFormContext';
import { Button } from 'react-bootstrap';

const Contact = () => {
    // const [firstName, setFirstName] = useState('');
    // const [email, setEmail] = useState('');

    const { firstName, setFirstName, email, setEmail } = useContext(ContactFormContext);
    const [mobileNumber, setMobileNumber] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [description, setDescription] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('');
    const navigate = useNavigate();


    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    };

    const validateMobileNumber = (mobileNumber) => {
        const re = /^[0-9]{10}$/;
        return re.test(String(mobileNumber));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const errors = {};

        if (!firstName) {
            errors.firstName = 'First name is required.';
        }

        if (!email) {
            errors.email = 'Email is required.';
        } else if (!validateEmail(email)) {
            errors.email = 'Invalid email format.';
        }

        if (!mobileNumber) {
            errors.mobileNumber = 'Mobile number is required.';
        } else if (!validateMobileNumber(mobileNumber)) {
            errors.mobileNumber = 'Invalid mobile number format.';
        }

        if (!selectedPlan) {
            errors.selectedPlan = 'Plan is required.';
        }

        if (!description) {
            errors.description = 'Description is required.';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            setLoading(false);
            return;
        }
        setFormErrors({});


        const formData = {
            first_name: firstName,
            email: email,
            mobile_number: mobileNumber,
            description: description,
            product_plan: selectedPlan,
            companyname: companyName
        };

        axios.post('https://office3i.com/api/public/api/webcontact_mailsent', formData)
            .then(response => {
                if (response.data.status === "success") {
                    Swal.fire({
                        icon: 'success',
                        title: 'OTP Sent',
                        text: 'Your OTP has been sent successfully.',
                    });
                    setLoading(false);
                    navigate('/otppagecontact');
                } else if (response.data.status === "error") {
                    Swal.fire({
                        icon: 'error',
                        title: 'Submission Error',
                        text: response.data.message || 'An error occurred during submission.',
                    });
                    setLoading(false);
                }
            })
            .catch(error => {
                console.error('There was an error submitting the form:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Submission Error',
                    text: 'There was an error submitting the form. Please try again later.',
                });
                setLoading(false);
            });
    };


    return (

        <div id="ContactSection" className="contact-page container mb-5"
            style={{
                backgroundImage: `url(${contactBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                // height:'422px',
                borderRadius: '20px'
            }}
        >
            <div className="overlay"></div>
            <div className="row">

                <div className="col-md-5 contact-info">
                    <h2>Contact Us</h2>

                    <div className="info-item">
                        <span>
                            <FontAwesomeIcon icon={faEnvelope} className='contact_faEnvelope' />
                        </span>
                        <span>
                            <h5>Email</h5>
                            <p>support@office3i.com</p>
                            <p>sales@office3i.com</p>
                        </span>
                    </div>

                    <div className="info-item">
                        <span>
                            <FontAwesomeIcon icon={faMobile} className='contact_faMobile' />
                        </span>
                        <span>
                            <h5>For Sales Inquiries Call Us</h5>
                            <p>+91 96559 00021</p>
                        </span>
                    </div>

                    <div className="info-item">
                        <span>
                            <FontAwesomeIcon icon={faMobile} className='contact_faMobile' />
                        </span>
                        <span>
                            <h5>Service Support</h5>
                            <p>+91 96556 00021</p>
                        </span>
                    </div>
                </div>

                <div className="col-md-7">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-row mb-3">
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Full Name*"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}

                                />
                                {formErrors.firstName && <span className='text-danger' style={{ fontWeight: 'bold' }}>{formErrors.firstName}</span>}
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Company Name (Optional)"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-row mb-3">
                            <div className="col-md-6">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email ID*"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}

                                />
                                {formErrors.email && <span className='text-danger' style={{ fontWeight: 'bold' }}>{formErrors.email}</span>}
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Mobile Number*"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}

                                />
                                {formErrors.mobileNumber && <span className='text-danger' style={{ fontWeight: 'bold' }}>{formErrors.mobileNumber}</span>}
                            </div>
                        </div>

                        <div className="form-group mb-3">
                            
                            <select
                                id="moduleSelect"
                                className="form-control"
                                value={selectedPlan}
                                onChange={(e) => setSelectedPlan(e.target.value)}
                            >
                                <option value="">Select a Plan</option>
                                <option value="1">Sales Kit</option>
                                <option value="2">HR Entity</option>
                                <option value="3">Office Management System</option>
                                <option value="4">Advanced Management</option>
                            </select>
                            {formErrors.selectedPlan && (
                                <span className="text-danger" style={{ fontWeight: 'bold' }}>
                                    {formErrors.selectedPlan}
                                </span>
                            )}
                        </div>

                        <div className="form-group col-md-12 mb-3">
                            <textarea
                                className="form-control"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows="4" // Adjust the number of rows as needed
                            />
                            {formErrors.description && <span className='text-danger' style={{ fontWeight: 'bold' }}>{formErrors.description}</span>}
                        </div>

                        <div className='btn__alignment'>
                            {/* <button type="submit" className="btn btn-primary">
                                Submit
                            </button> */}

                            <Button
                                variant="primary"
                                type="submit"
                                className="login-button btn-loading"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        Submit
                                    </span>
                                ) : (
                                    'Submit'
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Contact;
