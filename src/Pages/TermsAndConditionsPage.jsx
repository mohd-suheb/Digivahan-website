import { BsFileEarmarkCheck } from "react-icons/bs";

export default function TermsConditions() {
  const terms = {
    heading: "Terms & Conditions",
    effectivedate: "18/Jun/2025",
    Section: [
      {
        title: "1. Introduction",
        content:
          "By using the Digivahan Digital India platform, website, or mobile application, you agree to comply with the terms and conditions outlined below.",
      },
      {
        title: "2. Eligibility",
        content:
          "• Users must be 18+ years old.\n• Users must provide accurate and verifiable information.\n• Fake, incorrect, or fraudulent submissions may lead to permanent account suspension.",
      },
      {
        title: "3. Service Usage",
        content:
          "Users agree to:\n• Use the platform only for lawful purposes.\n• Not misuse the services or attempt to breach security.\n• Provide accurate vehicle and personal details.\n\nWe reserve the right to deny service to anyone violating these rules.",
      },
      {
        title: "4. Payments",
        content:
          "• All payments must be completed before service delivery.\n• Payment once made is non-refundable unless covered under the Refund Policy.\n• Payments are securely processed via Razorpay or authorized partners.",
      },
      {
        title: "5. User Responsibilities",
        content:
          "Users are responsible for:\n• Maintaining confidentiality of login details.\n• Ensuring correct information submission.\n• Not sharing their account with others.",
      },
      {
        title: "6. Limitations of Liability",
        content:
          "Digivahan is not responsible for:\n• Delays caused by government portals or servers.\n• Incorrect information submitted by users.\n• External service failures, downtime, or API restrictions.",
      },
      {
        title: "7. Intellectual Property",
        content:
          "All logos, trademarks, UI, designs, and content belong to Digivahan Digital India. Unauthorized copying, selling, or distributing is prohibited.",
      },
      {
        title: "8. Termination of Service",
        content:
          "We reserve the right to suspend or terminate user access in cases of:\n• Misuse of service\n• Fraudulent activity\n• Violation of terms",
      },
      {
        title: "9. Policy Updates",
        content:
          "These terms may be updated periodically. Continued use of the platform implies acceptance of the updated terms.",
      },
      {
        title: "10. Contact Us",
        content:
          "For any inquiries:\n📧 support@digivahan.in\nWe aim to respond within 24–48 hours.",
      },
    ],
  };

  return (
    <div className="px-6 lg:px-16 py-10 max-w-4xl mx-auto">
      <div className="border-b-2 border-blue-400 w-2/3 md:w-1/2 mx-auto mb-3"></div>

      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
        {terms.heading}
      </h1>

      <div className="border-b-2 border-blue-400 w-full md:w-1/2 mx-auto mt-2"></div>

      <p className="text-center italic text-lg mt-6 font-semibold text-gray-800">
        📅 Effective Date: {terms.effectivedate}
      </p>

      <div className="space-y-6 mt-10">
        {terms.Section.map((sec, index) => (
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
        <BsFileEarmarkCheck className="text-blue-500 text-xl" />
        <p className="text-sm font-bold text-gray-700">
          By continuing, you agree to follow all terms & conditions.
        </p>
      </div>
    </div>
  );
}

