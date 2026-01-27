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

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://digivahan.in",
    "https://www.digivahan.in"
  ],
  credentials: true
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

app.get("/", (req, res) => {
  res.json({ 
    message: "DigiVahan Backend API Running!",
    version: "1.0.0"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Backend running on http://0.0.0.0:${PORT}`);
});
