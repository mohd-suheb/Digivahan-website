const express = require("express");
const { userregister, loginuser } = require("../controller/Usercontroller");
const { isauth, isuser, isadmin } = require("../controller/middleware/Authn");

const router = express.Router();

router.post("/register", userregister);
router.post("/login", loginuser);

router.get("/test", isauth, (req, res) => {
  console.log("✅ Test route hit, user:", req.user);
  res.status(200).json({
    success: true,
    message: "Welcome to the protected route for test",
  });
});

router.get("/isuser", isauth, isuser, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the protected route for user",
  });
});

router.get("/isadmin", isauth, isadmin, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the protected route for admin",
  });
});

module.exports = router;
