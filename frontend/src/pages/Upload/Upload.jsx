import { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import "./Upload.css";

function Upload() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("subject", subject);
    formData.append("uploaded_by", localStorage.getItem("userName"));
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/resources/upload",
        formData
      );

      setMessage(response.data.message);

      setTitle("");
      setSubject("");
      setFile(null);
    } catch (error) {
      setMessage("Upload Failed");
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="upload-container">
        <form
          className="upload-form"
          onSubmit={handleSubmit}
        >
          <h2>Upload Resource</h2>

          <input
            type="text"
            placeholder="Resource Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            required
          />

          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) =>
              setSubject(e.target.value)
            }
            required
          />

          <input
            type="file"
            accept=".pdf"
            onChange={(e) =>
              setFile(e.target.files[0])
            }
            required
          />

          <button type="submit">
            Upload PDF
          </button>

          {message && (
            <p className="upload-message">
              {message}
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export default Upload;