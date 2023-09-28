import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
});

export const sendPrompt = async (prompt) => {
  try {
    console.log(prompt);
    const response = await api.post("/chat", prompt, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
