import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
//     
import { Footer } from "./Components/Footer";
import AboutUs from "./Pages/AboutUs";
import ContactUS from "./Pages/ContactUS";
import News from "./Pages/News";
import Updates from "./Pages/Updates";
import Login from "./Pages/Login";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Home from "./Pages/Home";
import ProtectionPolicy from "./Pages/ProtectionPolicy";
import ReturnRefundPolicy from "./Pages/ReturnRefundPolicy";
import Userpanel from "./Pages/Userpanel";
import Adminpanel from "./Pages/Adminpanel";
import Razatpg from "./Pages/Razatpg";
import TermsAndConditionsPage from "./Pages/TermsAndConditionsPage";
import Startchat from "./Pages/Startchat";
import Chatimg from "./Pages/Chatimg";
import Rajatdetails from "./Pages/Rajatdetails";
// import Cartimg from "./Pages/Cartimg";
import Razatform from "./Pages/Razatform";
import SessionExpired from "./Pages/SessionExpired";
import Visitus from "./Pages/Visitus";
import Raise from "./Pages/Raise";
import Reports from "./Pages/Reports";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* ✅ Home Route */}
        <Route path="/" element={<Home />} />

        {/* ✅ Other Pages */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUS />} />
        <Route path="/news" element={<News />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/protection-policy" element={<ProtectionPolicy />} />
       <Route path="/return-refund-policy" element={<ReturnRefundPolicy />} />

        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />

        {/* ✅ Panels */}
        <Route path="/user-panel" element={<Userpanel />} />
        <Route path="/admin-panel" element={<Adminpanel />} />

        {/* ✅ Login */}
        <Route path="/login" element={<Login />} />

        {/* ✅ Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
         <Route path="/razat" element={<Razatpg />} />
         <Route path="/startchat" element={<Startchat />} />
         <Route path = "/chatimg" element={<Chatimg/>}/>
         {/* <Route path = "/cartimg" element={<Cartimg/>}/> */}
        <Route path="/Rajat" element={<Rajatdetails />} />









        <Route path='/Razatform' element ={<Razatform/>}/>
        <Route path="/session-expired" element={<SessionExpired />} />
        <Route path = "/Visit-us" element = {<Visitus/>}/>
        <Route path = "/Raise" element = {<Raise/>}/>
        <Route path = "/Report" element = {<Reports/>}/>
        <Route path =  "/about" element = {<AboutUs/>}/>
        


      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

