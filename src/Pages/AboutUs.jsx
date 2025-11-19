import React from "react";
import leftimg from "../assets/Left (1).png";
import icons from "../assets/Icons.png";
import leftimg2 from "../assets/Left.png";
import colimg from "../assets/Col (1).png";
import ringimg from "../assets/Right.png";
import conimg from "../assets/Container.png";
import deskimg from "../assets/Desktop.png";
import img from "../assets/image 20.png";

function AboutSection() {
  return (
    <>
      {/* ---- First Section ---- */}
      <section className="w-full bg-white py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Left Part */}
          <div className="md:w-1/2 flex flex-col gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              About Us
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Digivahan Digital India Pvt. Ltd.
            </h3>
            <h4 className="text-base sm:text-lg font-semibold text-gray-700">
              Empowering India with Smart Vehicle Solutions
            </h4>

            <p className="text-gray-600 leading-relaxed mt-2 text-sm sm:text-base">
              Digivahan is India’s trusted digital platform for all your vehicle-related services. From RC, insurance, and PUC status to challan checks and safety QR stickers — we bring everything to your fingertips. With a mission to make transportation smarter, safer, and more accessible, we are revolutionizing the way India moves.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Established in 2023, Digivahan Digital India Pvt. Ltd. is a technology-driven company focused on transforming vehicle management and public safety through digital innovation. Our mission is to create a smart, mobile-first ecosystem where vehicle-related services are seamless, secure, and easily accessible for every Indian citizen.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              We specialize in offering QR-based vehicle identification and real-time verification services that not only assist vehicle owners but also empower the public to report lost or misplaced vehicles using our unique QR code system.
            </p>
          </div>

          {/* Right Part */}
          <div className="relative md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
            <img
              src={icons}
              alt="Background Icons"
              className="absolute -left-6 sm:-left-10 top-6 sm:top-10 h-48 sm:h-64 w-auto opacity-20 -z-10"
            />
            <img
              src={leftimg}
              alt="Main Illustration"
              className="relative h-64 sm:h-[420px] w-auto object-contain z-10"
            />
          </div>
        </div>
      </section>

      {/* ---- Second Section ---- */}
      <section className="w-full  py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Left: Image */}
          <div className="relative md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
            <img
              src={icons}
              alt="Background icons"
              className="absolute -left-6 sm:-left-10 top-6 sm:top-10 h-48 sm:h-64 w-auto opacity-20 -z-10"
            />
            <img
              src={leftimg2}
              alt="Main Left"
              className="relative h-64 sm:h-[400px] w-auto object-contain z-10"
            />
          </div>

          {/* Right: Text */}
          <div className="md:w-1/2 flex flex-col gap-4 mt-6 md:mt-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">About Us</h2>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              Digivahan Digital India Pvt. Ltd.
            </h3>
            <h4 className="text-base sm:text-lg font-semibold text-gray-700">
              Empowering India with Smart Vehicle Solutions
            </h4>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Digivahan is India’s trusted digital platform for all your vehicle-related services. From RC, insurance, and PUC status to challan checks and safety QR stickers — we bring everything to your fingertips.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Third Section ---- */}
      <section className="w-full bg-white py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Left: Vision + Mission */}
          <div className="md:w-2/3 flex flex-col gap-8">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-black mb-3">Our Vision</h1>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Our mission is to make every Indian vehicle digitally verifiable and seamlessly connected, creating a unified platform where authenticity, safety, and transparency go hand in hand. By empowering vehicle owners, authorities, and the public with reliable digital tools, we aim to build a smarter and more transparent transport ecosystem — one that enhances trust, reduces fraud, and ensures safer roads for everyone.
              </p>
            </div>

            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-black mb-3">Our Mission</h1>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                We aim to simplify vehicle documentation, safety, and verification by bringing everything together on an all-in-one digital platform. Our solution is designed to provide trusted, secure, and real-time vehicle services for every citizen, ensuring that important documents are always accessible, safety measures are always active, and verification is just a click away.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
            <img
              src={colimg}
              alt="Illustration"
              className="h-64 sm:h-[380px] w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ---- Fourth Section ---- */}
      <section className="w-full bg-white py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between">
          {/* Left */}
          <div className="md:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4">Why Choose Us</h1>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We offer a wide range of services designed to make your vehicle ownership experience smarter, safer, and more convenient. Among our many features, some stand out as true gems:
            </p>
            <ul className="list-disc pl-5 mt-4 text-gray-700 space-y-2 text-sm sm:text-base">
              <li>Citizens reporting found or misplaced vehicles</li>
              <li>Private and Commercial Vehicle support</li>
              <li>Transport professionals and RTO-linked partners</li>
            </ul>
          </div>

          {/* Right */}
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img
              src={ringimg}
              alt="Ring Illustration"
              className="h-64 sm:h-[360px] w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ---- Container Image Section ---- */}
      <section className="w-full bg-white py-8 px-4 md:px-6">
        <div className="flex justify-center items-center">
          <img
            src={conimg}
            alt="Container img"
            className="h-56 sm:h-72 w-auto object-contain"
          />
        </div>
      </section>

      {/* ---- Legal Section ---- */}
      <section className="w-full bg-white py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between">
          {/* Left */}
          <div className="md:w-1/2 space-y-2 text-sm sm:text-base">
            <h1 className="text-xl sm:text-2xl font-bold text-black">
              Legal Entity & Contact Info
            </h1>
            <p>Company Name: Digital India Pvt Ltd</p>
            <p>Established: 2023</p>
            <p>CIN: U62099DL2023PTC420571</p>
            <p>Registered Address: Plot No, 2-A, Third Floor, Block-R, Uttam Nagar, New Delhi - 110059, India</p>
            <p>Email: info@digivahan.in</p>
          </div>

          {/* Right */}
          <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src={deskimg}
              alt="Desktop img"
              className="h-56 sm:h-72 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ---- Final Banner ---- */}
      <div className="flex justify-center items-center w-full h-64 sm:h-96 bg-gray-100">
        <img
          src={img}
          alt="Image.png"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </>
  );
}

export default AboutSection;







