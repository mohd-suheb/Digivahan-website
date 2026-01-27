const jwt = require("jsonwebtoken");

// Authentication Middleware

// exports.isauth = async (req, res, next) => {
//   try {
//     let token;

//     if (req.cookies && req.cookies.token) {
//       token = req.cookies.token;
//     } else if (req.header("Authorization")) {
//       const authHeader = req.header("Authorization");
//       console.log("📨 Auth Header:", authHeader);
//       if (authHeader.startsWith("Bearer ")) {
//         token = authHeader.split(" ")[1];
//       }
//     }

//     console.log("🔑 Token Length:", token ? token.length : 0);
//     console.log("🔍 JWT_SECRET:", process.env.JWT_SECRET);

//     if (!token) {
//       return res.status(401).json({
//         success: false,
//         message: "Token missing"
//       });
//     }

//     const decode = jwt.verify(token, process.env.JWT_SECRET);
//     console.log("✅ Decoded:", decode);
//     req.user = decode;
//     next();
//   } catch (error) {
//     console.log("❌ Error:", error.name, "-", error.message);
//     if (error.name === "TokenExpiredError") {
//       return res.status(401).json({ 
//         success: false, 
//         message: "Token expired" 
//       });
//     }
//     return res.status(401).json({ 
//       success: false, 
//       message: "Invalid token"
//     });
//   }
// };

exports.isauth = async (req, res, next) => {
  try {
    let token;

    // ✅ PEHLE AUTHORIZATION HEADER CHECK KARO (Priority 1)
    if (req.header("Authorization")) {
      const authHeader = req.header("Authorization");
      console.log("📨 Auth Header:", authHeader);

      if (authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
      }
    }
    // ✅ AGAR HEADER NAHI MILA, TAB COOKIES CHECK KARO (Priority 2)
    else if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
      console.log("🍪 Token from cookies");
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token missing"
      });
    }

    console.log("🔑 Final Token:", token);
    console.log("🔍 JWT_SECRET:", process.env.JWT_SECRET);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("✅ Decoded User:", decoded);

    req.user = decoded;
    next();

  } catch (error) {
    console.log("❌ JWT Error:", error.message);

    return res.status(401).json({
      success: false,
      message: "Invalid token"
    });
  }
}
// User Role Middleware
exports.isuser = async (req, res, next) => {
  try {
    if (!req.user || req.user.role !== "user") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Users only."
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User verification failed"
    });
  }
};

// Admin Role Middleware
exports.isadmin = async (req, res, next) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admins only."
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Admin verification failed"
    });
  }
};


