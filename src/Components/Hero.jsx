import React from "react";
import colImage from "../assets/Col.svg";
import { PlayCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        
        {/* Left Part */}
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl text-yellow-500 font-bold mb-4">
            DIGIVAHAN
          </h1>
          <p className="text-md sm:text-lg text-gray-700 mt-6">
            Empowering India with Smart Vehicle Solutions
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-4">
            Digivahan is India’s trusted digital platform for all your vehicle-related services. 
            From RC, insurance, and PUC status to challan checks and safety QR stickers — we bring 
            everything to your fingertips. With a mission to make transportation smarter, safer, and 
            more accessible, we are revolutionizing the way India moves.
          </p>
          {/* <p className="text-md sm:text-lg text-gray-700 mt-4">
            Download the app now and experience a new era of vehicle management!
          </p> */}

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
            {/* <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition">
              Download Now
            </button> */}
            <div className="flex items-center space-x-2 cursor-pointer mt-2 sm:mt-0">
              {/* <PlayCircle className="w-8 h-8 text-yellow-500" />
              <span className="font-medium text-gray-700 text-sm sm:text-base">Watch Video</span> */}
            </div>
          </div>
        </div>

        {/* Right Part */}
        <div className="flex-1 flex justify-center">
          <img src={colImage} alt="Scan QR" className="w-full max-w-sm sm:max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default Hero;


