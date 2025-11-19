const express = require("express");
const router = express.Router();

const { getPrivacyPolicy, updatePrivacyPolicy } = require("../controller/privacyPolicyData");
// ⬆️ ye correct hai - updateprivacyData nahi, updatePrivacyPolicy hona chahiye

const { ProtectionPolicy } = require('../controller/dataProtectionPolicy'); 
const { ReturnRefundPolicy } = require("../controller/returnRefundPolicy");
const { TermsAndConditions } = require('../controller/termsAndConditions');
const { isauth, isadmin } = require("../controller/middleware/Authn");

// GET routes
router.get("/privacy-policy", getPrivacyPolicy);
router.get("/protection-policy", ProtectionPolicy);
router.get("/return-refund-policy", ReturnRefundPolicy); 
router.get("/terms-and-conditions", TermsAndConditions); 

// PUT route - Only admin can update
router.put("/privacy-policy", isauth, isadmin, updatePrivacyPolicy);
// ⬆️ updateprivacyData se updatePrivacyPolicy kar diya

module.exports = router;



