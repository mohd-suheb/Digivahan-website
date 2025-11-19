// import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { FaUser, FaMapMarkerAlt } from "react-icons/fa";
import { FaUsersRectangle } from "react-icons/fa6";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";
import { AiOutlineClockCircle } from "react-icons/ai";
import userAvatar from "../assets/User Avatar.png";
import img1 from "../assets/Group 513752.png";
import img2 from "../assets/Group 152.png";
import img3 from "../assets/Group 151.png";
import img4 from "../assets/Group 8.png";
import img5 from "../assets/Frame 1171287799.png";
import img6 from "../assets/Frame 9.png";
import img7 from "../assets/Frame 8.png";
import img8 from "../assets/Frame 7.png";
import img9 from "../assets/vault 1 (1).png"
// import img9 from "../assets/Frame 1.png";
import imgvec from "../assets/Vector.png";
import { useNavigate } from "react-router-dom";



// const Razatpg = () => {
//   const navigate = useNavigate();

//   const boxes = [
//     { img: img1, title: "Car Inquiry", text: "Ask about car details." },
//     { img: img2, title: "Lost Item", text: "Contact for lost belongings." },
//     { img: img3, title: "Accident Help", text: "Emergency contact support." },
//     { img: img4, title: "Service Info", text: "Know about service history." },
//     { img: img5, title: "Ownership", text: "Verify ownership details." },
//     { img: img6, title: "Maintenance", text: "Discuss maintenance issues." },
//     { img: img7, title: "Insurance", text: "Ask about insurance documents." },
//     { img: img8, title: "Pollution", text: "Get PUC or emission info." },
//      {
//     img: img9,
//     title: "Request",
//     text: "for document access.",
//     link: "/Razatform", // 👈 yahaan link add kar do
//   },
//   ];

//   const [activeIndex, setActiveIndex] = useState(null);
//   const [clickCounts, setClickCounts] = useState(Array(boxes.length).fill(0));
//   const [isCounting, setIsCounting] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(32);
//   const [notificationSent, setNotificationSent] = useState(false);
//   const [timerDone, setTimerDone] = useState(false);

//   // Timer logic
//   useEffect(() => {
//     let timer;
//     if (isCounting && timeLeft > 0) {
//       timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
//     } else if (timeLeft === 0 && isCounting) {
//       setIsCounting(false);
//       setTimerDone(true); // timer finish → show image page
//     }
//     return () => clearInterval(timer);
//   }, [isCounting, timeLeft]);

//   const handleBoxClick = (index) => {
//     if (clickCounts[index] >= 3) return;
//     if (isCounting && activeIndex !== index) return;

//     const newCounts = [...clickCounts];
//     newCounts[index] += 1;
//     setClickCounts(newCounts);
//     setActiveIndex(index);

//     if (boxes[index].link) {
//     navigate(boxes[index].link);
//   }
//   };

//   const handleSendNotification = () => {
//     if (activeIndex === null) return;
//     setIsCounting(true);
//     setNotificationSent(true);
//     const prevCount = parseInt(localStorage.getItem("notificationCount")) || 0;
//     localStorage.setItem("notificationCount", prevCount + clickCounts[activeIndex]);
//   };

//   const formatTime = (seconds) => {
//     const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
//     const secs = String(seconds % 60).padStart(2, "0");
//     return `${mins}:${secs}`;
//   };

//   return (
//     <div className="bg-white min-h-screen flex flex-col relative">
//       {/* Header */}
//       <header className="flex items-center justify-between p-4 shadow-md">
//         <ArrowLeft
//           className="w-6 h-6 text-gray-700 cursor-pointer"
//           onClick={() => navigate(-1)}
//         />
//         <h1 className="text-lg md:text-xl font-semibold text-gray-800">
//           Scan QR Code
//         </h1>
//         <div className="w-6" />
//       </header>

//       {/* Profile */}
//       {!timerDone && (
//         <main className="flex flex-col items-center mt-6 px-4 text-center">
//           <img
//             src={userAvatar}
//             alt="User Avatar"
//             className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-blue-500 object-cover"
//           />
       
//           <div className="flex items-center gap-2 mt-3">
//             <h1 className="text-xl md:text-2xl font-bold">Rajat Malik</h1>
//             <img src={imgvec} alt="vector" className="w-6 h-6 md:w-8 md:h-8" />
//            </div>
          
