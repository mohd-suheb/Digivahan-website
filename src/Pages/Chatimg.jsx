import React, { useState, useEffect, useRef } from "react";
import chatimg2 from "../assets/User Avatar (1).png";
import { Bell, MessageCircle, Phone, Wifi, Paperclip } from "lucide-react";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { FaUnlockAlt } from "react-icons/fa";
import sendimg from "../assets/Group 68.png";
import { Link } from "react-router-dom";

const Chatimg = () => {
  const [messages, setMessages] = useState([
    { text: "Hey! How are you?", sender: "other" },
    { text: "I’m good! Working on something cool 😎", sender: "me" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const chatEndRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [startProgress, setStartProgress] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🔹 Read click count from localStorage
  useEffect(() => {
    const count = parseInt(localStorage.getItem("notificationCount")) || 0;
    if (count > 0) {
      setNotificationCount(count);
      setStartProgress(true);
      localStorage.removeItem("notificationCount"); // reset
    }
  }, []);

  // 🔹 Progress animation based on clicks
  useEffect(() => {
    if (!startProgress) return;
    let currentProgress = 0;
    const target = Math.min(notificationCount, 3) * 33; // max 3 badges
    const timer = setInterval(() => {
      currentProgress += 1;
      if (currentProgress >= target) {
        currentProgress = target;
        clearInterval(timer);
      }
      setProgress(currentProgress);
    }, 50);
    return () => clearInterval(timer);
  }, [startProgress, notificationCount]);

  const handleSend = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { text: newMessage, sender: "me" }]);
    setNewMessage("");
  };

  // 🔹 Virtual Keyboard keys
  const keyboardKeys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
    ["SPACE", "BACKSPACE"],
  ];

  const handleKeyClick = (key) => {
    if (key === "BACKSPACE") setNewMessage((prev) => prev.slice(0, -1));
    else if (key === "SPACE") setNewMessage((prev) => prev + " ");
    else setNewMessage((prev) => prev + key);
  };

  return (
    <>
      <div className="bg-white min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="flex items-center justify-between bg-white px-4 py-3 shadow-sm">
          <Link to="/Rajat">
            <img src={chatimg2} alt="user avatar" className="rounded-full w-10 h-10" />
          </Link>

          <p className="font-bold text-black text-lg">Rajat Malik</p>

          <div className="relative">
            <div className="text-3xl text-gray-600 cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
              &#8942;
            </div>

            {showMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 p-4 space-y-3 z-50">
                {["Send SMS Alert","Send IVR Call","Send Alert to Digivahan","Install App for In-App Calling"].map((item) => (
                  <div key={item} className="flex justify-between items-center hover:bg-gray-100 px-3 py-2 rounded-lg cursor-pointer text-sm">
                    <p>{item}</p>
                    <FaUnlockAlt className="text-gray-600" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Progress Header */}
        <div className="flex items-center justify-center mt-3 mb-4 px-4 space-x-2">
          <div className="relative">
            <Bell className="text-gray-700 w-5 h-5" />
            {notificationCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </div>

          <div className="flex-1 h-[2px] bg-gray-300 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400 transition-all duration-150 ease-linear" style={{ width: `${progress}%` }} />
          </div>

          <MessageCircle className="text-gray-700 w-5 h-5" />
          <div className="flex-1 h-[2px] bg-gray-300 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-500 transition-all duration-150 ease-linear" style={{ width: `${progress}%` }} />
          </div>

          <Phone className="text-gray-700 w-5 h-5" />
          <div className="flex-1 h-[2px] bg-gray-300 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400 transition-all duration-150 ease-linear" style={{ width: `${progress}%` }} />
          </div>

          <Wifi className="text-gray-700 w-5 h-5" />
        </div>

        {/* Chat Section */}
        <div className="bg-gray-100 flex-1 pt-4 pb-6 overflow-y-auto">
          <div className="px-3 space-y-3">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                <div className={`px-4 py-2 rounded-2xl max-w-[80%] text-gray-800 text-sm ${msg.sender === "me" ? "bg-green-200 rounded-br-none" : "bg-white rounded-bl-none"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
        </div>

        {/* Input Section */}
        <div className="flex items-center justify-between px-3 py-3 border-t bg-white">
          <Paperclip className="w-5 h-5 text-gray-600 cursor-pointer" />
          <div className="flex items-center bg-gray-200 w-[80%] rounded-lg px-3">
            <input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 bg-transparent outline-none py-2 text-gray-800 text-sm"
            />
            <HiOutlineDocumentDuplicate className="text-gray-700 w-4 h-4 mr-2 cursor-pointer" />
          </div>
          <img src={sendimg} alt="Send" className="w-7 h-7 cursor-pointer" onClick={handleSend} />
        </div>

        {/* 🔹 Virtual Keyboard */}
        <div className="flex flex-col items-center mt-4 pb-6 space-y-2">
          {keyboardKeys.map((row, i) => (
            <div key={i} className="flex justify-center flex-wrap gap-2">
              {row.map((key) => (
                <button
                  key={key}
                  onClick={() => handleKeyClick(key)}
                  className={`px-3 py-2 bg-gray-300 rounded-lg font-medium text-xs hover:bg-gray-400 transition ${key === "SPACE" ? "w-28" : ""}`}
                >
                  {key === "BACKSPACE" ? "⌫" : key}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Chatimg;
