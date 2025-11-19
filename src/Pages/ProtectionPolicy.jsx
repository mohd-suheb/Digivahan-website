


import React, { useEffect, useState } from "react";
import { BsShieldCheck } from "react-icons/bs";

const ProtectionPolicy = () => {
  const [protection, setProtection] = useState(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/protection-policy`);
        if (!res.ok) throw new Error("Failed to fetch protection policy");

        const data = await res.json();
        console.log("API Response:", data);

        // Directly assign the data (backend JSON is object, not nested)
        setProtection(data);
      } catch (error) {
        console.error("Error while fetching the data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-8 max-w-4xl mx-auto">
      {loading ? (
        <p className="text-center text-gray-500 text-lg animate-pulse">
          Loading...
        </p>
      ) : protection ? (
        <>
          {/* Top Border */}
          <div className="border-b-2 border-blue-300 w-3/4 sm:w-2/3 md:w-1/2 mb-4 mx-auto"></div>

          {/* Heading */}
          <h1 className="text-xl sm:text-4xl lg:text-3xl font-semibold mb-4 text-center text-blue-400">
            {protection.heading}
          </h1>

          {/* Bottom Border */}
          <div className="border-b-2 border-blue-300 w-3/4 sm:w-2/3 md:w-1/2 mx-auto mb-8"></div>

          {/* Effective Date */}
          <p className="text-black mt-10 sm:text-xl md:text-2xl italic text-center font-semibold">
            📅 Effective Date: {protection.effectivedate}
          </p>

          {/* Description */}
          <p className="mt-8 text-gray-700 text-base sm:text-lg leading-relaxed max-w-prose mx-auto text-justify">
            {protection.description}
          </p>

          {/* Sections – row-wise with hover */}
          <div className="space-y-6 mt-10">
            {protection.Section?.map((sec, index) => (
              <div
                key={index}
                className="p-5 rounded-md shadow-sm hover:shadow-md transition duration-200"
              >
                <h2 className="text-2xl font-semibold mb-2 text-blue-900">
                  {sec.title}
                </h2>
                <p className="text-black text-base leading-relaxed whitespace-pre-line">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>

          {/* Footer message */}
          <div className="flex items-center justify-center mt-20 gap-2">
            <BsShieldCheck className="text-blue-500 text-xl" />
            <p className="text-center text-sm font-bold text-gray-800">
              We value your protection — your data is always secure with us.
            </p>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500"></p>
      )}
    </div>
  );
};

export default ProtectionPolicy;