//           <div className="flex flex-wrap justify-center gap-4 md:gap-10 mt-4">
//             <div className="flex items-center gap-2">
//               <FaUser className="text-yellow-400 text-lg md:text-xl" />
//               <p className="text-sm md:text-base font-semibold text-gray-600">
//                 Sonu
//               </p>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaUsersRectangle className="text-yellow-400 text-lg md:text-xl" />
//               <p className="text-sm md:text-base font-semibold text-gray-600">
//                 27 years old
//               </p>
//             </div>
//             <div className="flex items-center gap-2">
//               <PiCurrencyCircleDollarFill className="text-yellow-400 text-lg md:text-xl" />
//               <p className="text-sm md:text-base font-semibold text-gray-600">
//                 Male
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center justify-center gap-2 mt-3 flex-wrap">
//             <FaMapMarkerAlt className="text-yellow-400 text-lg md:text-xl" />
//             <p className="text-sm md:text-base font-semibold text-gray-600">
//               Jamna Paar, Preet Vihar, Delhi
//             </p>
//           </div>
//         </main>
//       )}

//       {/* Instruction */}
//       {!timerDone && (
//         <div className="text-center font-medium mt-6 mb-4 px-6 text-sm md:text-base">
//           Please select the reason why you want to contact the owner:
//         </div>
//       )}

//       {/* Boxes Grid */}
//       {!timerDone ? (
//         <section className="grid grid-cols-2 md:grid-cols-2 gap-4 px-4 pb-8 relative">
//           {boxes.map((box, index) => {
//             const isSelected = index === activeIndex;
//             const isDisabled =
//               activeIndex !== null && index !== activeIndex && notificationSent;

//             // background during timer active
//             const bgColor =
//               isCounting && notificationSent
//                 ? "#b3b3b3"
//                 : isSelected && notificationSent
//                 ? "#b3b3b3"
//                 : "#ffffff";

//             return (
//               <div
//                 key={index}
//                 style={{
//                   border: isSelected ? "2px solid #003366" : "1px solid #ccc",
//                   backgroundColor: bgColor,
//                 }}
//                 className={`rounded-xl p-4 flex flex-col items-center text-center relative transition cursor-pointer ${
//                   isDisabled ? "pointer-events-none opacity-70" : ""
//                 }`}
//                 onClick={() => handleBoxClick(index)}
//               >
//                 <div className="relative">
//                   <img
//                     src={box.img}
//                     alt={box.title}
//                     className="w-12 h-12 md:w-14 md:h-14 object-contain mb-3"
//                   />
//                   {isSelected && isCounting && (
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="bg-white rounded-lg px-2 py-1 flex items-center gap-1 shadow-md border border-black">
//                         <AiOutlineClockCircle className="text-black text-sm" />
//                         <span className="text-gray-800 text-sm font-semibold">
//                           {formatTime(timeLeft)}
//                         </span>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//                 <h3 className="font-semibold text-gray-800 text-sm md:text-base">
//                   {box.title}
//                 </h3>
//                 <p className="text-xs md:text-sm text-gray-700 mt-1">
//                   {box.text}
//                 </p>
//               </div>
//             );
//           })}
//         </section>
//       ) : (
//         // ✅ Timer done → show smaller centered view
//         <div className="flex flex-col items-center justify-center px-4 pb-8 mt-10">
//           <img
//             src={boxes[activeIndex].img}
//             alt={boxes[activeIndex].title}
//             className="w-3/4 md:w-1/2 max-w-md object-contain rounded-xl shadow-md"
//           />
//           <h3 className="font-semibold text-gray-800 text-lg md:text-xl mt-4 text-center">
//             {boxes[activeIndex].title}
//           </h3>
//           <p className="text-gray-700 mt-2 text-center max-w-md">
//             {boxes[activeIndex].text}
//           </p>
//         </div>
//       )}

//       {/* Notification Button */}
//       {!timerDone && (
//         <div className="flex justify-center pb-8">
//           <button
//             className="rounded-md font-bold text-base md:text-lg px-6 py-3 w-3/4 sm:w-auto transition bg-yellow-400 text-white"
//             onClick={handleSendNotification}
//             disabled={activeIndex === null || isCounting}
//           >
//             Send Notification
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Razatpg;


