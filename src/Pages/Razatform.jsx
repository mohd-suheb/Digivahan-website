// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { Lock, X } from "lucide-react";
// import { IoCallSharp, IoChatbox } from "react-icons/io5";
// import userAvatar from "../assets/User Avatar.png";
// import circleimg from "../assets/Ellipse 21.png";
// import vectorimg from "../assets/Vector (1).png";
// import imgvec from "../assets/Vector.png";
// import vec2 from "../assets/Vector (2).png";
// import vec3 from "../assets/Vector (3).png";
// import vec4 from "../assets/Document.png";
// import { GoArrowLeft } from "react-icons/go";

// const Razatform = () => {
//   const location = useLocation();
//   const [otpCardVisible, setOtpCardVisible] = useState(location.state?.showOtp || false);
//   const [otpInputs, setOtpInputs] = useState(["", "", "", ""]);
//   const [wrongOtp, setWrongOtp] = useState(false);
//   const [timer, setTimer] = useState(30);
//   const [progress, setProgress] = useState(100);

//   useEffect(() => {
//     if (otpCardVisible && timer > 0) {
//       const interval = setInterval(() => {
//         setTimer((prev) => prev - 1);
//         setProgress((prev) => (prev > 0 ? prev - 3.33 : 0));
//       }, 1000);
//       return () => clearInterval(interval);
//     }
//   }, [otpCardVisible, timer]);

//   const handleOtpChange = (val, i) => {
//     if (/^\d?$/.test(val)) {
//       const newOtp = [...otpInputs];
//       newOtp[i] = val;
//       setOtpInputs(newOtp);
//     }
//   };

//   const verifyOtp = () => {
//     const otp = otpInputs.join("");
//     if (otp === "1234") {
//       setWrongOtp(false);
//       setOtpCardVisible(false);
//     } else {
//       setWrongOtp(true);
//     }
//   };

//   return (
//     <div className={`relative min-h-screen transition-all duration-300 ${otpCardVisible ? "bg-gray-800/90" : "bg-white"}`}>
//       {/* Header */}
//       <div className="bg-white shadow-md w-full px-4 py-6 flex justify-between items-center">
//         <GoArrowLeft className="h-7 w-7 cursor-pointer" />
//         <p className="text-lg sm:text-xl font-semibold text-black">Rajat Details</p>
//         <div className="text-3xl sm:text-4xl text-black cursor-pointer">&#8942;</div>
//       </div>

//       {/* Profile */}
//       <div className="flex justify-center mt-6">
//         <img
//           src={userAvatar}
//           alt="User Avatar"
//           className="w-24 h-24 rounded-full border-4 border-blue-500"
//         />
//       </div>

//       <div className="flex gap-2 justify-center items-center mt-3">
//         <h1 className="text-xl sm:text-2xl font-bold text-black">Rajat Malik</h1>
//         <img src={imgvec} alt="vector" className="w-6 h-6 sm:w-8 sm:h-8" />
//       </div>

//       {/* Call + Chat Buttons */}
//       <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 px-2">
//         <button className="bg-yellow-400 text-white flex items-center justify-center gap-2 px-5 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition w-full sm:w-auto">
//           <IoCallSharp className="text-lg" /> Call Rajat
//         </button>
//         <button className="bg-yellow-400 text-white flex items-center justify-center gap-2 px-5 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition w-full sm:w-auto">
//           <IoChatbox className="text-lg" /> Chat with Rajat
//         </button>
//       </div>

//       {/* Example Document Cards */}
//       {[{ title: "Insurance", desc: "Keep vehicle secured", img: vectorimg },
//         { title: "Pollution", desc: "Keep PUC ready", img: vec2 },
//         { title: "Registration Certificate", desc: "Save RC for quick access", img: vec3 },
//         { title: "Other Documents", desc: "Keep all digital docs handy", img: vec4 }
//       ].map((item, idx) => (
//         <div key={idx} className="w-[75%] mx-auto my-3 bg-white border border-gray-300 rounded-md flex items-center p-3 shadow-md">
//           <div className="relative w-[20%] flex justify-start pl-2">
//             <img src={circleimg} alt="Ellipse.png" className="h-20 w-20 object-cover" />
//             <img src={item.img} alt="Vector.png" className="h-10 w-9 absolute left-7 top-5" />
//           </div>
//           <div className="w-[70%] flex flex-col justify-center ml-[-36px]">
//             <h1 className="font-bold text-2xl text-black">{item.title}</h1>
//             <p className="text-gray-400 text-md mb-1">{item.desc}</p>
//             <button className="bg-yellow-400 text-white text-sm font-semibold px-4 py-1 rounded-full hover:bg-yellow-500">
//               View
//             </button>
//           </div>
//         </div>
//       ))}

