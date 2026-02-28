import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,        // ✅ Prevent duplicate
    lowercase: true,     // ✅ Prevent case issue
    trim: true           // ✅ Remove spaces
  },
  phone: String,
  college: String
});

export default mongoose.model("User", userSchema);