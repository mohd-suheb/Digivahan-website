import { BsShieldCheck } from "react-icons/bs";

export default function RefundPolicy() {
  const policy = {
    heading: "Refund & Cancellation Policy",
    effectivedate: "18/Jun/2025",
    Section: [
      {
        title: "1. Overview",
        content:
          "This Refund & Cancellation Policy outlines the rules and procedures for refunds, cancellations, and disputes related to services offered by Digivahan Digital India.",
      },
      {
        title: "2. Service Nature",
        content:
          "Our services involve digital processing of vehicle documents, verification, and real-time data fetching. Once a service request is initiated, it may not be possible to reverse the process.",
      },
      {
        title: "3. Cancellation Policy",
        content:
          "• Cancellation is only allowed before a service begins processing.\n• Once data verification or document processing starts, cancellation cannot be requested.\n• Orders mistakenly placed due to user error are not eligible for cancellation.",
      },
      {
        title: "4. Refund Policy",
        content:
          "Refunds may be issued only when:\n• Payment was made but the service could not be delivered.\n• Duplicate payment was made.\n• System failure resulted in an incomplete service.\n\nRefunds will NOT be issued if:\n• Incorrect or invalid details were submitted by the user.\n• Processing has already started or service is completed.\n• User changes their mind after placing the order.",
      },
      {
        title: "5. Refund Processing Time",
        content:
          "Approved refunds will be processed within 7–10 working days directly to the original payment method used during the transaction.",
      },
      {
        title: "6. Contact for Refunds",
        content:
          "For refund or cancellation requests, contact:\n📧 support@digivahan.in\nPlease include order ID, mobile number, and proof of payment.",
      },
    ],
  };

  return (
    <div className="px-6 lg:px-16 py-10 max-w-4xl mx-auto">
      <div className="border-b-2 border-blue-400 w-2/3 md:w-1/2 mx-auto mb-3"></div>

      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
        {policy.heading}
      </h1>

      <div className="border-b-2 border-blue-400 w-full md:w-1/2 mx-auto mt-2"></div>

      <p className="text-center italic text-lg mt-6 font-semibold text-gray-800">
        📅 Effective Date: {policy.effectivedate}
      </p>

      <div className="space-y-6 mt-10">
        {policy.Section.map((sec, index) => (
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

      <div className="flex items-center justify-center mt-16 gap-2">
            <BsShieldCheck className="text-blue-500 text-xl" />
        <p className="text-sm font-bold text-gray-700">
          Your trust is important — we aim for transparent refund processing.
        </p>
      </div>
    </div>
  );
}





