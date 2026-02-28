import axios from "axios";

// Use environment variable for backend URL
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const registerUser = (data) => {
  return axios.post(`${API_URL}/api/register`, data);
};