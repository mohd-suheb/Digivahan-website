const express = require('express');
const router = express.Router();
const { register, login, sendOtp, verifyOtp } = require('../controllers/authController');
const { isauth, isuser, isadmin } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);

// Test routes
router.get('/test', isauth, (req, res) => {
  res.json({ success: true, message: "Protected route", user: req.user });
});

router.get('/user-only', isauth, isuser, (req, res) => {
  res.json({ success: true, message: "User route" });
});

router.get('/admin-only', isauth, isadmin, (req, res) => {
  res.json({ success: true, message: "Admin route" });
});

module.exports = router;