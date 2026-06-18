import { useState } from "react";
import axios from "axios";
import "./AiAssistant.css";

function AiAssistant() {
  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hello! Ask me about FFT, DBMS or Operating Systems.",
    },
  ]);

  const handleSend = async () => {
    if (!question.trim()) return;

    const userMessage = {
      type: "user",
      text: question,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/ai/ask",
        {
          question,
        }
      );

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: response.data.answer,
        },
      ]);

      setQuestion("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ai-page">
      <h1>AI Study Assistant</h1>

      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.type}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
          placeholder="Ask a question..."
        />

        <button onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}

export default AiAssistant;