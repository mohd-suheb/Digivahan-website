import React from "react";
import Hero from "../Components/Hero";
import CategorySection from "../Components/CategorySection";
import VehicleTracking from "../Components/VehicleTracking";
import SmartQRFeature from "../Components/SmartQRFeature";
import RenewalReminder from "../Components/RenewalReminder";

const Home = () => {
  return (
    <>
      <Hero />
      <CategorySection />
      <VehicleTracking />
      <SmartQRFeature />
      <RenewalReminder />
    </>
  );
};

export default Home;
