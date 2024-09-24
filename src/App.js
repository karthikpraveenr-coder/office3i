import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MasterLayout from './layouts/MasterLayout';
import LoginPage from './pages/authentication/LoginPage';
import ForgetPasswordPage from './pages/authentication/ForgetPasswordPage';
import OTPPage from './pages/authentication/OTPPage';
import ResetPasswordPage from './pages/authentication/ResetPasswordPage';

import Header from './Banner_Pages/components/Header';
import HeroSection from './Banner_Pages/components/HeroSection';
import WhatWeDo from './Banner_Pages/components/WhatWeDo';
import Modules from './Banner_Pages/components/Modules';
import Products from './Banner_Pages/components/Products';
import Contact from './Banner_Pages/components/Contact';
import Freetrialotppage from './Banner_Pages/Pages/FreeTrial/Freetrialotppage';
import FreeTrialForm from './Banner_Pages/Pages/FreeTrial/Freetrial';
import Tryitfree from './Banner_Pages/Pages/FreeTrial/Tryitfree';
import Buynow from './Banner_Pages/Pages/Buynow.jsx/Buynow';
import Footer from './Banner_Pages/components/Footer';
import OTPPagecontact from './Banner_Pages/components/Otppage';
import EmployeeManagement from './Banner_Pages/Modules/EmployeeManagement/EmployeeManagement';
import EmployeeManagementContent from './Banner_Pages/Modules/EmployeeManagement/EmployeeManagementContent';
import Attendance from './Banner_Pages/Modules/Attendance/Attendance';
import AttendanceContent from './Banner_Pages/Modules/Attendance/AttendanceContent';
import Recruitmet from './Banner_Pages/Modules/Recruitment/Recruitmet';
import RecruitmentContent from './Banner_Pages/Modules/Recruitment/RecruitmentContent';
import Payroll from './Banner_Pages/Modules/Payroll/Payroll';
import PayrollContent from './Banner_Pages/Modules/Payroll/PayrollContent';
import Accounts from './Banner_Pages/Modules/Accounts/Accounts';
import AccountsContent from './Banner_Pages/Modules/Accounts/AccountsContent';
import SalesManagement from './Banner_Pages/Modules/SalesManagement/SalesManagement';
import SalesManagementContent from './Banner_Pages/Modules/SalesManagement/SalesManagementContent';
import VisitorManagement from './Banner_Pages/Modules/VisitorManagement/VisitorManagement';
import VisitorManagementContent from './Banner_Pages/Modules/VisitorManagement/VisitorManagementContent';
import TeamManagement from './Banner_Pages/Modules/TeamManagement/TeamManagement';
import TeamManagementContent from './Banner_Pages/Modules/TeamManagement/TeamManagementContent';
import AssetManagement from './Banner_Pages/Modules/AssetManagement/AssetManagement';
import AssetManagementContent from './Banner_Pages/Modules/AssetManagement/AssetManagementContent';
import HelpDesk from './Banner_Pages/Modules/HelpDesk/HelpDesk';
import HelpDeskContent from './Banner_Pages/Modules/HelpDesk/HelpDeskContent';
import TermsandCondition from './Office3iRights/TermsandCondition';
import PrivacyPolicy from './Office3iRights/PrivacyPolicy';
import CancellationRefundPolicy from './Office3iRights/CancellationRefundPolicy';
import ThankYou from './components/ThankYou';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/admin/*" element={<MasterLayout />} />

          {/* Authentication pages */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgetpasswordpage" element={<ForgetPasswordPage />} />
          <Route path="/otppage" element={<OTPPage />} />
          <Route path="/resetpassword" element={<ResetPasswordPage />} />

          {/* Banner Pages with Header and Footer */}
          <Route path="/" element={
            <>
              <Header />
              <HeroSection />
              <WhatWeDo />
              <Modules />
              <Products />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/otppagecontact" element={
            <>
              <Header />
              <OTPPagecontact />
              <Footer />
            </>
          } />
          <Route path="/freetrialotppage/:id" element={
            <>
              <Header />
              <Freetrialotppage />
              <Footer />
            </>
          } />
          <Route path="/freetrial/:id" element={
            <>
              <Header />
              <FreeTrialForm />
              <Footer />
            </>
          } />
          <Route path="/buynow/:id" element={
            <>
              <Header />
              <Buynow />
              <Footer />
            </>
          } />
          <Route path="/Tryitfree" element={
            <>
              <Header />
              <Tryitfree />
              <Footer />
            </>
          } />

          {/*-----------------Modules--------------------*/}

          <Route path="/employeemanagement" element={
            <>
              <Header />
              <EmployeeManagement />
              <EmployeeManagementContent />
              <Contact />
              <Footer />
            </>
          } />

          <Route path="/attendance" element={
            <>
              <Header />
              <Attendance />
              <AttendanceContent />
              <Contact />
              <Footer />
            </>
          } />


          <Route path="/recruitment" element={
            <>
              <Header />
              <Recruitmet />
              <RecruitmentContent />
              <Contact />
              <Footer />
            </>
          } />

          <Route path="/payroll" element={
            <>
              <Header />
              <Payroll />
              <PayrollContent />
              <Contact />
              <Footer />
            </>
          } />

          <Route path="/accounts" element={
            <>
              <Header />
              <Accounts />
              <AccountsContent />
              <Contact />
              <Footer />
            </>
          } />

          <Route path="/salesmanagement" element={
            <>
              <Header />
              <SalesManagement />
              <SalesManagementContent />
              <Contact />
              <Footer />
            </>
          } />

          <Route path="/visitormanagement" element={
            <>
              <Header />
              <VisitorManagement />
              <VisitorManagementContent />
              <Contact />
              <Footer />
            </>
          } />

          <Route path="/teammanagement" element={
            <>
              <Header />
              <TeamManagement />
              <TeamManagementContent />
              <Contact />
              <Footer />
            </>
          } />

          <Route path="/assetmanagement" element={
            <>
              <Header />
              <AssetManagement />
              <AssetManagementContent />
              <Contact />
              <Footer />
            </>
          } />

          <Route path="/helpdesk" element={
            <>
              <Header />
              <HelpDesk />
              <HelpDeskContent />
              <Contact />
              <Footer />
            </>
          } />


          <Route path="/termsandcondition" element={
            <>
              <Header />
              <TermsandCondition />
              <Footer />
            </>
          } />
          <Route path="/privacypolicy" element={
            <>
              <Header />
              <PrivacyPolicy />
              <Footer />
            </>
          } />
          <Route path="/cancellationrefundpolicy" element={
            <>
              <Header />
              <CancellationRefundPolicy />
              <Footer />
            </>
          } />
          <Route path="/thankyou" element={
            <>
              <Header />
              <ThankYou />
              <Footer />
            </>
          } />



        </Routes>
      </Router>
    </div>
  );
}

export default App;
