import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/ThankYou.css';
import thankYouImage from '../assets/images/Successfulpurchase.svg';
import axios from 'axios';

const ThankYou = () => {

  const location = useLocation();

  // Function to extract query parameters from the URL
  const getQueryParams = () => {
    const searchParams = new URLSearchParams(location.search);
    return {
      invoice_id: searchParams.get('razorpay_invoice_id'),
      payment_gateway_status: searchParams.get('razorpay_invoice_status'),
      gateway_payment_id: searchParams.get('razorpay_payment_id'),
    };
  };



  useEffect(() => {
    const queryParams = getQueryParams();
    console.log("queryParams", queryParams)

    // Send query parameters to the backend
    const sendPaymentDetailsToBackend = async () => {
      try {
        const response = await axios.post('https://office3i.com/user/api/public/api/gateway_response_store ', queryParams, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        // console.log('Payment details sent to backend successfully:', response.data);
      } catch (error) {
        // console.error('Error sending payment details to backend:', error);
      }
    };

    sendPaymentDetailsToBackend();
  }, [location.search]);



  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <img src={thankYouImage} alt="Thank You" className="thank-you-image" />
        <h1 className="thank-you-title">Thank You!</h1>
        <p className="thank-you-message">Your payment has been successfully processed.</p>
        <p className="thank-you-submessage">
          Thank you for your business! We have sent the login credentials, including your username and password, to your registered email address. Please check your inbox for further instructions.
        </p>
        <p className="thank-you-submessage">
          Should you have any questions or require assistance, feel free to contact our support team. We look forward to serving you again.
        </p>
        {/* <p className="thank-you-submessage">We appreciate your business and look forward to serving you again.</p> */}
        <Link to="/" className="thank-you-button">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
