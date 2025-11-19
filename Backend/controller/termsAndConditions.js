// controller/termsAndConditions.js

const termsAndConditions = {
  heading: "Terms & Conditions",
  effectivedate: "18/June/2025",
  description:
    "Welcome to Digivahan Digital India Pvt. Ltd. These Terms & Conditions ('Terms') govern your access and use of the Digivahan mobile application ('App') and associated services. By accessing or using our App, you agree to comply with these Terms. If you do not agree, please do not use our services.",

  sections: [
    {
      title: "1. Services Offered",
      content:
        "The Digivahan App allows users to:\n" +
        "• Verify vehicle details such as RC, Insurance, PUC, and Challans.\n" +
        "• Upload vehicle-related documents for digital validation.\n" +
        "• Generate and scan a unique QR code for vehicle identity.\n" +
        "• Report or alert about lost, damaged, or found vehicles through QR.\n" +
        "• Opt for physical delivery of QR stickers (paid service).",
    },
    {
      title: "2. User Eligibility",
      content:
        "Our platform is available for use by all individuals regardless of age. However, users below the age of 18 must access the services under parental or guardian supervision.",
    },
    {
      title: "3. Account Creation & Authentication",
      content:
        "To access the App, users must verify their mobile number through OTP. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.",
    },
    {
      title: "4. Payments",
      content:
        "Some services, such as physical QR sticker delivery, are paid.\n" +
        "• All payments are processed securely via Razorpay.\n" +
        "• Once processed, payments are non-refundable, unless otherwise stated.\n" +
        "• In case of payment failure or technical error, users may contact our support.",
    },
    {
      title: "5. Use of Third-party Services",
      content:
        "We rely on third-party services to deliver core functionalities:\n" +
        "• Firebase: For authentication, analytics, and data storage.\n" +
        "• Razorpay: For payment processing.\n" +
        "• External APIs: For fetching vehicle data (RC, challan, etc.).\n" +
        "These services may collect and use your data in accordance with their respective privacy policies.",
    },
    {
      title: "6. User Responsibilities",
      content:
        "• Users must provide accurate, up-to-date information.\n" +
        "• Misuse of QR code or submission of fake documents is strictly prohibited and may lead to legal action.\n" +
        "• Users are expected to respect public safety and report genuine incidents via QR scanning.",
    },
    {
      title: "7. Data Storage and Retention",
      content:
        "• User data is stored both locally on the user’s device and remotely on secure AWS and Firebase servers.\n" +
        "• Data is retained until the user manually deletes their account or requests data deletion.\n" +
        "• Users can request to access, edit, or delete their personal data through the app interface or by emailing us.",
    },
    {
      title: "8. QR Sticker Delivery",
      content:
        "• Users opting for physical QR stickers agree to provide correct shipping details.\n" +
        "• Delivery timelines may vary depending on location.\n" +
        "• Digivahan is not responsible for delays due to courier issues or incorrect addresses.",
    },
    {
      title: "9. Intellectual Property",
      content:
        "All content, features, logos, trademarks, and services within the App are the exclusive property of Digivahan Digital India Pvt. Ltd. Unauthorized use, duplication, or modification is strictly prohibited.",
    },
    {
      title: "10. Limitation of Liability",
      content:
        "Digivahan is not liable for:\n" +
        "• Inaccurate data submitted by users.\n" +
        "• Misuse of QR stickers by third parties.\n" +
        "• Delays or failures caused by third-party services or network issues.\n" +
        "• Any damages, losses, or claims arising from the use of our services.",
    },
    {
      title: "11. Termination of Services",
      content:
        "We reserve the right to suspend or terminate user accounts for:\n" +
        "• Violation of these Terms.\n" +
        "• Submission of fraudulent or misleading data.\n" +
        "• Abuse or misuse of platform functionalities.",
    },
    {
      title: "12. Changes to Terms",
      content:
        "We may update or modify these Terms at any time. Users will be notified of significant changes via app notifications or email. Continued use of the App after such updates constitutes your acceptance of the revised Terms.",
    },
    {
      title: "13. Governing Law",
      content:
        "These Terms shall be governed by and construed under the laws of India. All disputes shall be subject to the exclusive jurisdiction of the courts in [Your City/State].",
    },
    {
      title: "14. Contact Us",
      content:
        "For questions, support, or legal queries related to these Terms, please contact:\n" +
        "📧 Email: info@digivahan.in",
    },
  ],
};

// ✅ Wrap inside an Express handler function
exports.TermsAndConditions = (req, res) => {
  try {
    res.status(200).json(termsAndConditions);
  } catch (error) {
    console.error('Error fetching Terms & Conditions:', error);
    res
      .status(500)
      .json({ message: 'Server error while fetching Terms & Conditions' });
  }
};
