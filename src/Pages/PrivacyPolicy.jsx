import { BsBalloonHeartFill } from "react-icons/bs";

export default function PrivacyPolicy() {
  const policy = {
    heading: "Privacy Policy",
    effectivedate: "18/09/2025",
    sections: [
      {
        title: "1. Introduction",
        content:
          "Digivahan Digital India ('we', 'our', or 'us') is committed to protecting your privacy and ensuring that your personal information is handled responsibly.",
      },
      {
        title: "2. Data We Collect",
        content: `We may collect information such as:
- Name  
- Contact details  
- Vehicle information  
- Uploaded documents  
- Location details  
- Payment information  
- Usage analytics`,
      },
      {
        title: "3. How We Use Your Data",
        content: `We use your data for:
- User verification  
- Report generation  
- Secure payments  
- Improving app performance  
- Analytics and fraud prevention`,
      },
    ],
  };

  return (
    <div className="px-6 lg:px-16 py-10 max-w-4xl mx-auto">
      {/* Top line */}
      <div className="border-b-2 border-blue-400 w-2/3 md:w-1/2 mx-auto mb-3"></div>

      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
        {policy.heading}
      </h1>

      <div className="border-b-2 border-blue-400 w-full md:w-1/2 mx-auto mt-2"></div>

      {/* Effective Date */}
      <p className="text-center italic text-lg mt-6 font-semibold text-gray-800">
        📅 Effective Date: {policy.effectivedate}
      </p>

      {/* Sections */}
      <div className="space-y-6 mt-10">
        {policy.sections.map((sec, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {sec.title}
            </h2>
            <p className="text-black whitespace-pre-line leading-relaxed">
              {sec.content}
            </p>
          </div>
        ))}
      </div>

      {/* Footer message */}
      <div className="flex items-center justify-center mt-16 gap-2">
        <BsBalloonHeartFill className="text-red-500 text-xl" />
        <p className="text-sm font-bold text-gray-700">
          Your trust matters — your data is our responsibility.
        </p>
      </div>
    </div>
  );
}
