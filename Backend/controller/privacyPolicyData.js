// // backend/controller/privacyPolicy.js
// const express = require("express");
// const router = express.Router();

// // Privacy Policy Data
// let privacyPolicyData = {
//   heading: "Privacy Policy",
//   effectivedate: "18/09/2025",
//   description: "...",
//   Section: [ /* ... */ ],
// };

// // GET /privacy-policy
// router.get("/", (req, res) => {
//   console.log("📥 GET /privacy-policy hit");
//   return res.status(200).json(privacyPolicyData);
// });

// // PUT /privacy-policy
// router.put("/", (req, res) => {
//   try {
//     console.log("📤 PUT /privacy-policy hit");
//     const updateData = req.body;

//     if (!updateData || Object.keys(updateData).length === 0) {
//       return res.status(400).json({ success: false, message: "No data provided for update." });
//     }

//     privacyPolicyData = {
//       ...privacyPolicyData,
//       ...updateData,
//       Section: updateData.Section || privacyPolicyData.Section,
//     };

//     console.log("✅ Updated privacyPolicyData:", privacyPolicyData);

//     return res.status(200).json({
//       success: true,
//       message: "Privacy Policy updated successfully.",
//       data: privacyPolicyData,
//     });
//   } catch (error) {
//     console.error("❌ Error updating privacy policy:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Server error while updating privacy policy.",
//     });
//   }
// });

// module.exports = router;




// ========================
// Privacy Policy Controller
// ========================

// Privacy Policy Data
// controller/privacyPolicyData.js
// Privacy Policy Data
let privacyPolicyData = {
  heading: "Privacy Policy",
  effectivedate: "18/09/2025",
  description: "Digivahan Digital India ('we', 'our', or 'us') is committed to protecting your privacy...",
  Section: [
    {
      title: "1. Introduction",
      content: "Digivahan Digital India ('we', 'our', or 'us') is committed to protecting your privacy."
    },
    {
      title: "2. Data We Collect",
      content: "We collect user data such as name, contact, vehicle info, documents, location, payment info, etc."
    },
    {
      title: "3. How We Use Your Data",
      content: "Information is used for verification, report generation, secure payments, analytics, and app performance."
    }
  ]
};

// GET /api/privacy-policy
const getPrivacyPolicy = (req, res) => {
  console.log("📥 GET /api/privacy-policy hit");
  res.status(200).json(privacyPolicyData);
};

// PUT /api/privacy-policy
const updatePrivacyPolicy = (req, res) => {
  try {
    console.log("📤 PUT /api/privacy-policy hit");
    const updateData = req.body;

    if (!updateData || Object.keys(updateData).length === 0) {
      return res.status(400).json({ success: false, message: "No data provided for update." });
    }

    privacyPolicyData = {
      ...privacyPolicyData,
      ...updateData,
      Section: updateData.Section || privacyPolicyData.Section
    };

    console.log("✅ Updated privacyPolicyData:", privacyPolicyData);

    res.status(200).json({
      success: true,
      message: "Privacy Policy updated successfully.",
      data: privacyPolicyData
    });
  } catch (error) {
    console.error("❌ Error updating privacy policy:", error);
    res.status(500).json({
      success: false,
      message: "Server error while updating privacy policy."
    });
  }
};

module.exports = { getPrivacyPolicy, updatePrivacyPolicy };

