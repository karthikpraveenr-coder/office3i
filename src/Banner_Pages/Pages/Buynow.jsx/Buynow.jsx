import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Card, InputGroup } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import '../css/Freetrial.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Select from 'react-select';

const Buynow = () => {
    const { id } = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [termsChecked, setTermsChecked] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [planDuration, setPlanDuration] = useState("monthly");
    const [employeeCount, setEmployeeCount] = useState(0);
    const [planPrice, setPlanPrice] = useState(0);
    const [addedEmployeeAmount, setAddedEmployeeAmount] = useState(0);
    const [member, setMember] = useState(0);
    const [formErrors, setFormErrors] = useState({});

    const [gstin, setGstin] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [pincode, setPincode] = useState('');

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

    // const handleNext = () => {
    //     setCurrentStep(2);
    // };


    const handleEmployeeCountChange = (delta) => {
        setEmployeeCount(prevCount => Math.max(0, prevCount + delta));
    };


    useEffect(() => {
        setAddedEmployeeAmount(employeeCount * member || 0);
    }, [employeeCount]);

    // Function to calculate total plan price before discount and GST
    const calculateTotal = () => {
        const basePrice = planDuration === "yearly" ? planPrice * 12 : planPrice;
        return (basePrice + addedEmployeeAmount).toFixed(2);
    };

    // Function to calculate discount based on yearly plan
    const calculateDiscount = () => {
        return planDuration === "yearly" ? (planPrice * 12 * 0.10).toFixed(2) : 0;
    };



    // Calculating overall amount after discount and GST
    const totalBeforeDiscount = parseFloat(calculateTotal());
    const discount = parseFloat(calculateDiscount());
    const totalAfterDiscount = totalBeforeDiscount - discount;
    const gst = (totalAfterDiscount * 0.18).toFixed(2);
    const overallAmount = (totalAfterDiscount + parseFloat(gst)).toFixed(2);

    console.log("Overall Amount:", overallAmount);
    console.log("Discount:", discount);
    console.log("GST:", gst);



    // ---------------------------------------------------------------------------------------------------


    const handleNext = () => {
        setCurrentStep(2);
    };

    const handleNextthird = () => {
        setCurrentStep(3);
    };
    const handlePreviousfirst = () => {
        setCurrentStep(1);
    };

    const handlePrevious = () => {
        setCurrentStep(2);
    };

    // ---------------------------------------------------------------------------------------------------

    // ---------------------------------------------------------------------------------------------------
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);  // Changed from selectedCityIds to selectedCity

    // ------------------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios.get('https://office3i.com/api/public/api/office3i_country_list')
            .then(response => {
                setCountries(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching countries:', error);
            });
    }, []);

    // ------------------------------------------------------------------------------------------------------------

    useEffect(() => {
        if (selectedCountry) {
            axios.get(`https://office3i.com/api/public/api/office3i_state_list/${selectedCountry.value}`)
                .then(response => {
                    setStates(response.data.data);
                })
                .catch(error => {
                    console.error('Error fetching states:', error);
                });
        } else {
            setStates([]);
        }
    }, [selectedCountry]);

    // ------------------------------------------------------------------------------------------------------------

    useEffect(() => {
        if (selectedState) {
            axios.get(`https://office3i.com/api/public/api/office3i_city_list/${selectedState.value}`)
                .then(response => {
                    setCities(response.data.data);
                })
                .catch(error => {
                    console.error('Error fetching cities:', error);
                });
        } else {
            setCities([]);
        }
    }, [selectedState]);

    // ------------------------------------------------------------------------------------------------------------

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
        setSelectedState(null);
        setSelectedCity(null);  // Reset selected city when the country changes
    };

    const handleStateChange = (selectedOption) => {
        setSelectedState(selectedOption);
        setSelectedCity(null);  // Reset selected city when the state changes
    };

    const handleCityChange = (selectedOption) => {
        setSelectedCity(selectedOption);  // Handle single selection for city
    };

    const formatCountryOptions = () =>
        countries.map(country => ({
            value: country.id,
            label: country.name
        }));

    const formatStateOptions = () =>
        states.map(state => ({
            value: state.id,
            label: state.name
        }));

    const formatCityOptions = () =>
        cities.map(city => ({
            value: city.id,
            label: city.name
        }));

    // ------------------------------------------------------------------------------------------------------------------


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
                    {currentStep === 1 && (
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
                                    <Form.Control type="number" placeholder="Mobile Number" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="companyName">
                                    <Form.Label className="freetrial_formlabel">Company Name</Form.Label>
                                    <Form.Control type="text" placeholder="Company Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label className="freetrial_formlabel">Create Password</Form.Label>
                                    <Form.Control type="password" placeholder="Create Password" />
                                </Form.Group>
                                {/* <Form.Group className="mb-3" controlId="terms">
                                    <Form.Check
                                        type="checkbox"
                                        label={
                                            <>
                                                I agree to the{" "}
                                                <a href="#terms" className="text-primary">
                                                    Terms & Conditions
                                                </a>{" "}
                                                and{" "}
                                                <a href="#privacy" className="text-primary">
                                                    Privacy Policy
                                                </a>
                                            </>
                                        }
                                    />
                                </Form.Group> */}
                                <div style={{ width: '20%' }}>
                                    <Button className="freetrial_submit w-100 mt-3" onClick={handleNext}>
                                        Next
                                    </Button>
                                </div>
                            </Form>
                        </>
                    )}

                    {currentStep === 2 && (

                        <>
                            <h3 className="Right_title_freetrial">Buy Now</h3>
                            {/* Second Step Fields */}
                            <Form.Group className="mb-3" controlId="gstin">
                                <Form.Label className="freetrial_formlabel">GSTIN</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={gstin}
                                    onChange={(e) => setGstin(e.target.value)}
                                    placeholder="GSTIN"
                                />
                                {formErrors.gstin && <span className="text-danger">{formErrors.gstin}</span>}

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="billingAddress">
                                <Form.Label className="freetrial_formlabel">Billing Address</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={billingAddress}
                                    onChange={(e) => setBillingAddress(e.target.value)}
                                    placeholder="Billing Address"
                                />
                                {formErrors.billingAddress && <span className="text-danger">{formErrors.billingAddress}</span>}
                            </Form.Group>


                            {/* ----------------------------------------------------------------------------- */}


                            <Row className="mb-3">
                                <Col sm={6}>
                                    <Form.Group controlId="country">
                                        <Form.Label>Country</Form.Label>
                                        <Select
                                            options={formatCountryOptions()}
                                            value={selectedCountry}
                                            onChange={handleCountryChange}
                                            placeholder="Select Country"
                                        />
                                        {formErrors.selectedCountry && <span className="text-danger">{formErrors.selectedCountry}</span>}
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group controlId="state">
                                        <Form.Label>State</Form.Label>
                                        <Select
                                            options={formatStateOptions()}
                                            value={selectedState}
                                            onChange={handleStateChange}
                                            placeholder="Select State"
                                            isDisabled={!selectedCountry}
                                        />
                                        {formErrors.selectedState && <span className="text-danger">{formErrors.selectedState}</span>}
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col sm={6}>
                                    <Form.Group controlId="city">
                                        <Form.Label>City</Form.Label>
                                        <Select
                                            options={formatCityOptions()}
                                            value={selectedCity}  // Single selection for city
                                            onChange={handleCityChange}
                                            placeholder="Select City"
                                            isDisabled={!selectedState}
                                        />
                                        {formErrors.selectedCity && <span className="text-danger">{formErrors.selectedCity}</span>}
                                    </Form.Group>
                                </Col>

                                <Col sm={6}>
                                    <Form.Group className="mb-3" controlId="pincode">
                                        <Form.Label className="freetrial_formlabel">Pincode</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={pincode}
                                            onChange={(e) => setPincode(e.target.value)}
                                            placeholder="Pincode"
                                        />
                                        {formErrors.pincode && <span className="text-danger">{formErrors.pincode}</span>}
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* ----------------------------------------------------------------------------- */}



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
                            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '50%' }} className="mt-10">
                                <Button className="freetrial_submit w-100 mt-3" onClick={handlePreviousfirst}>
                                    Previous
                                </Button>
                                <Button className="freetrial_submit w-100 mt-3" onClick={handleNextthird}>
                                    Next
                                </Button>

                                {/* <Button
                                    variant="primary"
                                    type="submit"
                                    className="freetrial_submit w-100 mt-3 btn-loading"
                                    disabled={loading || !termsChecked}
                                    style={{ display: "flex", justifyContent: "center" }}
                                >
                                    {loading ? (
                                        <span style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                                            <span
                                                className="spinner-border spinner-border-sm"
                                                role="status"
                                                aria-hidden="true"
                                            ></span>
                                            Submit
                                        </span>
                                    ) : (
                                        "Submit"
                                    )}
                                </Button> */}
                            </div>
                        </>
                    )}

                    {currentStep === 3 && (



                        <>
                            <h3 className="Right_title_freetrial mb-4 mt-5">Payment Details</h3>
                            <div className="payment-details">

                                {/* Plan Duration Section */}
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
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <Form.Check
                                            type="radio"
                                            label={`Rs.${(planPrice * 12).toFixed(2)}/year`}
                                            name="planDuration"
                                            id="yearly"
                                            checked={planDuration === "yearly"}
                                            onChange={() => setPlanDuration("yearly")}
                                            className="ms-3"
                                        />
                                        <span>(10% Off)</span>
                                    </div>
                                </div>

                                {/* Employee Count */}
                                <div className="d-flex align-items-center justify-content-between mt-5 mb-3">
                                    <h6>Employee Count</h6>
                                    <InputGroup className="employee-count" style={{ width: '30%' }}>
                                        <Button variant="outline-secondary" onClick={() => handleEmployeeCountChange(-1)}>-</Button>
                                        <Form.Control type="text" value={employeeCount} readOnly className="text-center" />
                                        <Button variant="outline-secondary" onClick={() => handleEmployeeCountChange(1)}>+</Button>
                                    </InputGroup>
                                </div>

                                {/* Plan Amount */}
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h6>Plan Amount ({planDuration === "monthly" ? "monthly" : "yearly"})</h6>
                                    <span>Rs.{planDuration === "monthly" ? planPrice.toFixed(2) : (planPrice * 12).toFixed(2)}</span>
                                </div>

                                {/* Added Employee Amount */}
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h6>Added Employee Amount</h6>
                                    <span>Rs.{addedEmployeeAmount.toFixed(2)}</span>
                                </div>

                                {/* Discount */}
                                {planDuration === "yearly" && (
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <h6>Discount (10% Off)</h6>
                                        <span>Rs.{discount}</span>
                                    </div>
                                )}

                                {/* Subtotal (Before GST) */}
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h6>Subtotal</h6>
                                    <span>Rs.{totalAfterDiscount.toFixed(2)}</span>
                                </div>

                                {/* GST */}
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h6>GST (18%)</h6>
                                    <span>Rs.{gst}</span>
                                </div>

                                <hr className="my-3 horizontal__rule" />

                                {/* Total Amount */}
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <strong>Total Amount</strong>
                                    <strong style={{ color: "#004A78" }}>Rs.{overallAmount}</strong>
                                </div>

                                {/* Navigation Buttons */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '50%' }} className="mt-10">

                                    <Button className="freetrial_submit w-100 mt-5" onClick={handlePrevious}>Previous</Button>
                                    <Button className="freetrial_submit w-100 mt-5">Proceed</Button>
                                </div>
                            </div>
                        </>

                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Buynow;
