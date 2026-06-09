import "./AiAssistant.css";

function AiAssistant() {
  return (
    <div className="ai-page">

      <h1>AI Study Assistant</h1>

      <div className="chat-window">

        <div className="message user">
          Explain FFT
        </div>

        <div className="message bot">
          FFT reduces complexity from
          O(N²) to O(N log N).
        </div>

      </div>

      <div className="chat-input">

        <input
          placeholder="Ask a question..."
        />

        <button>Send</button>

      </div>

    </div>
  );
}

export default AiAssistant;