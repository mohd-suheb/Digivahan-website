import { useEffect, useState } from "react";

function PrivacyPolicy() {
  const [policy, setPolicy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch("api/privacy-policy");
        const data = await res.json();
        setPolicy(data);
      } catch (error) {
        console.error("Error fetching privacy policy:", error);
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
      ) : policy ? (
        <>
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left text-indigo-700">
            {policy.heading}
          </h1>

          {/* Effective Date */}
          <p className="text-gray-500 mb-6 text-sm sm:text-base italic text-center lg:text-left">
            📅 Effective Date: {policy.effectivedate}
          </p>

          {/* Description */}
          <p className="mb-10 text-gray-700 text-justify text-base sm:text-lg leading-relaxed">
            {policy.description}
          </p>

          {/* Sections */}
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            {policy.Section?.map((sec, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-indigo-50 to-indigo-100 border border-indigo-200 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
              >
                <h2 className="text-xl font-semibold mb-3 text-indigo-800 border-b border-indigo-200 pb-2">
                  {sec.tittle}
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">No data available</p>
      )}
    </div>
  );
}

export default PrivacyPolicy;

