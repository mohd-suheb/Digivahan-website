const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register
exports.register = async (req, res) => {
  try {
    const { firstname, lastname, email, password, role } = req.body;

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ 
        success: false, 
        message: "User already exists" 
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashPassword,
      role: role || "user",
    });

    const token = jwt.sign(
      { id: user._id, role: user.role }, 
      process.env.JWT_SECRET, 
      { expiresIn: "7d" }
    );

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: { 
        id: user._id, 
        firstname: user.firstname, 
        lastname: user.lastname, 
        email: user.email, 
        role: user.role 
      },
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Server error", 
      error: error.message 
    });
  }
};

// Login
// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     console.log("🔐 Login attempt for:", email);

//     const user = await User.findOne({ email });
//     if (!user) {
//       console.log("❌ User not found");
//       return res.status(400).json({ 
//         success: false, 
//         message: "Invalid credentials" 
//       });
//     }

//     console.log("✅ User found:", user._id);

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       console.log("❌ Password mismatch");
//       return res.status(400).json({ 
//         success: false, 
//         message: "Invalid credentials" 
//       });
//     }

//     console.log("✅ Password matched");
//     console.log("🔑 JWT_SECRET:", process.env.JWT_SECRET);
//     console.log("📝 Payload:", { id: user._id, role: user.role });

//     const token = jwt.sign(
//       { id: user._id, role: user.role }, 
//       process.env.JWT_SECRET, 
//       { expiresIn: "7d" }
//     );

//     console.log("🎫 Generated Token Length:", token.length);
//     console.log("🎫 Token Parts Count:", token.split('.').length);
//     console.log("🎫 Token Preview:", token.substring(0, 50) + "...");

//     // Immediately verify the token
//     try {
//       const verified = jwt.verify(token, process.env.JWT_SECRET);
//       console.log("✅ Token verified immediately:", verified);
//     } catch(verifyError) {
//       console.log("❌ Token verification failed:", verifyError.message);
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Login successful",
//       token,
//       user: { 
//         id: user._id, 
//         email: user.email, 
//         role: user.role 
//       },
//     });
//   } catch (error) {
//     console.log("❌ Login error:", error.message);
//     return res.status(500).json({ 
//       success: false, 
//       message: "Login error", 
//       error: error.message 
//     });
//   }
// 

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    // ✅ TOKEN – SAME SECRET AS MIDDLEWARE
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      process.env.JWT_SECRET, // ✅ IMPORTANT
      { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Login failed",
      error: error.message
    });
  }
};

// Send OTP (Demo)
exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    
    // Demo OTP: 1234
    const otp = "1234";
    
    return res.status(200).json({ 
      success: true, 
      message: "OTP sent successfully",
      otp: otp // Remove in production
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error sending OTP" 
    });
  }
};

// Verify OTP (Demo)
exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    
    if (otp === "1234") {
      return res.status(200).json({ 
        success: true, 
        message: "OTP verified" 
      });
    } else {
      return res.status(400).json({ 
        success: false, 
        message: "Invalid OTP" 
      });
    }
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Error verifying OTP" 
    });
  }
};