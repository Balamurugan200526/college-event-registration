import Registration from "../models/Registration.js";
import sendEmail from "../utils/sendEmail.js";

export const registerUser = async (req, res) => {
  try {
    const data = req.body;

    // Validate email
    if (!data.email) {
      return res.status(400).json({
        message: "Email is required ❌"
      });
    }

    const email = data.email.toLowerCase().trim();

    // 🔍 Check if email already registered
    const existingUser = await Registration.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered ❌"
      });
    }

    // Generate registration ID
    const regId = "EVT" + Date.now();

    // Save user
    const user = await Registration.create({
      ...data,
      email,
      regId
    });

    // Send confirmation email
    try {
      await sendEmail(
        email,
        "Event Registration Confirmed 🎉",
        `
        <h2>🎉 Registration Successful</h2>
        <p><b>Event:</b> ${data.eventName || "Tech Fest 2026"}</p>
        <p><b>Registration ID:</b> ${regId}</p>
        <p>Thank you for registering. See you at the event!</p>
        `
      );
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    res.status(201).json({
      message: "Registered Successfully ✅",
      user
    });

  } catch (error) {
    console.error("Registration error:", error);

    res.status(500).json({
      message: "Registration failed ❌",
      error: error.message
    });
  }
};