// import React, { useState } from "react";
// import { ArrowLeft, Lock, X } from "lucide-react";
// import { FaUser, FaMapMarkerAlt } from "react-icons/fa";
// import { FaUsersRectangle } from "react-icons/fa6";
// import { PiCurrencyCircleDollarFill } from "react-icons/pi";
// import userAvatar from "../assets/User Avatar.png";
// import img1 from "../assets/Group 513752.png";
// import img2 from "../assets/Group 152.png";
// import img3 from "../assets/Group 151.png";
// import img4 from "../assets/Group 8.png";
// import img5 from "../assets/Frame 1171287799.png";
// import img6 from "../assets/Frame 9.png";
// import img7 from "../assets/Frame 8.png";
// import img8 from "../assets/Frame 7.png";
// import img9 from "../assets/vault 1 (1).png";
// import imgvec from "../assets/Vector.png";

// const Razatpg = () => {
//   const boxes = [
//     { img: img1, title: "Car Inquiry", text: "Ask about car details." },
//     { img: img2, title: "Lost Item", text: "Contact for lost belongings." },
//     { img: img3, title: "Accident Help", text: "Emergency contact support." },
//     { img: img4, title: "Service Info", text: "Know about service history." },
//     { img: img5, title: "Ownership", text: "Verify ownership details." },
//     { img: img6, title: "Maintenance", text: "Discuss maintenance issues." },
//     { img: img7, title: "Insurance", text: "Ask about insurance documents." },
//     { img: img8, title: "Pollution", text: "Get PUC or emission info." },
//     {
//       img: img9,
//       title: "Request",
//       text: "for document access.",
//       otp: true, // flag for OTP
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(null);
//   const [otpCardVisible, setOtpCardVisible] = useState(false);
//   const [otpInputs, setOtpInputs] = useState(["", "", "", ""]);
//   const [wrongOtp, setWrongOtp] = useState(false);

//   const handleBoxClick = (index) => {
//     if (boxes[index].otp) {
//       setActiveIndex(index);
//       setOtpCardVisible(true);
//       setWrongOtp(false); // reset previous error
//       setOtpInputs(["", "", "", ""]);
//     }
//   };

//   const handleOtpChange = (value, idx) => {
//     if (/^\d?$/.test(value)) {
//       const newOtp = [...otpInputs];
//       newOtp[idx] = value;
//       setOtpInputs(newOtp);
//     }
//   };

//   const verifyOtp = () => {
//     const otp = otpInputs.join("");
//     if (otp === "1234") {
//       // correct
//       setOtpCardVisible(false);
//       setWrongOtp(false);
//       alert("Access Granted ✅");
//     } else {
//       // wrong
//       setWrongOtp(true);
//     }
//   };

//   return (
//     <div className={`min-h-screen flex flex-col relative ${otpCardVisible ? "bg-gray-800/90" : "bg-white"} transition-all duration-300`}>
//       {/* Header */}
//       <header className="flex items-center justify-between p-4 shadow-md bg-white z-20 relative">
//         <ArrowLeft className="w-6 h-6 text-gray-700 cursor-pointer" />
//         <h1 className="text-lg md:text-xl font-semibold text-gray-800">Scan QR Code</h1>
//         <div className="w-6" />
//       </header>

//       {/* Profile */}
//       <main className="flex flex-col items-center mt-6 px-4 text-center">
//         <img src={userAvatar} alt="User Avatar" className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-blue-500 object-cover" />
//         <div className="flex items-center gap-2 mt-3">
//           <h1 className="text-xl md:text-2xl font-bold text-gray-800">Rajat Malik</h1>
//           <img src={imgvec} alt="vector" className="w-6 h-6 md:w-8 md:h-8" />
//         </div>
//       </main>

//       {/* Boxes */}
//       <section className="grid grid-cols-2 md:grid-cols-2 gap-4 px-4 pb-8 mt-6 relative z-10">
//         {boxes.map((box, index) => (
//           <div
//             key={index}
//             className="rounded-xl p-4 flex flex-col items-center text-center border border-gray-300 bg-white shadow-md cursor-pointer hover:shadow-lg transition"
//             onClick={() => handleBoxClick(index)}
//           >
//             <img src={box.img} alt={box.title} className="w-12 h-12 md:w-14 md:h-14 object-contain mb-3" />
//             <h3 className="font-semibold text-gray-800 text-sm md:text-base">{box.title}</h3>
//             <p className="text-xs md:text-sm text-gray-700 mt-1">{box.text}</p>
//           </div>
//         ))}
//       </section>

