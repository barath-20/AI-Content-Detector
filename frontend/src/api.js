import axios from "axios";

const API_BASE = "http://localhost:8000"; // Adjust to backend URL

export const checkAIContent = async (text) => {
  const response = await axios.post(`${API_BASE}/detect-ai`, { text });
  return response.data;
};

export const sendTypingData = async (data) => {
  const response = await axios.post(`${API_BASE}/analyze-typing`, data);
  return response.data;
};
