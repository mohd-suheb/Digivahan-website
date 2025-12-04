// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// // ========================
// // Authentication Middleware
// // ========================
// exports.isauth = async (req, res, next) => {
//   try {
//     let token;

//     // ✅ Try to get token from cookies
//     if (req.cookies && req.cookies.token) {
//       token = req.cookies.token;
//       console.log("✅ Token from cookies:", token);
//     }
//     // ✅ Or from Authorization header
//     else if (req.header("Authorization")) {
//       const authHeader = req.header("Authorization");
//       console.log("✅ Authorization Header:", authHeader);
//       if (authHeader.startsWith("Bearer ")) {
//         token = authHeader.split(" ")[1];
//         console.log("✅ Extracted token from header:", token);
//       }
//     }

//     // ✅ If token missing
//     if (!token) {
//       console.log("❌ No token found in request");
//       return res.status(401).json({
//         success: false,
//         message: "Token missing",
//       });
//     }

//     // ✅ Verify token
//     const decode = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decode;
//     console.log("✅ Decoded JWT payload:", decode);

//     next();
//   } catch (error) {
//     console.log("❌ JWT verify error:", error.message);
//     if (error.name === "TokenExpiredError") {
//       return res
//         .status(401)
//         .json({ success: false, message: "Token expired. Please log in again." });
//     }
//     if (error.name === "JsonWebTokenError") {
//       return res.status(401).json({ success: false, message: "Invalid token." });
//     }
//     return res
//       .status(500)
//       .json({ success: false, message: "Authentication middleware error." });
//   }
// };

// // ========================
// // User Role Middleware
// // ========================
// exports.isuser = async (req, res, next) => {
//   try {
//     console.log("🧍 Checking user role:", req.user?.role);
//     if (!req.user) {
//       return res.status(401).json({
//         success: false,
//         message: "User not authenticated",
//       });
//     }

//     if (req.user.role !== "user") {
//       return res.status(403).json({
//         success: false,
//         message: "This is a protected route for users only",
//       });
//     }

//     next();
//   } catch (error) {
//     console.error("isuser middleware error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "User role verification failed",
//     });
//   }
// };

// // ========================
// // Admin Role Middleware
// // ========================
// exports.isadmin = async (req, res, next) => {
//   try {
//     console.log("🧑‍💼 Checking admin role:", req.user?.role);
//     if (!req.user) {
//       return res.status(401).json({
//         success: false,
//         message: "User not authenticated",
//       });
//     }

//     if (req.user.role !== "admin") {
//       return res.status(403).json({
//         success: false,
//         message: "Access denied. Admins only.",
//       });
//     }

//     next();
//   } catch (error) {
//     console.error("isadmin middleware error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Admin verification failed",
//     });
//   }
// };
