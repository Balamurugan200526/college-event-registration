import { useState } from "react";
import { registerUser } from "../services/api";
import "./EventForm.css";

export default function EventForm() {
  const initialForm = {
    name: "", email: "", whatsapp: "", phone: "",
    college: "", department: "", year: "",
    gender: "", city: "", eventName: "", message: "",
  };

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await registerUser(form);
      setStatus("✅ Registration Successful!");
      setForm(initialForm);
    } catch (error) {
      setStatus(
        `❌ Registration failed: ${error.response?.data?.message || error.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="rvhead">
        <div className="marquee">
          🎉 Register For Event • 🎉 Register For Event • 🎉 Register For Event •
        </div>
      </div>

      {status && (
        <p className={`message ${status.includes("✅") ? "success" : "error"}`}>
          {status}
        </p>
      )}

      <form onSubmit={submit}>
        <div className="input-icon"><span>👤</span><input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required /></div>
        <div className="input-icon"><span>📧</span><input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required /></div>
        <div className="input-icon"><span>📱</span><input name="whatsapp" placeholder="WhatsApp Number" value={form.whatsapp} onChange={handleChange} required /></div>
        <div className="input-icon"><span>📞</span><input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required /></div>
        <div className="input-icon"><span>🏫</span><input name="college" placeholder="College Name" value={form.college} onChange={handleChange} required /></div>
        <div className="input-icon"><span>📚</span><input name="department" placeholder="Department" value={form.department} onChange={handleChange} required /></div>
        <div className="input-icon"><span>🌆</span><input name="city" placeholder="City" value={form.city} onChange={handleChange} required /></div>
        <div className="input-icon"><span>🎯</span><input name="eventName" placeholder="Event Name" value={form.eventName} onChange={handleChange} required /></div>

        <select name="year" value={form.year} onChange={handleChange} required>
          <option value="">Select Year</option>
          <option>1st Year</option>
          <option>2nd Year</option>
          <option>3rd Year</option>
          <option>4th Year</option>
        </select>

        <select name="gender" value={form.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <textarea name="message" placeholder="Any expectations / message" value={form.message} onChange={handleChange} rows="3" />

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}