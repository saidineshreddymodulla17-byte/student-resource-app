import "./Upload.css";

function Upload() {
  return (
    <div className="upload-page">

      <h1>Upload Resource</h1>

      <form className="upload-form">

        <input
          type="text"
          placeholder="Resource Title"
        />

        <textarea
          placeholder="Description"
        />

        <select>
          <option>Notes</option>
          <option>Placement</option>
          <option>Projects</option>
          <option>Previous Papers</option>
        </select>

        <div className="upload-box">
          <p>📁 Drag & Drop File Here</p>
          <input type="file" />
        </div>

        <button>
          Upload Resource
        </button>

      </form>

    </div>
  );
}

export default Upload;