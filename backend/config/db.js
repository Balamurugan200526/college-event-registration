import express from "express";
import connectDB from "./config/db.js"; // your connectDB file

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("Server running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
