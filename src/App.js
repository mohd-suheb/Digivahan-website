import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CategorySection from "./Components/CategorySection";
import VehicleTracking from "./Components/VehicleTracking";
import SmartQRFeature from "./Components/SmartQRFeature";
import RenewalReminder from "./Components/RenewalReminder";
import { Footer } from "./Components/Footer";
import AboutUs from "./Pages/AboutUs";
import ContactUS from "./Pages/ContactUS";
import News from "./Pages/News";
import Updates from "./Pages/Updates";
import Login from "./Pages/Login";



function App() {
  return (
    <Router>
      <Navbar />
       
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <CategorySection />
              <VehicleTracking />
              <SmartQRFeature />
              <RenewalReminder />
            </>
          }
        />
        {/* About Page */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactus" element={ <ContactUS />} />
        <Route path="/News" element={ <News/>} />
        <Route path ="/Updates" element = {<Updates/>} />

        
        <Route
          path="/img"
          element={
            <>
              <Hero />
              <CategorySection />
              <VehicleTracking />
              <SmartQRFeature />
              <RenewalReminder />
            </>
          }
        />


        <Route
          path="/button"
          element={
            <>
              <Hero />
              <CategorySection />
              <VehicleTracking />
              <SmartQRFeature />
              <RenewalReminder />
            </>
          }
        />

      <Route path ="/Login" element = {<Login/>} />
          
      </Routes>
       
         
      <Footer />
    
    </Router>
  );
}

export default App;

