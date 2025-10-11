require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");   

const conndb = require('./config/db.js');
conndb();

const app = express();
app.use(express.json()); // to parse JSON body
// app.use('/', userRoutes); /
const privacyPolicy = require("./routes/privacyPolicy.js");
app.use("/api", privacyPolicy);


app.use(cors());

//privacy policy api


const API_KEY = process.env.NEWS_API_KEY;
// console.log("api key...", API_KEY);
app.get("/api/news", async (req, res) => {
    //  console.log("GET /api/news called");
  try {
  const response = await fetch(  `https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=${API_KEY}`
 );
     
   
    const data = await response.json();
    console.log("Raw API response:", data);
    console.log("Articles count:", data.articles?.length);
    res.json(data.articles || []); // fallback empty array
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Error fetching news" });
  }
});

const userRoutes = require('./routes/Userroutes.js');
app.use('/api', userRoutes);

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`)
);
