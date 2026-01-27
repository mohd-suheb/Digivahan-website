
// import React from 'react';
// import Hero from '../components/Hero';
// import CategorySection from '../components/CategorySection';
// import VehicleTracking from '../components/VehicleTracking';
// import SmartQRFeature from '../components/SmartQRFeature';
// import RenewalReminder from '../components/RenewalReminder';

// const Home = () => {
//   return (
//     <>
//       <Hero />
//       <CategorySection />
//       <VehicleTracking />
//       <SmartQRFeature />
//       <RenewalReminder />
//     </>
//   );
// };
import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import VehicleTracking from '../components/VehicleTracking';
import SmartQRFeature from '../components/SmartQRFeature';
import RenewalReminder from '../components/RenewalReminder';

const Home = () => {

  console.log({
    Hero,
    CategorySection,
    VehicleTracking,
    SmartQRFeature,
    RenewalReminder,
  });

  return (
    <>
      <Hero />
       <CategorySection />
       <VehicleTracking />   
       <SmartQRFeature />
     /<RenewalReminder />  
    </>
  );
};

export default Home;

// export default Home;