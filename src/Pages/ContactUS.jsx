// src/Pages/ContactUs.jsx
import { FaChevronDown } from "react-icons/fa6";  
import formimg from "../assets/Frame 1.png";  

export default function ContactUS() {
  return (
    <>
      {/* ---- First Section: FAQ ---- */}
      <section className="w-full py-6 px-4 md:px-6 bg-white mt-1">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Answers to your questions</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {[
            "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?",
            "Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?",
            "Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?",
            "Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?",
            "Sagittis consectetur gravida nec turpis eros, id sit et, dictum?"
          ].map((text, index) => (
            <div key={index} className="border-t border-gray-300 pt-4">
              <div className="flex justify-between items-center">
                <p className="text-sm sm:text-lg text-yellow-500">{text}</p>
                <FaChevronDown className="text-yellow-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Second Section: Contact Form ---- */}
      <section className="w-full bg-gray-200 py-8 px-4 md:px-6 flex justify-center">
        <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
          
          {/* Left side: Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center bg-yellow-50 p-4 md:p-0">
            <img
              src={formimg}
              alt="Contact Illustration"
              className="h-64 sm:h-80 md:h-[400px] w-auto"
            />
          </div>

          {/* Right side: Contact Form */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-700 mb-2">Contact Us</h1>
            <p className="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">
              Any question or remark? Just write a message!
            </p>

            <form className="space-y-3 sm:space-y-4">
              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              {/* Message */}
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>

              {/* Send Button */}
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white font-semibold py-2 sm:py-2.5 rounded-lg hover:bg-yellow-600 transition text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

