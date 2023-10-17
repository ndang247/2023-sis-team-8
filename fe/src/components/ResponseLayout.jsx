import React, { useState } from "react";
import "@css/responseLayoutStyles.css";
import axios from 'axios';

const ResponseLayout = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

const chatWithGPT3 = async (userInput) => {
    const apiEndpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `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`
    };

    const data = {
      prompt: userInput,
      max_tokens: 150
    };
try {
      const response = await axios.post(apiEndpoint, data, { headers });
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error('Unable to reach the API:', error.message);
      return '';
    }
  };
  
  return (
    <div className="response-container">
      <div className="response-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.user ? 'user-message' : 'ai-message'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form className="response-input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(res) => setInput(res.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default ResponseLayout;