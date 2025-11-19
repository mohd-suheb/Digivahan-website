// import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import CategorySection from "../Components/CategorySection";
import VehicleTracking from "../Components/VehicleTracking";
import SmartQRFeature from "../Components/SmartQRFeature";
import RenewalReminder from "../Components/RenewalReminder";

const Home = () => {

  // const [role, setrole] = useState(null);

  // useEffect (()=>{
       
  //   // get role from localstorage
  //   const userrole = localStorage.getItem('role');
  //   setrole(userrole);

  // },[]);
  return (
    <>
      <Hero />
      <CategorySection />
      <VehicleTracking />
      <SmartQRFeature />
      <RenewalReminder />
      



{/*    
      { role == 'admin' &&(
        <div className="text-center">
          <h2 className="font-bold  text-xl mt-10">Admin panel....</h2>
          <p className="text-xl font-bold text-gray mb-2">this section only for admin..</p>

           <button
            onClick={() => (window.location.href = "/admin")}
            className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
          >
            Go to Admin Dashboard
          </button>
        </div>
      )

      }

  
      {
        role == 'user' &&(
          <div className="text-center">
            <h2 className="font-bold  text-xl mt-10"> user section..</h2>
            <p className="text-xl font-bold text-gray mb-2">Welcome, regular user!</p>
          </div>
        )
      } */}
    </>
  ); 
};

export default Home;
