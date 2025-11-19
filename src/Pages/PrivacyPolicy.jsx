import { useEffect, useState } from "react";
import { BsBalloonHeartFill } from "react-icons/bs";

function PrivacyPolicy() {
  const [policy, setPolicy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = process.env.REACT_APP_API_URL;

      if (!API_URL) {
        console.error("REACT_APP_API_URL is not set in .env");
        setError("API URL not configured.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("https://api.digicapital.co.in/api/privacy-policy", {

          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          // credentials: "include" // uncomment if your backend uses cookies
        });
        console.log("privacy-policy-data", res);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setPolicy(data);
      } catch (err) {
        console.error("Error fetching privacy policy:", err);
        setError("Failed to fetch privacy policy.");
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
      ) : error ? (
        <p className="text-center text-red-500 text-lg">{error}</p>
      ) : policy ? (
        <>
          <div className="border-b-2 border-blue-300 w-3/4 sm:w-2/3 md:w-1/2 mb-2 mx-auto"></div>
          <h1 className="text-xl sm:text-4xl lg:text-3xl font-semibold mb-4 text-center text-blue-300">
            {policy.heading}
          </h1>
          <div className="border-b-2 border-blue-300 w-full sm:w-2/3 md:w-1/2 mx-auto"></div>
          <p className="text-black mt-10 sm:text-xl md:text-2xl italic text-center font-semibold">
            📅 Effective Date: {policy.effectivedate}
          </p>

          <div className="space-y-6 mt-10">
            {policy.Section?.map((sec, index) => (
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

          <div className="flex items-center justify-center mt-20 gap-2">
            <BsBalloonHeartFill className="text-red-500 text-xl" />
            <p className="text-center text-sm font-bold text-gray-800">
              Your trust matters — your data is our responsibility.
            </p>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">No privacy policy available.</p>
      )}
    </div>
  );
}

export default PrivacyPolicy;