//       {/* OTP Card */}
//       {otpCardVisible && (
//         <div className="absolute inset-0 flex items-center justify-center z-50">
//           <div className={`relative bg-white rounded-2xl shadow-xl w-80 md:w-96 p-6 text-center border-2 ${wrongOtp ? "border-red-400" : "border-transparent"}`}>
//             <div className={`absolute -top-7 left-1/2 transform -translate-x-1/2 p-3 rounded-full ${wrongOtp ? "bg-red-500" : "bg-yellow-400"} shadow-md`}>
//               {wrongOtp ? <X className="text-white w-6 h-6" /> : <Lock className="text-white w-6 h-6" />}
//             </div>

//             <h2 className="mt-6 text-lg font-bold text-gray-800">Access the Document</h2>

//             <p className={`text-sm mt-2 ${wrongOtp ? "text-red-600 font-semibold" : "text-gray-600"}`}>
//               {wrongOtp ? "Wrong OTP! Please try again." : "Please enter the 4-digit security code sent to your device."}
//             </p>

//             <div className="flex justify-center gap-3 mt-6">
//               {otpInputs.map((val, i) => (
//                 <input
//                   key={i}
//                   type="text"
//                   maxLength="1"
//                   value={val}
//                   onChange={(e) => handleOtpChange(e.target.value, i)}
//                   className={`w-10 h-10 text-center border rounded-md text-lg font-bold outline-none ${
//                     wrongOtp ? "border-red-400 focus:border-red-500" : "border-gray-400 focus:border-yellow-400"
//                   }`}
//                 />
//               ))}
//             </div>

//             <div className="mt-6">
//               <button
//                 onClick={verifyOtp}
//                 className={`px-6 py-2 rounded-lg font-semibold text-white transition ${wrongOtp ? "bg-red-500 hover:bg-red-600" : "bg-yellow-400 hover:bg-yellow-500"}`}
//               >
//                 Access
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Razatpg;





// import React from 'react'
// import circleimg from "../assets/Ellipse 21.png"
// import vectorimg from "../assets/Vector (1).png"
// import { GoArrowLeft } from "react-icons/go";
// import userAvatar from "../assets/User Avatar.png";
// import imgvec from "../assets/Vector.png";
// import { IoCallSharp, IoChatbox } from "react-icons/io5";
// import vec2 from "../assets/Vector (2).png";
// import vec3 from "../assets/Vector (3).png";
// import vec4 from "../assets/Document.png";

// const Razatform = () => {
//   return (
// <>
//          <div className='bg-white shadow-md  w-full min-h-[70vh] mb-2 px-4 py-6'>
//                 {/* Header */}
//                 <div className='flex justify-between items-center'>
//                   <GoArrowLeft className='h-7 w-7 cursor-pointer' />
//                   <p className='text-lg sm:text-xl font-semibold text-black'>Rajat details</p>
//                   <div className='text-3xl sm:text-4xl text-black cursor-pointer transition'>&#8942;</div>
//                 </div>
        
//                 {/* Avatar */}
//                 <div className='flex justify-center mt-8'>
//                   <img
//                     src={userAvatar}
//                     alt='User Avatar'
//                     className='w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-blue-500 object-cover'
//                   />
//                 </div>
        
//                 {/* Name */}
//                 <div className='flex gap-2 justify-center items-center mt-4'>
//                   <h1 className='text-xl sm:text-2xl font-bold text-black'>Rajat Malik</h1>
//                   <img src={imgvec} alt='right vector' className='w-6 h-6 sm:w-8 sm:h-8' />
//                 </div>
        
//                 {/* Buttons */}
//                 <div className='flex flex-col sm:flex-row gap-4 justify-center mt-10 px-2'>
//                   {/* Call Button */}
//                   <button className='bg-yellow-400 text-white flex items-center justify-center gap-2 px-5 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition w-full sm:w-auto'>
//                     <IoCallSharp className='text-lg sm:text-xl' />
//                     <p className='font-semibold text-sm sm:text-base'>Call to Rajat</p>
//                   </button>
        
//                   {/* Chat Button */}
//                   <button className='bg-yellow-400 text-white flex items-center justify-center gap-2 px-5 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition w-full sm:w-auto'>
//                     <IoChatbox className='text-lg sm:text-xl' />
//                     <p className='font-semibold text-sm sm:text-base'>Chat with Rajat</p>
//                   </button>
//                 </div>
//          </div>

