require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const conndb = require("./config/db.js");

conndb();

const app = express();
const PORT = process.env.PORT || 5000;

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

const userRoutes = require("./routes/Userroutes.js");
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Backend is running!" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log('Backend running on http://0.0.0.0:' + PORT);
});

