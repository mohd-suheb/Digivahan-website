// Razatpg.jsx
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import userAvatar from "../assets/User Avatar.png";
import img1 from "../assets/Group 513752.png";
import img2 from "../assets/Group 152.png";
import img3 from "../assets/Group 151.png";
import img4 from "../assets/Group 8.png";
import img5 from "../assets/Frame 1171287799.png";
import img6 from "../assets/Frame 9.png";
import img7 from "../assets/Frame 8.png";
import img8 from "../assets/Frame 7.png";
import img9 from "../assets/vault 1 (1).png";
import imgvec from "../assets/Vector.png";
import { useNavigate } from "react-router-dom";

const Razatpg = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const boxes = [
    { img: img1, title: "Car Inquiry", text: "Ask about car details." },
    { img: img2, title: "Lost Item", text: "Contact for lost belongings." },
    { img: img3, title: "Accident Help", text: "Emergency contact support." },
    { img: img4, title: "Service Info", text: "Know about service history." },
    { img: img5, title: "Ownership", text: "Verify ownership details." },
    { img: img6, title: "Maintenance", text: "Discuss maintenance issues." },
    { img: img7, title: "Insurance", text: "Ask about insurance documents." },
    { img: img8, title: "Pollution", text: "Get PUC or emission info." },
    {
      img: img9,
      title: "Request",
      text: "for document access.",
      otp: true,
    },
  ];

  const handleBoxClick = (index) => {
    setActiveIndex(index);
    if (boxes[index].otp) {
      navigate("/Razatform", { state: { showOtp: true } });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-4 shadow-md bg-white">
        <ArrowLeft className="w-6 h-6 text-gray-700 cursor-pointer" />
        <h1 className="text-lg md:text-xl font-semibold text-gray-800">
          Scan QR Code
        </h1>
        <div className="w-6" />
      </header>

      {/* Profile */}
      <main className="flex flex-col items-center mt-6 px-4 text-center">
        <img
          src={userAvatar}
          alt="User Avatar"
          className="w-28 h-28 rounded-full border-4 border-blue-500"
        />
        <div className="flex items-center gap-2 mt-3">
          <h1 className="text-xl font-bold text-gray-800">Rajat Malik</h1>
          <img src={imgvec} alt="vector" className="w-6 h-6" />
        </div>
      </main>

      {/* Boxes */}
      <section className="grid grid-cols-2 gap-4 px-4 pb-8 mt-6">
        {boxes.map((box, index) => (
          <div
            key={index}
            onClick={() => handleBoxClick(index)}
            className={`rounded-xl p-4 flex flex-col items-center text-center border ${
              activeIndex === index ? "border-yellow-400 shadow-lg" : "border-gray-300"
            } bg-white cursor-pointer hover:shadow-md transition`}
          >
            <img src={box.img} alt={box.title} className="w-12 h-12 mb-3" />
            <h3 className="font-semibold text-gray-800 text-sm md:text-base">
              {box.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-600 mt-1">{box.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Razatpg;













