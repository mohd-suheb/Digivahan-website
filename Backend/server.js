require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const fetch = require("node-fetch");
const conndb = require("./config/db.js");

conndb();

const app = express();
const PORT = process.env.PORT || 5000;

// ===========================
// Middlewares
// ===========================
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: [
    "https://digivahan.in",
    "https://www.digivahan.in"
  ],
  credentials: true
}));
const userRoutes = require("./routes/Userroutes.js");
app.use("/api/user", userRoutes);   // ⭐⭐ THIS WAS MISSING ⭐⭐


// ===========================
// // Routes
// //
// const userRoutes = require("./routes/Userroutes.js");
// const otpRoutes = require("./routes/otproutes.js");


// app.use("/api/otp", otpRoutes);

// ===========================
// Test external API
// ===========================
// const API_KEY = process.env.NEWS_API_KEY;
// app.get("/api/news", async (req, res) => {
//   try {
//     const response = await fetch(`https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=${API_KEY}`);
//     const data = await response.json();
//     res.json(data.articles || []);
//   } catch (error) {
//     console.error("Error fetching news:", error);
//     res.status(500).json({ error: "Error fetching news" });
//   }
// });

// ===========================
// Start server
// ===========================
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Backend running on http://0.0.0.0:${PORT}`);
});


