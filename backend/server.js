import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import registerRoutes from "./routes/registerRoutes.js";
import chatRoutes from "./routes/chatroute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/register", registerRoutes);
app.use("/api/chat", chatRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ MongoDB error:", err));

// Email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
});

transporter.verify(error => {
  if (error) console.log("❌ Email config error:", error);
  else console.log("✅ Email server ready");
});

// Test route
app.get("/", (req, res) => res.send("Backend Running"));

// Start server on all network interfaces (mobile can access via LAN)
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://10.62.56.55:${PORT}`);
});