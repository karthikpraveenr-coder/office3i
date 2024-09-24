import React from 'react';
import './css/CancellationRefundPolicy.css';
import { useEffect } from 'react';

const CancellationRefundPolicy = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container">
            <div className="policy-box mb-5 mt-5">
                <h1 className="sec__head__cancellation heading">Cancellation and Refund Policy</h1>
                <p className='policy__para'>At Office3i, we strive to ensure customer satisfaction with our services. Below is our policy on cancellations, refunds, and exchanges:</p>

                <h2 className="sub-heading">1. Timeframe for Returns or Exchanges</h2>
                <ul>
                    <li className='policy__list'><strong>Monthly Subscriptions:</strong> If you are not satisfied with the service, you may request a full refund within the first 30 days of your initial purchase.</li>
                    <li className='policy__list'><strong>Annual Subscriptions:</strong> For annual plans, you can request a full refund within 45 days of the start of the subscription. After 45 days, you may be eligible for a pro-rated refund based on the unused portion of the subscription.</li>
                    <li className='policy__list'><strong>Product Returns or Exchanges:</strong> If you have purchased any physical products from Office3i (e.g., software kits, add-ons), they can be returned or exchanged within 30 days of purchase, provided the product is in its original, unused condition.</li>
                </ul>

                <h2 className="sub-heading">2. How to Initiate a Return or Exchange</h2>
                <p className='policy__para'>To request a return, refund, or exchange, please contact our support team via:</p>
                <ul>
                    <li className='policy__list'><strong>Email:</strong> legal@office3i.com</li>
                    <li className='policy__list'><strong>Phone:</strong> +91 96556 00021</li>
                </ul>
                <p className='policy__para'>Include your order number, the product or service you want to return or exchange, and a brief description of the reason for your request. Our team will assist you in processing your request.</p>

                <h2 className="sub-heading">3. Refund Processing Time</h2>
                <ul>
                    <li className='policy__list'><strong>Monthly Subscriptions:</strong> Refunds for monthly subscriptions will be processed within 7 business days of the request.</li>
                    <li className='policy__list'><strong>Annual Subscriptions:</strong> Refunds for annual subscriptions or pro-rated refunds will be processed within 15 business days.</li>
                    <li className='policy__list'><strong>Product Returns:</strong> For product returns, the refund will be issued within 10 business days after we receive the returned product.</li>
                </ul>
                <p className='policy__para'>Refunds will be credited back to the original payment method. Please note that it may take additional time for the refund to reflect in your account, depending on your bank or card issuer.</p>

                <h2 className="sub-heading">4. Auto-Renewal and Post-Renewal Cancellations</h2>
                <ul>
                    <li className='policy__list'><strong>Monthly Subscriptions:</strong> Auto-renewal occurs each month. You may cancel within 5 business days of renewal to receive a full refund.</li>
                    <li className='policy__list'><strong>Annual Subscriptions:</strong> You may cancel within 15 business days of renewal for a full refund.</li>
                </ul>
                <p className='policy__para'>Refund requests outside these periods are not eligible for either full or pro-rated refunds.</p>

                <h2 className="sub-heading">5. Refund Exceptions</h2>
                <p className='policy__para'>Refunds will not be provided under the following circumstances:</p>
                <ul>
                    <li className='policy__list'><strong>Account Termination:</strong> If your account has been terminated due to a violation of our Terms of Service, including activities like phishing, fraud, or illegal conduct, refunds (full or pro-rated) will not be issued.</li>
                </ul>
            </div>
        </div>
    );
};

export default CancellationRefundPolicy;