//       {/* OTP Overlay */}
//       {otpCardVisible && (
//         <div className="absolute inset-0 flex items-center justify-center z-50">
//           <div className={`relative bg-white rounded-2xl shadow-xl w-80 md:w-96 p-6 text-center border-2 transition ${wrongOtp ? "border-red-400" : "border-transparent"}`}>
//             {/* Icon */}
//             <div className={`absolute -top-7 left-1/2 transform -translate-x-1/2 p-3 rounded-full shadow-md ${wrongOtp ? "bg-red-500" : "bg-yellow-400"}`}>
//               {wrongOtp ? <X className="text-white w-6 h-6" /> : <Lock className="text-white w-6 h-6" />}
//             </div>

//             <h2 className="mt-6 text-lg font-bold text-gray-800">Access the Document</h2>
//             <p className={`text-sm mt-2 ${wrongOtp ? "text-red-600 font-semibold" : "text-gray-600"}`}>
//               {wrongOtp ? "Wrong OTP! Try again." : `Enter 4-digit code. Time left: ${timer}s`}
//             </p>

//             {/* Progress Bar */}
//             <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
//               <div
//                 className="h-2 bg-yellow-400 rounded-full transition-all"
//                 style={{ width: `${progress}%` }}
//               />
//             </div>

//             {/* OTP Inputs */}
//             <div className="flex justify-center gap-3 mt-6">
//               {otpInputs.map((val, i) => (
//                 <input
//                   key={i}
//                   type="text"
//                   maxLength="1"
//                   value={val}
//                   onChange={(e) => handleOtpChange(e.target.value, i)}
//                   className={`w-10 h-10 text-center border rounded-md text-lg font-bold outline-none ${
//                     wrongOtp
//                       ? "border-red-400 focus:border-red-500"
//                       : "border-gray-400 focus:border-yellow-400"
//                   }`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={verifyOtp}
//               className={`mt-6 px-6 py-2 rounded-lg font-semibold text-white ${
//                 wrongOtp ? "bg-red-500 hover:bg-red-600" : "bg-yellow-400 hover:bg-yellow-500"
//               }`}
//             >
//               Access
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Razatform;



import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Lock, X } from "lucide-react";
import { IoCallSharp, IoChatbox } from "react-icons/io5";
import userAvatar from "../assets/User Avatar.png";
import circleimg from "../assets/Ellipse 21.png";
import vectorimg from "../assets/Vector (1).png";
import imgvec from "../assets/Vector.png";
import vec2 from "../assets/Vector (2).png";
import vec3 from "../assets/Vector (3).png";
import vec4 from "../assets/Document.png";
import { GoArrowLeft } from "react-icons/go";

