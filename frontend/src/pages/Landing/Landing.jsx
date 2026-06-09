import Navbar from "../../components/Navbar/Navbar";
import "./Landing.css";

function Landing() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>
          Learn Faster.
          <br />
          Share Smarter.
        </h1>

        <p>
          A centralized platform for notes, previous papers,
          placement preparation and AI-powered learning tools.
        </p>

        <div className="hero-buttons">
          <button>Get Started</button>
          <button className="secondary">
            Explore Resources
          </button>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          📚
          <h3>Notes Sharing</h3>
          <p>Upload and access study materials.</p>
        </div>

        <div className="feature-card">
          💻
          <h3>Placement Prep</h3>
          <p>Interview experiences and DSA resources.</p>
        </div>

        <div className="feature-card">
          🤖
          <h3>AI Assistant</h3>
          <p>Summaries, quizzes and doubt solving.</p>
        </div>
      </section>
    </>
  );
}

export default Landing;