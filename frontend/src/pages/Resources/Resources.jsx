import "./Resources.css";

function Resources() {

  const resources = [
    {
      id:1,
      title:"DSP Notes",
      author:"John",
      downloads:120,
      rating:4.8,
      category:"Notes"
    },
    {
      id:2,
      title:"DBMS PYQs",
      author:"Sarah",
      downloads:95,
      rating:4.7,
      category:"Previous Papers"
    },
    {
      id:3,
      title:"React Handbook",
      author:"Alex",
      downloads:80,
      rating:4.9,
      category:"Programming"
    }
  ];

  return (
    <div className="resources-page">

      <h1>Resources</h1>

      <input
        className="search-input"
        placeholder="Search resources..."
      />

      <div className="resource-grid">

        {resources.map((resource)=>(
          <div className="resource-card" key={resource.id}>

            <h3>{resource.title}</h3>

            <p>By {resource.author}</p>

            <span className="tag">
              {resource.category}
            </span>

            <p>{resource.downloads} Downloads</p>

            <p>⭐ {resource.rating}</p>

            <div className="resource-actions">
              <button>View</button>
              <button>Download</button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Resources;