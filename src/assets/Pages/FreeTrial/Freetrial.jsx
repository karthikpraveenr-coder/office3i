import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/Freetrial.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
// import { useDispatch } from "react-redux";
// import { setEmail } from '../../Features/Freetrialemail_state'
import FormContext from "../../context/FormContext";

const FreeTrialForm = () => {
    const { id } = useParams();

    //   const dispatch = useDispatch();

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    // Form field states
    const { firstName, setFirstName, lastName, setLastName, email, setEmail } = useContext(FormContext); // Use context

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [email, setEmailState] = useState('');

    const [mobile, setMobile] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [password, setPassword] = useState("");

    const [formError, setFormError] = useState(null);
    const [termsChecked, setTermsChecked] = useState(false);

    const [formErrors, setFormErrors] = useState({});

    // const handleEmailChange = (e) => {
    //     const newEmail = e.target.value;
    //     setEmailState(newEmail);
    //     console.log('setEmailState', newEmail);
    //     // Dispatch action to update email in Redux store
    //     dispatch(setEmail(newEmail));
    //   };

    useEffect(() => {
        axios.get(`https://office3i.com/api/public/api/webproductmodule_list/${id}`)
            .then(response => {
                if (Array.isArray(response.data.data)) {
                    const sortedProducts = response.data.data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                    setProducts(sortedProducts);
                } else {
                    console.error("Unexpected response structure", response.data);
                    setError("Unexpected response structure");
                }
            })
            .catch(error => {
                console.error("There was an error fetching the products!", error);
                setError("Failed to load products. Please try again later.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const errors = {};

        if (!firstName) {
            errors.firstName = 'First name is required.';
        }
        if (!lastName) {
            errors.lastName = 'Last name is required.';
        }
        if (!email) {
            errors.email = 'Email is required.';
        }
        if (!mobile) {
            errors.mobile = 'Mobile number is required.';
        }
        if (!companyName) {
            errors.companyName = 'Company name is required.';
        }
        if (!password) {
            errors.password = 'Password is required.';
        }
        if (!termsChecked) {
            errors.terms = 'You must agree to the terms and conditions.';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            setLoading(false);
            return;
        }
        setFormErrors({});

        axios.post('https://office3i.com/api/public/api/office3i_sign_up', {
            first_name: firstName,
            last_name: lastName,
            email: email,
            mobile_number: mobile,
            company_name: companyName,
            password: password,
            // module_id: "1",  
            // plan_id: id,
            // created_by: "1"
        })
            .then(response => {
                if (response.data.status === "success") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: response.data.message,
                        confirmButtonText: 'Ok'
                    });
                    setLoading(false);
                    navigate(`/freetrialotppage/${id}`);
                    setFormError(null);
                } else if (response.data.status === "error") {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: response.data.message,
                        confirmButtonText: 'Ok'
                    });
                    setLoading(false);
                    setFormError(response.data.message);
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'There was an error submitting the form. Please try again later.',
                    confirmButtonText: 'Okay'
                });
                setLoading(true);
                setFormError("There was an error submitting the form. Please try again later.");
            });
    };

    return (
        <Container className="bg-white rounded mt-5 mb-5">
            <Row className="shadow">
                {/* Left Section */}
                <Col md={6} className="text-white p-5 rounded-start left_section">
                    <h3 className="mb-4 title_freetrial">Selected Plan Details</h3>
                    {products.map((product, index) => (
                        <div className="mb-4 col_freetrial col-12 col-md-10 col-lg-8 col-xl-6 col_freetrial" key={index}>
                            <Card className="text-center product_card_freetrial">
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Body>
                                    <Card.Text><span className="product__price">Rs.{product.price}</span>/month</Card.Text>
                                    <Card.Text className="members">Upto {product.member} members</Card.Text>
                                    <Card.Text className="additional__members">To include additional members<br />
                                        <strong>Rs.{product.monthly_member}/member/month</strong></Card.Text>
                                    <ul className="list-unstyled freetrial_lineheight">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx}><FontAwesomeIcon icon={faCheck} style={{ color: '#0BC307', marginRight: '5px' }} /> {feature}</li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </Col>

                {/* Right Section */}
                <Col md={6} className="p-5 right_section">
                    <h3 className="Right_title_freetrial">Free Trial</h3>
                    <p className="free_trial_quotes">Start your 15 days free trial</p>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="firstName">
                            <Form.Label className="freetrial_formlabel">First Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First Name"
                            />
                            {formErrors.firstName && <span className="text-danger">{formErrors.firstName}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label className="freetrial_formlabel">Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last Name"
                            />
                            {formErrors.lastName && <span className="text-danger">{formErrors.lastName}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label className="freetrial_formlabel">Email ID</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email ID"
                            />
                            {formErrors.email && <span className="text-danger">{formErrors.email}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="mobile">
                            <Form.Label className="freetrial_formlabel">Mobile Number</Form.Label>
                            <Form.Control
                                type="text"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                placeholder="Mobile Number"
                            />
                            {formErrors.mobile && <span className="text-danger">{formErrors.mobile}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="companyName">
                            <Form.Label className="freetrial_formlabel">Company Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                placeholder="Company Name"
                            />
                            {formErrors.companyName && <span className="text-danger">{formErrors.companyName}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label className="freetrial_formlabel">Create Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Create Password"
                            />
                            {formErrors.password && <span className="text-danger">{formErrors.password}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="terms">
                            <Form.Check
                                type="checkbox"
                                checked={termsChecked}
                                onChange={(e) => setTermsChecked(e.target.checked)}
                                label={
                                    <>
                                        I agree to the{" "}
                                        <Link to="/termsandcondition">
                                            Terms & Conditions
                                        </Link>{" "}
                                        and{" "}
                                        <Link to="/privacypolicy">
                                            Privacy Policy
                                        </Link>
                                    </>
                                }
                            />
                            {formErrors.terms && <span className="text-danger">{formErrors.terms}</span>}
                        </Form.Group>
                        {/* <Button type="submit" className="freetrial_submit w-100 mt-3" disabled={!termsChecked}>
                            Submit
                        </Button> */}


                        <Button
                            variant="primary"
                            type="submit"
                            className="freetrial_submit w-100 mt-3 btn-loading"
                            onClick={handleSubmit}
                            disabled={loading || !termsChecked}
                            style={{ display: 'flex', justifyContent: 'center' }}
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
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default FreeTrialForm;
