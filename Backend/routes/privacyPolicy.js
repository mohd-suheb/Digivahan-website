const express = require('express');
const privacyPolicyData= require("../controller/privacyPolicyData");
 const dataProtectionPolicy = require("../controller/dataProtectionPolicy");
 const returnRefundPolicy = require("../controller/returnRefundPolicy"); 


const router = express.Router();



router.get('/privacy-policy', async(req, res) =>{
    res.json(privacyPolicyData);
})

router.get('/protection-policy', async(req, res)=>{
    res.json(dataProtectionPolicy);
})


router.get("/refund-policy", (req, res) => {
  res.json(returnRefundPolicy);
});

module.exports = router;