//               <div className='w-[75%] mx-auto bg-white border border-gray-300 rounded-md mb-2 flex items-center p-3 shadow-md'>
//   {/* Left part with overlapping images */}
//   <div className='relative w-[20%] flex justify-start pl-2'>
//     <img
//       src={circleimg}
//       alt='Ellipse.png'
//       className='h-20 w-20 object-cover'
//     />
//     <img
//       src={vectorimg}
//       alt='Vector.png'
//       className='h-10 w-9 absolute left-7 top-5'
//     />
//   </div>

//   {/* Right part with heading and text */}
//   <div className='w-[75%] flex flex-col justify-center ml-[-36px]'>
//     <h1 className='font-bold text-3xl text-black leading-tight mt-1'>Insurance</h1>
//     <p className='text-gray-300 text-xl mb-2'>Keep your vehicle secured with valid insurance</p>
//     <div>
//          <button className=' font-white rounded-full px-4 font-white py-1 mt-1 bg-yellow-300 text-white text-sm font-semibold  hover:bg-yellow-400 transition'> 
//           View
//          </button>
//     </div>
   
//   </div>
//              </div>


//               <div className='w-[75%] mx-auto mb-2 bg-white border border-gray-300 rounded-md flex items-center p-3 shadow-md'>
//   {/* Left part with overlapping images */}
//   <div className='relative w-[20%] flex justify-start pl-2'>
//     <img
//       src={circleimg}
//       alt='Ellipse.png'
//       className='h-20 w-20 object-cover'
//     />
//     <img
//       src={vec2}
//       alt='Vector.png'
//       className='h-10 w-9 absolute left-7 top-5'
//     />
//   </div>

//   {/* Right part with heading and text */}
//   <div className='w-[70%] flex flex-col justify-center ml-[-36px]'>
//     <h1 className='font-bold text-3xl text-black leading-tight'>Pollution</h1>
//     <p className='text-gray-300 text-xl mb-2'>Keep PUC certificate handly</p>

//     <div>
//          <button className=' font-white rounded-full px-4 font-white py-1 mt-1 bg-yellow-300 text-white text-sm font-semibold  hover:bg-yellow-400 transition'> 
//           View
//          </button>
//     </div>
//   </div>
//              </div>



//               <div className='w-[75%] mx-auto mb-2 bg-white border border-gray-300 rounded-md flex items-center p-3 shadow-md'>
//   {/* Left part with overlapping images */}
//   <div className='relative w-[20%] flex justify-start pl-2'>
//     <img
//       src={circleimg}
//       alt='Ellipse.png'
//       className='h-20 w-20 object-cover'
//     />
//     <img
//       src={vec3}
//       alt='Vector.png'
//       className='h-10 w-9 absolute left-7 top-5'
//     />
//   </div>

//   {/* Right part with heading and text */}
//   <div className='w-[70%] flex flex-col justify-center ml-[-36px]'>
//     <h1 className='font-bold text-3xl text-black leading-tight'>Registration Certificate</h1>
//     <p className='text-gray-300 text-xl mb-2'>Save your vehicle Rc for Quick access any time</p>

//     <div>
//          <button className=' font-white rounded-full px-4 font-white py-1 mt-1 bg-yellow-300 text-white text-sm font-semibold  hover:bg-yellow-400 transition'> 
//           View
//          </button>
//     </div>
//   </div>
//               </div>


//                <div className='w-[75%] mx-auto mb-2 bg-white border border-gray-300 rounded-md flex items-center p-3 shadow-md'>
//   {/* Left part with overlapping images */}
//   <div className='relative w-[20%] flex justify-start pl-2'>
//     <img
//       src={circleimg}
//       alt='Ellipse.png'
//       className='h-20 w-20 object-cover'
//     />
//     <img
//       src={vec4}
//       alt='Vector.png'
//       className='h-10 w-9 absolute left-7 top-5'
//     />
//   </div>

//   {/* Right part with heading and text */}
//   <div className='w-[70%] flex flex-col justify-center ml-[-36px]'>
//     <h1 className='font-bold text-3xl text-black leading-tight'>other Documents</h1>
//     <p className='text-gray-300 text-xl mb-2'>Keep your All digital document on your finger tip</p>

//     <div>
//          <button className=' font-white rounded-full px-4 font-white py-1 mt-1 bg-yellow-300 text-white text-sm font-semibold  hover:bg-yellow-400 transition'> 
//           View
//          </button>
//     </div>
//   </div>
//               </div>

//     </>
//   )
// }

// export default Razatform



//  {
//     "source": "https://digicapital.co.in",
//     "status": "301",
//     "target": "https://www.digicapital.co.in"
//   },