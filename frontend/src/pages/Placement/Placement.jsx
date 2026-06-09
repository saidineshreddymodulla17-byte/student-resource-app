import "./Placement.css";

function Placement() {

  const companies = [
    "Amazon",
    "Microsoft",
    "Infosys",
    "TCS",
    "Google",
    "Accenture"
  ];

  return (
    <div className="placement-page">

      <h1>Placement Preparation</h1>

      <div className="company-grid">

        {companies.map((company)=>(
          <div className="company-card" key={company}>

            <h3>{company}</h3>

            <p>Questions: 45</p>

            <p>Experiences: 120</p>

            <button>Explore</button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Placement;