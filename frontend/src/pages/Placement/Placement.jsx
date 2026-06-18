import { useEffect, useState } from "react";
import axios from "axios";
import "./Placement.css";

function Placement() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/placements"
      );

      setExperiences(response.data.experiences);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    try {
      await axios.post(
        "http://localhost:5000/api/placements",
        {
          company,
          role,
          experience,
          author: user?.name || "Anonymous",
        }
      );

      setCompany("");
      setRole("");
      setExperience("");

      fetchExperiences();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="placement-page">
      <h1>Placement Experiences</h1>

      <form
        className="placement-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) =>
            setCompany(e.target.value)
          }
          required
        />

        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
          required
        />

        <textarea
          placeholder="Share your interview experience..."
          value={experience}
          onChange={(e) =>
            setExperience(e.target.value)
          }
          required
        />

        <button type="submit">
          Submit Experience
        </button>
      </form>

      <div className="company-grid">
        {experiences.map((item) => (
          <div
            className="company-card"
            key={item.id}
          >
            <h3>{item.company}</h3>

            <p>
              <strong>Role:</strong>{" "}
              {item.role}
            </p>

            <p>
              <strong>By:</strong>{" "}
              {item.author}
            </p>

            <p className="experience-text">
              {item.experience}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Placement;