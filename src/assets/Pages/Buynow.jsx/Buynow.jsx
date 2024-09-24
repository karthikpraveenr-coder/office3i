import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Card, InputGroup } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import '../css/Freetrial.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Buynow = () => {
    const { id } = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [currentStep, setCurrentStep] = useState(1);
    const [planDuration, setPlanDuration] = useState("monthly");
    const [employeeCount, setEmployeeCount] = useState(0);
    const [planPrice, setPlanPrice] = useState(0);
    const [addedEmployeeAmount, setAddedEmployeeAmount] = useState(0);
    const [member, setMember] = useState(0);

    useEffect(() => {
        // Fetching data from the API
        axios.get(`https://office3i.com/api/public/api/webproductmodule_list/${id}`)
            .then(response => {
                console.log("setProducts----->", response.data.data);
                console.log("First Product Price----->", response.data.data[0].price);
                setPlanPrice(parseFloat(response.data.data[0].price)); // Make sure it's a number
                setMember(response.data.data[0].monthly_member); // Make sure it's a number

                if (Array.isArray(response.data.data)) {
                    const sortedProducts = response.data.data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                    setProducts(sortedProducts);
                    console.log("sortedProducts---->", sortedProducts);
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

    const handleNext = () => {
        setCurrentStep(2);
    };

    const handleEmployeeCountChange = (delta) => {
        setEmployeeCount(prevCount => Math.max(0, prevCount + delta));
    };

    useEffect(() => {
        setAddedEmployeeAmount(employeeCount * member || 0);
    }, [employeeCount]);

    const calculateTotal = () => {
        const price = planDuration === "yearly" ? planPrice * 12 : planPrice;
        const gst = (price + addedEmployeeAmount) * 0.18;
        return (price + addedEmployeeAmount + gst).toFixed(2);
    };

    const calculateGST = () => {
        const price = planDuration === "yearly" ? planPrice * 12 : planPrice;
        return ((price + addedEmployeeAmount) * 0.18).toFixed(2);
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

                {/* Right Section with Payment Details */}
                <Col md={6} className="p-5 right_section">
                    {currentStep === 1 ? (
                        <>
                            <h3 className="Right_title_freetrial">Buy Now</h3>
                            <Form>
                                <Form.Group className="mb-3" controlId="firstName">
                                    <Form.Label className="freetrial_formlabel">First Name</Form.Label>
                                    <Form.Control type="text" placeholder="First Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="lastName">
                                    <Form.Label className="freetrial_formlabel">Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label className="freetrial_formlabel">Email ID</Form.Label>
                                    <Form.Control type="email" placeholder="Email ID" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="mobile">
                                    <Form.Label className="freetrial_formlabel">Mobile Number</Form.Label>
                                    <Form.Control type="text" placeholder="Mobile Number" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="companyName">
                                    <Form.Label className="freetrial_formlabel">Company Name</Form.Label>
                                    <Form.Control type="text" placeholder="Company Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label className="freetrial_formlabel">Create Password</Form.Label>
                                    <Form.Control type="password" placeholder="Create Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="terms">
                                    <Form.Check
                                        type="checkbox"
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
                                </Form.Group>
                                <Button className="freetrial_submit w-100 mt-3" onClick={handleNext}>
                                    Next
                                </Button>
                            </Form>
                        </>
                    ) : (
                        <>
                            <h3 className="Right_title_freetrial mb-4">Payment Details</h3>
                            <div className="payment-details">
                                <h6 style={{ color: "#004A78" }}>Choose Plan Amount</h6>
                                <div className="d-flex align-items-center mb-3">
                                    <Form.Check
                                        type="radio"
                                        label={`Rs.${planPrice}/month`}
                                        name="planDuration"
                                        id="monthly"
                                        checked={planDuration === "monthly"}
                                        onChange={() => setPlanDuration("monthly")}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label={`Rs.${planPrice * 12}/year`}
                                        name="planDuration"
                                        id="yearly"
                                        checked={planDuration === "yearly"}
                                        onChange={() => setPlanDuration("yearly")}
                                        className="ms-3"
                                    />
                                </div>

                                <div className="d-flex align-items-center justify-content-between mt-5 mb-3">
                                    <h6>Employee Count</h6>
                                    <InputGroup className="employee-count" style={{ width: '30%' }}>
                                        <Button variant="outline-secondary" onClick={() => handleEmployeeCountChange(-1)}>-</Button>
                                        <Form.Control type="text" value={employeeCount} readOnly className="text-center" />
                                        <Button variant="outline-secondary" onClick={() => handleEmployeeCountChange(1)}>+</Button>
                                    </InputGroup>
                                </div>

                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h6>Plan Amount ({planDuration === "monthly" ? "monthly" : "yearly"})</h6>
                                    <span>Rs.{planDuration === "monthly" ? planPrice.toFixed(2) : (planPrice * 12).toFixed(2)}</span>
                                </div>


                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h6>Added Employee Amount</h6>
                                    <span>Rs.{addedEmployeeAmount.toFixed(2)}</span>
                                </div>

                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h6>GST (18%)</h6>
                                    <span>Rs.{calculateGST()}</span>
                                </div>

                                <hr className="my-3" />

                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <strong>Total Amount</strong>
                                    <strong style={{ color: "#004A78" }}>Rs.{calculateTotal()}</strong>
                                </div>

                                <Button className="freetrial_submit w-100 mt-5">Make Payment</Button>
                            </div>
                        </>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Buynow;
