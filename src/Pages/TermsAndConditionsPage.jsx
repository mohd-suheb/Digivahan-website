import React, { useState, useEffect } from "react";
import { FaBalanceScale } from "react-icons/fa";

const TermsAndConditionsPage = () => {
  const [terms, setTerms] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/terms-and-conditions`);
        if (!res.ok) throw new Error("Failed to fetch Terms & Conditions data");
        const data = await res.json();
        console.log("Fetched Terms & Conditions:", data);
        setTerms(data);
      } catch (err) {
        console.error("Error while fetching Terms & Conditions:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="text-xl text-center text-green-500 animate-pulse py-12">
        Loading...
      </div>
    );
  }

  // Hide error (no visible message)
  if (error || !terms) {
    // console.log("Error hidden:", error);
    return null;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-8 max-w-4xl mx-auto">
      {/* Top Border */}
      <div className="border-b-2 border-blue-300 w-3/4 sm:w-2/3 md:w-1/2 mb-4 mx-auto"></div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-2xl font-bold mb-4 text-center text-blue-300">
        {terms.heading}
      </h1>

      {/* Bottom Border */}
      <div className="border-b-2 border-blue-300 w-3/4 sm:w-2/3 md:w-1/2 mx-auto mb-8"></div>

      {/* Effective Date */}
      <p className="text-black mt-10 sm:text-xl md:text-xl italic text-center font-semibold">
        📅 Effective Date: {terms.effectivedate}
      </p>

      {/* Description */}
      <p className="mt-8 text-gray-500 text-sm sm:text-xl leading-relaxed max-w-prose mx-auto text-justify">
        {terms.description}
      </p>

      {/* Sections */}
      <div className="space-y-6 mt-10">
        {terms.sections?.map((sec, index) => (
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

      {/* Footer Line */}
      <div className="flex items-center justify-center mt-20 gap-2">
        <FaBalanceScale className="text-green-600 text-xl" />
        <p className="text-center text-sm font-bold text-gray-800">
          By using our services, you agree to abide by our Terms & Conditions.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
