// src/pages/ReturnRefundPolicyPage.js
import React, { useState, useEffect } from "react";

const ReturnRefundPolicyPage = () => {
  const [refund, setRefund] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch("/api/refund-policy");
        const data = await res.json();
        console.log(data);
        setRefund(data);
      } catch (error) {
        console.log("Error while fetching the data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  if (loading) {
    return (
      <div className="text-xl text-center text-green-500 animate-pulse py-12">
        Loading...
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-8 max-w-5xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left text-green-700">
        {refund.heading}
      </h1>

      {/* Effective Date */}
      <p className="text-gray-500 mb-6 text-sm sm:text-base italic text-center lg:text-left">
        📅 Effective Date: {refund.effectivedate}
      </p>

      {/* Description */}
      <p className="mb-10 text-gray-700 text-justify text-base sm:text-lg leading-relaxed">
        {refund.description}
      </p>

      {/* Sections */}
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {refund.sections?.map((section, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-800 border-b border-green-200 pb-2">
              {section.title}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReturnRefundPolicyPage;
