import React, { useEffect, useState } from "react";

const ProtectionPolicy = () => {
  const [protection, setProtection] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch("/api/protection-policy");
        const data = await res.json();
        console.log(data);
        setProtection(data);
      } catch (error) {
        console.log("Error while fetching the data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-8 max-w-5xl mx-auto">
      {loading ? (
        <p className="text-center text-gray-500 text-lg animate-pulse">
          Loading...
        </p>
      ) : protection ? (
        <>
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left text-blue-700">
            {protection.heading}
          </h1>

          {/* Effective Date */}
          <p className="text-gray-500 mb-6 text-sm sm:text-base italic text-center lg:text-left">
            📅 Effective Date: {protection.effectivedate}
          </p>

          {/* Description */}
          <p className="mb-10 text-gray-700 text-justify text-base sm:text-lg leading-relaxed">
            {protection.description}
          </p>

          {/* Sections */}
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            {protection.sections?.map((sec, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
              >
                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-blue-800 border-b border-blue-200 pb-2">
                  {sec.title}
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">No Data Available</p>
      )}
    </div>
  );
};

export default ProtectionPolicy;
