import React from 'react';
import './css/TermsandCondition.css'
import { useEffect } from 'react';

const TermsandCondition = () => {

  
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        return (
            <div className="container">
                <div className="terms-box mb-5 mt-5">
                    <h1 className="sec__head__terms heading">Terms & Conditions</h1>
                    <p className='termscondition__para'><strong>Effective Date:</strong> This policy is effective from September 13 2024. By using the services provided by Office3i, you agree to the following terms and conditions.</p>

                    <h2 className="sub-heading">1. Contact Information</h2>
                    <p className='termscondition__para'>For any inquiries regarding these terms, please contact us at:</p>
                    <ul>
                        <li className='termscondition__list'>Email: legal@office3i.com</li>
                        <li className='termscondition__list'>Phone: +91 96556 00021</li>
                        <li className='termscondition__list'>Mailing Address: Office3i Corporation Pvt. Ltd., No./Flat No.: 27/6(17)
                            Road/Street: Central Street,Kilpauk Garden, Kilpauk, Chennai, Tamil Nadu 600010</li>
                    </ul>

                    <h2 className="sub-heading">2. Acceptance of Terms</h2>
                    <p className='termscondition__para'>By using our services, you accept these Terms & Conditions. If you disagree with any part of these terms, please refrain from using our services.</p>

                    <h2 className="sub-heading">3. Service Description</h2>
                    <p className='termscondition__para'>Office3i provides cloud-based software designed for business productivity and collaboration. The services are available via supported web browsers and require internet access.</p>

                    <h2 className="sub-heading">4. Limitation of Liability and Disclaimer of Warranties</h2>
                    <p className='termscondition__para'><strong>No Warranty:</strong> The services are provided "as-is" and "as available," without any warranties, either express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
                    <p className='termscondition__para'><strong>Limitation of Liability:</strong> Office3i is not liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the services.</p>
                    <p className='termscondition__para'>In no event will Office3i’s total liability exceed the amount paid for the services over the previous 12 months.</p>

                    <h2 className="sub-heading">5. Rules of Conduct</h2>
                    <ul>
                        <li className='termscondition__list'>Prohibited Actions: You must not use the services to engage in any unlawful activity, transmit harmful or offensive content, or infringe on the intellectual property rights of others.</li>
                        <li className='termscondition__list'>Responsibility for Content: You are responsible for all content that you upload or transmit via the services. Office3i reserves the right to remove any content that violates these terms.</li>
                    </ul>

                    <h2 className="sub-heading">6. User Restrictions</h2>
                    <p className='termscondition__para'><strong>No Resale of Services:</strong> You may not resell, sublicense, or transfer your access to the services to any third party without prior written consent from Office3i.</p>
                    <p className='termscondition__para'><strong>Account Usage:</strong> Sharing of accounts among multiple users is not allowed. Each account is limited to a single individual or entity.</p>
                    <p className='termscondition__para'><strong>Prohibited Use:</strong> Users must not engage in any activity that could disrupt or damage the services, such as hacking, introducing malware, or unauthorized access to other users’ data.</p>

                    <h2 className="sub-heading">7. Termination of Services</h2>
                    <p className='termscondition__para'>Office3i reserves the right to suspend or terminate your access to the services if you violate any of these terms. Upon termination, your data may be deleted, and access to the services will be revoked.</p>

                    <h2 className="sub-heading">8. Amendments to the Terms</h2>
                    <p className='termscondition__para'>Office3i reserves the right to modify these Terms & Conditions at any time. Any changes will be communicated to users, and continued use of the services after such modifications will constitute your acceptance of the updated terms.</p>

                    <h2 className="sub-heading">9. Governing Law</h2>
                    <p className="termscondition__para">These terms shall be governed by the laws of India. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Chennai, India.</p>

                </div>
            </div>
        );
    };

    export default TermsandCondition;