const Razatform = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [otpCardVisible, setOtpCardVisible] = useState(location.state?.showOtp || false);
  const [otpInputs, setOtpInputs] = useState(["", "", "", ""]);
  const [wrongOtp, setWrongOtp] = useState(false);

  // ✅ Now only 1 minute (60 sec)
  const [timer, setTimer] = useState(60);
  const [progress, setProgress] = useState(100);

  // Timer effect (1 minute countdown)
  useEffect(() => {
    if (otpCardVisible && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
        setProgress((prev) => (prev > 0 ? prev - 100 / 60 : 0)); // 1-min smooth decrease
      }, 1000);
      return () => clearInterval(interval);
    }

    if (otpCardVisible && timer === 0) {
      setTimeout(() => {
        setOtpCardVisible(false);
        navigate("/session-expired");
      }, 500);
    }
  }, [otpCardVisible, timer, navigate]);

  // OTP input handling
  const handleOtpChange = (val, i) => {
    if (/^\d?$/.test(val)) {
      const newOtp = [...otpInputs];
      newOtp[i] = val;
      setOtpInputs(newOtp);
    }
  };

  // OTP verification (demo)
  const verifyOtp = () => {
    const otp = otpInputs.join("");
    if (otp === "1234") {
      setWrongOtp(false);
      setOtpCardVisible(false);
    } else {
      setWrongOtp(true);
    }
  };

  // Format mm:ss
  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className={`relative min-h-screen transition-all duration-300 ${otpCardVisible ? "bg-gray-800/90" : "bg-white"}`}>
      {/* Header */}
      <div className="bg-white shadow-md w-full px-4 py-6 flex justify-between items-center">
        <GoArrowLeft className="h-7 w-7 cursor-pointer" />
        <p className="text-lg sm:text-xl font-semibold text-black">Rajat Details</p>
        <div className="text-3xl sm:text-4xl text-black cursor-pointer">&#8942;</div>
      </div>

      {/* Profile */}
      <div className="flex justify-center mt-6">
        <img
          src={userAvatar}
          alt="User Avatar"
          className="w-24 h-24 rounded-full border-4 border-blue-500"
        />
      </div>

      <div className="flex gap-2 justify-center items-center mt-3">
        <h1 className="text-xl sm:text-2xl font-bold text-black">Rajat Malik</h1>
        <img src={imgvec} alt="vector" className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>

      {/* Call + Chat Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 px-2">
        <button className="bg-yellow-400 text-white flex items-center justify-center gap-2 px-5 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition w-full sm:w-auto">
          <IoCallSharp className="text-lg" /> Call Rajat
        </button>
        <button className="bg-yellow-400 text-white flex items-center justify-center gap-2 px-5 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition w-full sm:w-auto">
          <IoChatbox className="text-lg" /> Chat with Rajat
        </button>
      </div>

      {/* Example Document Cards */}
      {[{ title: "Insurance", desc: "Keep vehicle secured", img: vectorimg },
        { title: "Pollution", desc: "Keep PUC ready", img: vec2 },
        { title: "Registration Certificate", desc: "Save RC for quick access", img: vec3 },
        { title: "Other Documents", desc: "Keep all digital docs handy", img: vec4 }
      ].map((item, idx) => (
        <div key={idx} className="w-[75%] mx-auto my-3 bg-white border border-gray-300 rounded-md flex items-center p-3 shadow-md">
          <div className="relative w-[20%] flex justify-start pl-2">
            <img src={circleimg} alt="Ellipse.png" className="h-20 w-20 object-cover" />
            <img src={item.img} alt="Vector.png" className="h-10 w-9 absolute left-7 top-5" />
          </div>
          <div className="w-[70%] flex flex-col justify-center ml-[-36px]">
            <h1 className="font-bold text-2xl text-black">{item.title}</h1>
            <p className="text-gray-400 text-md mb-1">{item.desc}</p>
            <button className="bg-yellow-400 text-white text-sm font-semibold px-4 py-1 rounded-full hover:bg-yellow-500">
              View
            </button>
          </div>
        </div>
      ))}

      {/* OTP Overlay */}
      {otpCardVisible && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className={`relative bg-white rounded-2xl shadow-xl w-80 md:w-96 p-6 text-center border-2 transition ${wrongOtp ? "border-red-400" : "border-transparent"}`}>
            {/* Icon */}
            <div className={`absolute -top-7 left-1/2 transform -translate-x-1/2 p-3 rounded-full shadow-md ${wrongOtp ? "bg-red-500" : "bg-yellow-400"}`}>
              {wrongOtp ? <X className="text-white w-6 h-6" /> : <Lock className="text-white w-6 h-6" />}
            </div>

            <h2 className="mt-6 text-lg font-bold text-gray-800">Access the Document</h2>
            <p className={`text-sm mt-2 ${wrongOtp ? "text-red-600 font-semibold" : "text-gray-600"}`}>
              {wrongOtp ? "Wrong OTP! Try again." : `Enter 4-digit code. Time left: ${formatTime(timer)}`}
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
              <div
                className="h-2 bg-yellow-400 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* OTP Inputs */}
            <div className="flex justify-center gap-3 mt-6">
              {otpInputs.map((val, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  value={val}
                  onChange={(e) => handleOtpChange(e.target.value, i)}
                  className={`w-10 h-10 text-center border rounded-md text-lg font-bold outline-none ${
                    wrongOtp
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-400 focus:border-yellow-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={verifyOtp}
              className={`mt-6 px-6 py-2 rounded-lg font-semibold text-white ${
                wrongOtp ? "bg-red-500 hover:bg-red-600" : "bg-yellow-400 hover:bg-yellow-500"
              }`}
            >
              Access
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Razatform;

