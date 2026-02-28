import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  regId: { type: String, required: true, unique: true },

  name: { type: String, required: true },

  email: {
    type: String,
    required: true,
    unique: true,      // 🔥 Prevent duplicate email
    lowercase: true,   // 🔥 abc@gmail.com = ABC@gmail.com
    trim: true         // 🔥 Remove spaces
  },

  whatsapp: String,
  phone: String,
  college: String,
  department: String,
  year: String,
  gender: String,
  city: String,
  eventName: String,
  message: String,

}, { timestamps: true });

export default mongoose.model("Registration", registrationSchema);