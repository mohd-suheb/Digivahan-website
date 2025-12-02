import { BsShieldCheck } from "react-icons/bs";

export default function ProtectionPolicy() {
  const data = {
    heading: "Data Protection Policy",
    effectivedate: "18/Jun/2025",
    AppliesTo:
      "All employees, interns, freelancers, contractors, and associated vendors.",
    Section: [
      {
        title: "1. Purpose",
        content:
          "This Data Protection Policy outlines Digivahan’s commitment to safeguarding the personal and sensitive data of its users, clients, partners, and employees. It ensures that data is handled in a secure, ethical, and legally compliant manner.",
      },
      {
        title: "2. Scope",
        content:
          "This policy applies to all personal data collected, stored, processed, or shared by Digivahan, including but not limited to:\n• Full Name, Mobile Number, Email Address\n• Vehicle Number, RC, PUC, Insurance Documents\n• PAN, Voter ID, Driving License\n• GPS-based Location Data\n• OTPs and Verification Logs\n• Uploaded Media via Camera or Gallery\n• Payment Data (Processed via Razorpay)\n• Firebase or other Analytics SDK data",
      },
      {
        title: "3. Applicability",
        content:
          "This policy is applicable to:\n• All full-time and part-time employees\n• Interns\n• Freelancers and contractors\n• Third-party vendors or service providers with access to company systems or data",
      },
      {
        title: "4. Data Handling Guidelines",
        content:
          "✅ Permitted:\n• Access data strictly for business-related purposes only\n• Use only authorized company systems and devices\n• Protect user credentials and passwords\n• Logout after usage and ensure system security\n\n❌ Prohibited:\n• Sharing user data outside the organization\n• Downloading or exporting data to personal devices\n• Discussing sensitive data on personal communication platforms\n• Taking screenshots or unauthorized backups",
      },
      {
        title: "5. Data Storage & Security Measures",
        content:
          "• All user data is securely stored on AWS servers and Firebase, with encryption applied both in transit and at rest.\n• Access is restricted through role-based access controls (RBAC)\n• Two-Factor Authentication (2FA) is mandatory for admin accounts\n• Regular monitoring and logging of access activities",
      },
      {
        title: "6. Data Retention & Deletion",
        content:
          "• Data is retained only as long as necessary to provide services or as required by law\n• Users can request data deletion through the app\n• Once deleted, data is permanently removed from active servers and backup systems",
      },
      {
        title: "7. Data Breach Management",
        content:
          "In the event of a data breach or suspected unauthorized access:\n• Report must be made immediately to security@digivahan.in\n• Investigation will be initiated within 24 hours\n• Users and authorities will be notified where required by law",
      },
      {
        title: "8. Legal Compliance",
        content:
          "This policy is designed in accordance with:\n• The Information Technology Act, 2000 (India)\n• Indian Data Protection Guidelines\n• Other applicable privacy and cybersecurity regulations",
      },
      {
        title: "9. Employee Agreement",
        content:
          "All employees, freelancers, and vendors must sign a Data Protection Agreement (DPA) or NDA, acknowledging understanding and acceptance of this policy before being granted access to any systems or data.",
      },
      {
        title: "10. Policy Violations",
        content:
          "Any breach of this policy will result in:\n• Disciplinary action, up to and including termination of employment or contract\n• Legal action where applicable\n• Permanent removal of system access",
      },
      {
        title: "💡 Note",
        content:
          "This document should be reviewed and updated annually or upon any change in data handling procedures or applicable law.",
      },
    ],
  };

  return (
    <div className="px-6 lg:px-16 py-10 max-w-4xl mx-auto">
      {/* Top Border */}
      <div className="border-b-2 border-blue-400 w-2/3 md:w-1/2 mx-auto mb-3"></div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
        {data.heading}
      </h1>

      {/* Bottom Border */}
      <div className="border-b-2 border-blue-400 w-full md:w-1/2 mx-auto mt-2"></div>

      {/* Effective Date */}
      <p className="text-center italic text-lg mt-6 font-semibold text-gray-800">
        📅 Effective Date: {data.effectivedate}
      </p>

      {/* Applies To */}
      <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed max-w-prose mx-auto text-center">
        <strong>Applies To:</strong> {data.AppliesTo}
      </p>

      {/* Sections */}
      <div className="space-y-6 mt-10">
        {data.Section.map((sec, index) => (
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

      {/* Footer */}
      <div className="flex items-center justify-center mt-16 gap-2">
        <BsShieldCheck className="text-blue-500 text-xl" />
        <p className="text-sm font-bold text-gray-700">
          We value your protection — your data is always secure with us.
        </p>
      </div>
    </div>
  );
}


