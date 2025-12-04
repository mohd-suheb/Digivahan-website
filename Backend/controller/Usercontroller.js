// const User = require('../models/Users');
    
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');



// // User Register
// const userregister = async (req, res) => {
//   try {
//     const { firstname, lastname, email, password, role } = req.body;

//     const existuser = await User.findOne({ email });
//     if (existuser) return res.status(400).json({ success: false, message: "User already exists" });

//     const hashpassword = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       firstname,
//       lastname,
//       email,
//       password: hashpassword,
//       role: role || "user",
//     });

//     const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });

//     return res.status(200).json({
//       success: true,
//       message: "User registered successfully",
//       token,
//       user: { id: user._id, firstname: user.firstname, lastname: user.lastname, email: user.email, role: user.role },
//     });
//   } catch (error) {
//     console.error("Register error:", error);
//     return res.status(500).json({ success: false, message: "Server error during registration", error: error.message });
//   }
// };

// // User Login
// const loginuser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ success: false, message: "Invalid credentials (user not found)" });

//     const ismatch = await bcrypt.compare(password, user.password);
//     if (!ismatch) return res.status(400).json({ success: false, message: "Incorrect password" });

//     const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });

//     return res.status(200).json({
//       success: true,
//       message: "Login successful",
//       token,
//       user: { id: user._id, email: user.email, role: user.role },
//     });
//   } catch (error) {
//     console.error("Login error:", error);
//     return res.status(500).json({ success: false, message: "Error while login", error: error.message });
//   }
// };


// const sendOtp = async (req, res) => {
//   try {
//     // Your OTP sending logic
//     res.status(200).json({ success: true, message: "OTP sent" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Error sending OTP" });
//   }
// };

// const verifyOtp = async (req, res) => {
//   try {
//     // Your OTP verification logic
//     res.status(200).json({ success: true, message: "OTP verified" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Error verifying OTP" });
//   }
// };

// module.exports = { userregister, loginuser,  sendOtp, verifyOtp };




