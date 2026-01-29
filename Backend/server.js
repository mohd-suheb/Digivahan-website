

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectdb = require("./config/db");

connectdb();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS Configuration - Updated for Vercel deployment
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://digivahan.in",
    "https://www.digivahan.in",
    "https://digivahan-website-wank.vercel.app", // Your Vercel URL
    "https://digivahan-website-wank-git-main-suhebs-projects-997a13c3.vercel.app", // Git deployment URL
    /\.vercel\.app$/ // Allow all Vercel preview deployments
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}));

// Routes
const authRoutes = require("./routes/authRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");
const orderRoutes = require("./routes/orderRoutes");
const trendingCarRoutes = require("./routes/trendingCarRoutes");
const comparisonRoutes = require("./routes/comparisonRoutes");
const newsRoutes = require("./routes/newsRoutes");
const queryRoutes = require("./routes/queryRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const reportRoutes = require("./routes/reportRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/trending-cars", trendingCarRoutes);
app.use("/api/comparisons", comparisonRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/queries", queryRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/reports", reportRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.json({ 
    message: "DigiVahan Backend API Running!",
    version: "1.0.0",
    status: "OK",
    timestamp: new Date()
  });
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "OK",
    message: "Server is healthy",
    database: "Connected",
    timestamp: new Date()
  });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ 
    error: "Route not found",
    path: req.path 
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({ 
    error: err.message || "Internal server error",
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Backend running on http://0.0.0.0:${PORT}`);
  console.log(`📦 Environment: ${process.env.NODE_ENV || 'development'}`);
});