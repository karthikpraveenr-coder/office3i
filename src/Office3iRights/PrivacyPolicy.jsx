import React from 'react';
import './css/PrivacyPolicy.css';
import { useEffect } from 'react';

const PrivacyPolicy = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container">
            <div className="privacy-box mb-5 mt-5">
                <h1 className="sec__head__privacy heading">Privacy Policy</h1>
                <p className='privacy__para'><strong>Effective Date:</strong> September 13 2024</p>
                <p className='privacy__para'>At Office3i, we prioritize your privacy and are committed to protecting the personal information of our website and app users. This Privacy Policy outlines how we collect, use, and safeguard your information, as well as our practices for sharing it with third parties.</p>

                <h2 className="sub-heading">1. Personal Information We Collect</h2>
                <p className='privacy__para'>When you interact with our website or use our app, we may collect the following types of personal information:</p>
                <ul>
                    <li className='privacy__list'><strong>Account Information:</strong> Name, email address, phone number, company name, and billing details when you create an account or subscribe to our services.</li>
                    <li className='privacy__list'><strong>Usage Data:</strong> Information related to how you use our website or app, such as IP addresses, device information, browser type, operating system, and pages accessed.</li>
                    <li className='privacy__list'><strong>Payment Information:</strong> Credit card details and billing information when making a purchase.</li>
                    <li className='privacy__list'><strong>Communication Data:</strong> Any correspondence you send to us, including emails, customer support inquiries, or feedback forms.</li>
                </ul>

                <h2 className="sub-heading">2. How We Collect the Information</h2>
                <p className='privacy__para'>We collect personal information in the following ways:</p>
                <ul>
                    <li className='privacy__list'><strong>Directly from You:</strong> When you register for an account, sign up for newsletters, or make a purchase, you voluntarily provide us with personal data.</li>
                    <li className='privacy__list'><strong>Automatically:</strong> We use cookies and other tracking technologies to collect usage data when you browse our site or use our app. This helps us understand how users interact with our platform.</li>
                    <li className='privacy__list'><strong>From Third-Party Services:</strong> We may receive information from payment processors, analytics providers, or advertising platforms when you engage with our services through them.</li>
                </ul>

                <h2 className="sub-heading">3. How We Use the Collected Information</h2>
                <p className='privacy__para'>We use your personal information for the following purposes:</p>
                <ul>
                    <li className='privacy__list'><strong>Service Delivery:</strong> To provide, maintain, and improve our services, including processing transactions, managing subscriptions, and offering customer support.</li>
                    <li className='privacy__list'><strong>Personalization:</strong> To tailor your user experience by showing relevant content and personalized features based on your preferences.</li>
                    <li className='privacy__list'><strong>Communication:</strong> To send you important updates, such as billing reminders, service announcements, or responses to your inquiries.</li>
                    <li className='privacy__list'><strong>Marketing:</strong> With your consent, we may send you promotional emails or newsletters regarding new features, products, or special offers.</li>
                    <li className='privacy__list'><strong>Compliance:</strong> To meet legal obligations, resolve disputes, or enforce our agreements.</li>
                </ul>

                <h2 className="sub-heading">4. How We Keep Information Safe</h2>
                <p className='privacy__para'>We implement several security measures to protect your personal information from unauthorized access, misuse, or disclosure:</p>
                <ul>
                    <li className='privacy__list'><strong>Encryption:</strong> We use SSL encryption for data transmission between your device and our servers.</li>
                    <li className='privacy__list'><strong>Access Controls:</strong> Only authorized personnel have access to your personal data, and access is granted based on their job role and necessity.</li>
                    <li className='privacy__list'><strong>Data Storage:</strong> Your data is stored on secure servers protected by firewalls and other industry-standard security measures.</li>
                </ul>
                <p className='privacy__para'>Despite our efforts, no method of electronic transmission or storage is 100% secure. Therefore, we cannot guarantee absolute security of your data, but we continually work to enhance our security practices.</p>



                <h2 className="sub-heading">5. Information Sharing with Third Parties</h2>
                <p className='privacy__para'>We do not sell or rent your personal information to third parties. However, we may share your data with the following entities under specific circumstances:</p>
                <ul>
                    <li className='privacy__list'><strong>Service Providers:</strong> We may share your information with third-party vendors (e.g., payment processors, cloud storage services) to facilitate service delivery.</li>
                    <li className='privacy__list'><strong>Legal Obligations:</strong> We may disclose your information if required to do so by law or in response to valid legal requests from authorities (e.g., court orders, government requests).</li>
                    <li className='privacy__list'><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your personal information may be transferred as part of the business transaction.</li>
                    <li className='privacy__list'><strong>With Your Consent:</strong> We may share your data with other third parties if you explicitly agree to such sharing.</li>
                </ul>
               
               
                <h2 className="sub-heading">6. Your Rights and Choices</h2>
                <p className='privacy__para'>You have the following rights regarding your personal information:</p>
                <ul>
                    <li className='privacy__list'><strong>Access:</strong> You may request a copy of the personal data we hold about you.</li>
                    <li className='privacy__list'><strong>Correction:</strong>  You may request correction of any inaccurate or incomplete information.</li>
                    <li className='privacy__list'><strong>Deletion:</strong> You may request the deletion of your personal data, subject to our legal obligations to retain certain information.</li>
                    <li className='privacy__list'><strong>Opt-Out:</strong> You can opt out of receiving marketing emails by using the unsubscribe link provided in those emails.</li>
                </ul>
                <p className='privacy__para'>To exercise these rights, contact us at legal@office3i.com.</p>


                <h2 className="sub-heading">7. Changes to This Privacy Policy</h2>
                <p className='privacy__para'>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on our website, and your continued use of the services will indicate your acceptance of the updated policy.</p>
                <p className='privacy__para'>For any questions or concerns regarding this Privacy Policy, please reach out to us at:</p>
                <ul>
                    <li className='privacy__list'><strong>Email:</strong> legal@office3i.com</li>
                    <li className='privacy__list'><strong>Phone:</strong> +91 96556 00021</li>
                </ul>



            </div>
        </div>
    );
};

export default PrivacyPolicy;
