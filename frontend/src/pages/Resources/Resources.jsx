import { useEffect, useState } from "react";
import axios from "axios";
import "./Resources.css";

function Resources() {
  const [resources, setResources] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/resources"
      );

      setResources(response.data.resources);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resource?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/resources/${id}`
      );

      fetchResources();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredResources = resources.filter((resource) =>
    resource.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="resources-page">
      <h1>Resources</h1>

      <input
        className="search-input"
        placeholder="Search resources..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="resource-grid">
        {filteredResources.map((resource) => (
          <div
            className="resource-card"
            key={resource.id}
          >
            <h3>{resource.title}</h3>

            <p>
              <strong>Subject:</strong>{" "}
              {resource.subject}
            </p>

            <p>
              <strong>Uploaded By:</strong>{" "}
              {resource.uploaded_by}
            </p>

            <div className="resource-actions">
              <a
                href={`http://localhost:5000/uploads/${resource.file_name}`}
                target="_blank"
                rel="noreferrer"
              >
                <button>
                  View PDF
                </button>
              </a>

              <a
                href={`http://localhost:5000/uploads/${resource.file_name}`}
                download
              >
                <button>
                  Download
                </button>
              </a>

              <button
                onClick={() =>
                  handleDelete(resource.id)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;