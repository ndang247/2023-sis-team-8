import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
});

export const sendPrompt = async (prompt) => {
  console.log("Sending prompt:", prompt);

  try {
    const response = await api.post("/chat", prompt, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Res received:", response.status, response.statusText);
 
    if (response.data) {
      console.log("Res data", response.data);
    } else {
      console.warn("There was no reponse data returned.");
    }
    return response.data;
  } catch (error) {
    console.error("This is the error", error.message);
    if (error.response) {
      console.error("Status of error response", error.response.status);
      console.error("error response data:", error.response.data);
    } else {
      console.warn("There was no response from server.");
    }
    if (error.request) {
      console.error("request error:", error.request);
    }
    if (error.code) {
      console.error("Network error:", error.code);
    }
  }
};
